import { prisma } from "../../lib/prisma.js";
import { Prisma } from "../../generated/prisma/client.js";
// ==========================================
// APPROVED USER VALIDATION
// ==========================================
async function checkApprovedUser(userId) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, accountStatus: true },
    });
    if (!user || user.accountStatus !== "APPROVED") {
        throw new Error("Your account is not approved.");
    }
    return user;
}
// ==========================================
// VALIDATION HELPERS
// ==========================================
function parseDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        throw new Error("Date must be in YYYY-MM-DD format.");
    }
    const date = new Date(`${value}T00:00:00.000Z`);
    if (Number.isNaN(date.getTime()) ||
        date.toISOString().slice(0, 10) !== value) {
        throw new Error("Invalid date.");
    }
    return date;
}
function parsePositiveDecimal(value, fieldName, allowZero = false) {
    const amount = Number(value);
    if (!Number.isFinite(amount) ||
        (allowZero ? amount < 0 : amount <= 0)) {
        throw new Error(allowZero
            ? `${fieldName} must be a non-negative number.`
            : `${fieldName} must be greater than zero.`);
    }
    return new Prisma.Decimal(amount.toString());
}
function parseMoney(value) {
    const amount = Number(value);
    if (!Number.isFinite(amount) || amount < 0) {
        throw new Error("Amount must be a valid non-negative number.");
    }
    return new Prisma.Decimal(amount.toFixed(2));
}
function validateDateRange(from, to) {
    const fromDate = parseDate(from);
    const toDate = parseDate(to);
    if (fromDate > toDate) {
        throw new Error("From date cannot be after to date.");
    }
    return { fromDate, toDate };
}
// ==========================================
// FEED SERVICE
// ==========================================
export class FeedService {
    // ==========================================
    // CREATE FEED ITEM
    // ==========================================
    static async createFeedItem(userId, data) {
        await checkApprovedUser(userId);
        if (!data.name?.trim() || !data.unit?.trim()) {
            throw new Error("Feed name and unit are required.");
        }
        const reorderLevel = data.reorderLevel !== undefined
            ? parsePositiveDecimal(data.reorderLevel, "Reorder level", true)
            : new Prisma.Decimal(0);
        try {
            return await prisma.feedItem.create({
                data: {
                    name: data.name.trim(),
                    description: data.description?.trim() || null,
                    unit: data.unit.trim(),
                    reorderLevel,
                    createdById: userId,
                },
            });
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === "P2002") {
                throw new Error("A feed item with this name already exists.");
            }
            throw error;
        }
    }
    // ==========================================
    // UPDATE FEED ITEM DETAILS
    // ==========================================
    static async updateFeedItem(userId, feedItemId, data) {
        await checkApprovedUser(userId);
        const existing = await prisma.feedItem.findUnique({
            where: { id: feedItemId },
        });
        if (!existing) {
            throw new Error("Feed item not found.");
        }
        const updateData = {};
        if (data.name !== undefined) {
            if (!data.name.trim()) {
                throw new Error("Feed name cannot be empty.");
            }
            updateData.name = data.name.trim();
        }
        if (data.description !== undefined) {
            updateData.description = data.description?.trim() || null;
        }
        if (data.unit !== undefined) {
            if (!data.unit.trim()) {
                throw new Error("Unit cannot be empty.");
            }
            updateData.unit = data.unit.trim();
        }
        if (data.reorderLevel !== undefined) {
            updateData.reorderLevel = parsePositiveDecimal(data.reorderLevel, "Reorder level", true);
        }
        if (data.isActive !== undefined) {
            updateData.isActive = data.isActive;
        }
        return prisma.feedItem.update({
            where: { id: feedItemId },
            data: updateData,
        });
    }
    // ==========================================
    // GET FEED INVENTORY
    // ==========================================
    static async getInventory(userId) {
        await checkApprovedUser(userId);
        const items = await prisma.feedItem.findMany({
            orderBy: { name: "asc" },
            include: {
                _count: {
                    select: {
                        purchases: true,
                        consumptions: true,
                    },
                },
            },
        });
        return items.map((item) => {
            const currentStock = Number(item.currentStock);
            const reorderLevel = Number(item.reorderLevel);
            return {
                ...item,
                currentStock,
                reorderLevel,
                lowStock: currentStock <= reorderLevel,
            };
        });
    }
    // ==========================================
    // GET SINGLE FEED ITEM
    // ==========================================
    static async getFeedItem(userId, feedItemId) {
        await checkApprovedUser(userId);
        const item = await prisma.feedItem.findUnique({
            where: { id: feedItemId },
            include: {
                purchases: {
                    orderBy: { purchaseDate: "desc" },
                    take: 20,
                },
                consumptions: {
                    orderBy: { consumptionDate: "desc" },
                    take: 20,
                    include: {
                        cow: {
                            select: {
                                id: true,
                                tagNumber: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        });
        if (!item) {
            throw new Error("Feed item not found.");
        }
        return {
            ...item,
            currentStock: Number(item.currentStock),
            reorderLevel: Number(item.reorderLevel),
        };
    }
    // ==========================================
    // RECORD FEED PURCHASE
    // Automatically increases inventory
    // ==========================================
    static async createPurchase(userId, data) {
        await checkApprovedUser(userId);
        const quantity = parsePositiveDecimal(data.quantity, "Purchase quantity");
        const unitPrice = parseMoney(data.unitPrice);
        const totalCost = quantity.mul(unitPrice).toDecimalPlaces(2);
        const purchaseDate = parseDate(data.purchaseDate);
        return prisma.$transaction(async (tx) => {
            const item = await tx.feedItem.findUnique({
                where: { id: data.feedItemId },
            });
            if (!item || !item.isActive) {
                throw new Error("Active feed item not found.");
            }
            const purchase = await tx.feedPurchase.create({
                data: {
                    feedItemId: data.feedItemId,
                    quantity,
                    unitPrice,
                    totalCost,
                    supplier: data.supplier?.trim() || null,
                    invoiceNumber: data.invoiceNumber?.trim() || null,
                    purchaseDate,
                    notes: data.notes?.trim() || null,
                    recordedById: userId,
                },
                include: {
                    feedItem: true,
                },
            });
            await tx.feedItem.update({
                where: { id: data.feedItemId },
                data: {
                    currentStock: { increment: quantity },
                },
            });
            return {
                ...purchase,
                totalCost: Number(totalCost),
                quantity: Number(quantity),
                unitPrice: Number(unitPrice),
            };
        });
    }
    // ==========================================
    // GET PURCHASE HISTORY
    // ==========================================
    static async getPurchases(userId, feedItemId, from, to) {
        await checkApprovedUser(userId);
        if (from && to) {
            validateDateRange(from, to);
        }
        const purchaseDate = {};
        if (from)
            purchaseDate.gte = parseDate(from);
        if (to)
            purchaseDate.lte = parseDate(to);
        const purchases = await prisma.feedPurchase.findMany({
            where: {
                ...(feedItemId ? { feedItemId } : {}),
                ...(from || to ? { purchaseDate } : {}),
            },
            include: {
                feedItem: {
                    select: {
                        id: true,
                        name: true,
                        unit: true,
                    },
                },
            },
            orderBy: { purchaseDate: "desc" },
        });
        return purchases.map((purchase) => ({
            ...purchase,
            quantity: Number(purchase.quantity),
            unitPrice: Number(purchase.unitPrice),
            totalCost: Number(purchase.totalCost),
        }));
    }
    // ==========================================
    // RECORD DAILY FEED CONSUMPTION
    // Automatically decreases inventory
    // ==========================================
    static async createConsumption(userId, data) {
        await checkApprovedUser(userId);
        const quantity = parsePositiveDecimal(data.quantity, "Consumption quantity");
        const consumptionDate = parseDate(data.consumptionDate);
        return prisma.$transaction(async (tx) => {
            const item = await tx.feedItem.findUnique({
                where: { id: data.feedItemId },
            });
            if (!item || !item.isActive) {
                throw new Error("Active feed item not found.");
            }
            if (data.cowId) {
                const cow = await tx.cow.findUnique({
                    where: { id: data.cowId },
                    select: { id: true, status: true },
                });
                if (!cow || cow.status !== "ACTIVE") {
                    throw new Error("Active cow not found.");
                }
            }
            // Atomic stock check and deduction.
            const stockUpdate = await tx.feedItem.updateMany({
                where: {
                    id: data.feedItemId,
                    isActive: true,
                    currentStock: { gte: quantity },
                },
                data: {
                    currentStock: { decrement: quantity },
                },
            });
            if (stockUpdate.count === 0) {
                throw new Error("Insufficient feed stock.");
            }
            const consumption = await tx.feedConsumption.create({
                data: {
                    feedItemId: data.feedItemId,
                    ...(data.cowId ? { cowId: data.cowId } : {}),
                    quantity,
                    consumptionDate,
                    notes: data.notes?.trim() || null,
                    recordedById: userId,
                },
                include: {
                    feedItem: true,
                    cow: {
                        select: {
                            id: true,
                            tagNumber: true,
                            name: true,
                        },
                    },
                },
            });
            return {
                ...consumption,
                quantity: Number(consumption.quantity),
            };
        });
    }
    // ==========================================
    // GET DAILY CONSUMPTION
    // ==========================================
    static async getDailyConsumption(userId, dateString) {
        await checkApprovedUser(userId);
        const date = parseDate(dateString);
        const records = await prisma.feedConsumption.findMany({
            where: {
                consumptionDate: date,
            },
            include: {
                feedItem: {
                    select: {
                        id: true,
                        name: true,
                        unit: true,
                    },
                },
                cow: {
                    select: {
                        id: true,
                        tagNumber: true,
                        name: true,
                    },
                },
            },
            orderBy: { createdAt: "asc" },
        });
        const totals = new Map();
        for (const record of records) {
            const current = totals.get(record.feedItemId) || {
                feedItemId: record.feedItemId,
                feedName: record.feedItem.name,
                unit: record.feedItem.unit,
                totalQuantity: 0,
            };
            current.totalQuantity += Number(record.quantity);
            totals.set(record.feedItemId, current);
        }
        return {
            date: dateString,
            totalEntries: records.length,
            feedTotals: Array.from(totals.values()),
            records: records.map((record) => ({
                ...record,
                quantity: Number(record.quantity),
            })),
        };
    }
    // ==========================================
    // GET COW CONSUMPTION HISTORY
    // ==========================================
    static async getCowConsumption(userId, cowId, from, to) {
        await checkApprovedUser(userId);
        const cow = await prisma.cow.findUnique({
            where: { id: cowId },
            select: {
                id: true,
                tagNumber: true,
                name: true,
            },
        });
        if (!cow) {
            throw new Error("Cow not found.");
        }
        if (from && to)
            validateDateRange(from, to);
        const consumptionDate = {};
        if (from)
            consumptionDate.gte = parseDate(from);
        if (to)
            consumptionDate.lte = parseDate(to);
        const records = await prisma.feedConsumption.findMany({
            where: {
                cowId,
                ...(from || to ? { consumptionDate } : {}),
            },
            include: {
                feedItem: {
                    select: {
                        id: true,
                        name: true,
                        unit: true,
                    },
                },
            },
            orderBy: { consumptionDate: "asc" },
        });
        const totals = new Map();
        for (const record of records) {
            const current = totals.get(record.feedItemId) || {
                feedName: record.feedItem.name,
                unit: record.feedItem.unit,
                quantity: 0,
            };
            current.quantity += Number(record.quantity);
            totals.set(record.feedItemId, current);
        }
        return {
            cow,
            totalEntries: records.length,
            feedTotals: Array.from(totals.entries()).map(([feedItemId, values]) => ({
                feedItemId,
                ...values,
            })),
            records: records.map((record) => ({
                ...record,
                quantity: Number(record.quantity),
            })),
        };
    }
    // ==========================================
    // CREATE OTHER FEED EXPENSE
    // For transport, storage, labour, etc.
    // ==========================================
    static async createFeedExpense(userId, data) {
        await checkApprovedUser(userId);
        if (!data.title?.trim()) {
            throw new Error("Expense title is required.");
        }
        const amount = parseMoney(data.amount);
        const expenseDate = parseDate(data.expenseDate);
        const expense = await prisma.feedExpense.create({
            data: {
                title: data.title.trim(),
                description: data.description?.trim() || null,
                amount,
                expenseDate,
                category: data.category?.trim() || "OTHER",
                recordedById: userId,
            },
        });
        return {
            ...expense,
            amount: Number(expense.amount),
        };
    }
    // ==========================================
    // GET FEED EXPENSES
    // ==========================================
    static async getFeedExpenses(userId, from, to) {
        await checkApprovedUser(userId);
        if (from && to)
            validateDateRange(from, to);
        const expenseDate = {};
        if (from)
            expenseDate.gte = parseDate(from);
        if (to)
            expenseDate.lte = parseDate(to);
        const [purchases, otherExpenses] = await Promise.all([
            prisma.feedPurchase.findMany({
                where: {
                    ...(from || to ? { purchaseDate: expenseDate } : {}),
                },
                include: {
                    feedItem: {
                        select: {
                            id: true,
                            name: true,
                            unit: true,
                        },
                    },
                },
                orderBy: { purchaseDate: "desc" },
            }),
            prisma.feedExpense.findMany({
                where: {
                    ...(from || to ? { expenseDate } : {}),
                },
                orderBy: { expenseDate: "desc" },
            }),
        ]);
        const purchaseTotal = purchases.reduce((sum, purchase) => sum + Number(purchase.totalCost), 0);
        const otherExpenseTotal = otherExpenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
        return {
            purchaseExpenses: purchases.map((purchase) => ({
                ...purchase,
                quantity: Number(purchase.quantity),
                unitPrice: Number(purchase.unitPrice),
                totalCost: Number(purchase.totalCost),
            })),
            otherExpenses: otherExpenses.map((expense) => ({
                ...expense,
                amount: Number(expense.amount),
            })),
            purchaseTotal,
            otherExpenseTotal,
            totalFeedExpenses: purchaseTotal + otherExpenseTotal,
        };
    }
    // ==========================================
    // FEED MANAGEMENT REPORT
    // ==========================================
    static async getFeedReport(userId, from, to) {
        await checkApprovedUser(userId);
        const { fromDate, toDate } = validateDateRange(from, to);
        const [purchases, consumptions, otherExpenses] = await Promise.all([
            prisma.feedPurchase.findMany({
                where: {
                    purchaseDate: {
                        gte: fromDate,
                        lte: toDate,
                    },
                },
                include: {
                    feedItem: {
                        select: {
                            id: true,
                            name: true,
                            unit: true,
                        },
                    },
                },
            }),
            prisma.feedConsumption.findMany({
                where: {
                    consumptionDate: {
                        gte: fromDate,
                        lte: toDate,
                    },
                },
                include: {
                    feedItem: {
                        select: {
                            id: true,
                            name: true,
                            unit: true,
                        },
                    },
                },
            }),
            prisma.feedExpense.findMany({
                where: {
                    expenseDate: {
                        gte: fromDate,
                        lte: toDate,
                    },
                },
            }),
        ]);
        const purchaseTotal = purchases.reduce((sum, purchase) => sum + Number(purchase.totalCost), 0);
        const otherExpenseTotal = otherExpenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
        const consumedByFeed = new Map();
        for (const record of consumptions) {
            const current = consumedByFeed.get(record.feedItemId) || {
                feedName: record.feedItem.name,
                unit: record.feedItem.unit,
                totalQuantity: 0,
            };
            current.totalQuantity += Number(record.quantity);
            consumedByFeed.set(record.feedItemId, current);
        }
        return {
            from,
            to,
            totalPurchases: purchases.length,
            totalConsumptionEntries: consumptions.length,
            totalPurchaseCost: purchaseTotal,
            totalOtherExpenses: otherExpenseTotal,
            totalFeedExpenses: purchaseTotal + otherExpenseTotal,
            consumptionByFeed: Array.from(consumedByFeed.entries()).map(([feedItemId, values]) => ({
                feedItemId,
                ...values,
            })),
            purchases: purchases.map((purchase) => ({
                ...purchase,
                quantity: Number(purchase.quantity),
                unitPrice: Number(purchase.unitPrice),
                totalCost: Number(purchase.totalCost),
            })),
        };
    }
}
//# sourceMappingURL=feed.service.js.map