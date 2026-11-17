import { prisma } from "../../lib/prisma.js";
function getDateFilter(from, to) {
    const filter = {};
    if (from) {
        const start = new Date(`${from}T00:00:00.000Z`);
        if (Number.isNaN(start.getTime())) {
            throw new Error("Invalid from date. Use YYYY-MM-DD.");
        }
        filter.gte = start;
    }
    if (to) {
        const end = new Date(`${to}T00:00:00.000Z`);
        if (Number.isNaN(end.getTime())) {
            throw new Error("Invalid to date. Use YYYY-MM-DD.");
        }
        // Exclusive upper bound includes the entire "to" calendar day.
        end.setUTCDate(end.getUTCDate() + 1);
        filter.lt = end;
    }
    if (filter.gte && filter.lt && filter.gte >= filter.lt) {
        throw new Error("'from' date must be before or equal to 'to' date.");
    }
    return filter;
}
function toNumber(value) {
    if (value === null || value === undefined)
        return 0;
    return Number(value);
}
async function checkApprovedUser(userId) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { accountStatus: true },
    });
    if (!user) {
        throw new Error("User not found.");
    }
    if (user.accountStatus !== "APPROVED") {
        throw new Error("Your account is not approved.");
    }
}
async function getCowStatistics() {
    const [totalCows, activeCows, statusGroups, stageGroups] = await Promise.all([
        prisma.cow.count(),
        prisma.cow.count({
            where: { status: "ACTIVE" },
        }),
        prisma.cow.groupBy({
            by: ["status"],
            _count: { _all: true },
        }),
        prisma.cow.groupBy({
            by: ["stage"],
            _count: { _all: true },
        }),
    ]);
    return {
        totalCows,
        activeCows,
        statusBreakdown: statusGroups.map((item) => ({
            status: item.status,
            count: item._count._all,
        })),
        stageBreakdown: stageGroups.map((item) => ({
            stage: item.stage,
            count: item._count._all,
        })),
    };
}
async function getMilkStatistics(from, to) {
    const dateFilter = getDateFilter(from, to);
    const [aggregate, records] = await Promise.all([
        prisma.milkProduction.aggregate({
            where: { productionDate: dateFilter },
            _sum: {
                morningYield: true,
                eveningYield: true,
            },
            _avg: {
                morningYield: true,
                eveningYield: true,
            },
            _count: { _all: true },
        }),
        prisma.milkProduction.findMany({
            where: { productionDate: dateFilter },
            select: {
                productionDate: true,
                morningYield: true,
                eveningYield: true,
                cowId: true,
            },
            orderBy: { productionDate: "asc" },
        }),
    ]);
    const morningTotal = toNumber(aggregate._sum.morningYield);
    const eveningTotal = toNumber(aggregate._sum.eveningYield);
    const totalProduction = morningTotal + eveningTotal;
    const dailyMap = new Map();
    const cowIds = new Set();
    for (const record of records) {
        const date = record.productionDate.toISOString().slice(0, 10);
        const morning = toNumber(record.morningYield);
        const evening = toNumber(record.eveningYield);
        cowIds.add(record.cowId);
        const existing = dailyMap.get(date) ?? {
            morning: 0,
            evening: 0,
            total: 0,
        };
        existing.morning += morning;
        existing.evening += evening;
        existing.total += morning + evening;
        dailyMap.set(date, existing);
    }
    const dailyProduction = Array.from(dailyMap.entries()).map(([date, values]) => ({
        date,
        morning: values.morning,
        evening: values.evening,
        total: values.total,
    }));
    return {
        totalProduction,
        morningTotal,
        eveningTotal,
        averageMorningYield: toNumber(aggregate._avg.morningYield),
        averageEveningYield: toNumber(aggregate._avg.eveningYield),
        productionRecords: aggregate._count._all,
        cowsWithProduction: cowIds.size,
        averageProductionPerRecord: aggregate._count._all > 0
            ? totalProduction / aggregate._count._all
            : 0,
        dailyProduction,
    };
}
async function getExpenseStatistics(from, to) {
    const dateFilter = getDateFilter(from, to);
    const [generalExpenses, feedExpenses, feedPurchases] = await Promise.all([
        prisma.expense.aggregate({
            where: {
                status: "APPROVED",
                expenseDate: dateFilter,
            },
            _sum: { amount: true },
            _count: { _all: true },
        }),
        prisma.feedExpense.aggregate({
            where: { expenseDate: dateFilter },
            _sum: { amount: true },
            _count: { _all: true },
        }),
        prisma.feedPurchase.aggregate({
            where: { purchaseDate: dateFilter },
            _sum: { totalCost: true },
            _count: { _all: true },
        }),
    ]);
    const [generalByCategory, feedByCategory] = await Promise.all([
        prisma.expense.groupBy({
            by: ["category"],
            where: {
                status: "APPROVED",
                expenseDate: dateFilter,
            },
            _sum: { amount: true },
        }),
        prisma.feedExpense.groupBy({
            by: ["category"],
            where: { expenseDate: dateFilter },
            _sum: { amount: true },
        }),
    ]);
    const generalTotal = toNumber(generalExpenses._sum.amount);
    const feedExpenseTotal = toNumber(feedExpenses._sum.amount);
    const feedPurchaseTotal = toNumber(feedPurchases._sum.totalCost);
    const categoryMap = new Map();
    for (const item of generalByCategory) {
        categoryMap.set(item.category, (categoryMap.get(item.category) ?? 0) +
            toNumber(item._sum.amount));
    }
    for (const item of feedByCategory) {
        categoryMap.set(item.category, (categoryMap.get(item.category) ?? 0) +
            toNumber(item._sum.amount));
    }
    categoryMap.set("FEED_PURCHASE", (categoryMap.get("FEED_PURCHASE") ?? 0) + feedPurchaseTotal);
    return {
        totalExpenses: generalTotal + feedExpenseTotal + feedPurchaseTotal,
        generalExpenseTotal: generalTotal,
        feedExpenseTotal,
        feedPurchaseTotal,
        generalExpenseCount: generalExpenses._count._all,
        feedExpenseCount: feedExpenses._count._all,
        feedPurchaseCount: feedPurchases._count._all,
        categoryBreakdown: Array.from(categoryMap.entries()).map(([category, amount]) => ({
            category,
            amount,
        })),
    };
}
async function getRevenueStatistics(from, to) {
    const dateFilter = getDateFilter(from, to);
    const [aggregate, categoryGroups, records] = await Promise.all([
        prisma.financialIncome.aggregate({
            where: {
                status: "APPROVED",
                incomeDate: dateFilter,
            },
            _sum: { amount: true },
            _count: { _all: true },
        }),
        prisma.financialIncome.groupBy({
            by: ["category"],
            where: {
                status: "APPROVED",
                incomeDate: dateFilter,
            },
            _sum: { amount: true },
        }),
        prisma.financialIncome.findMany({
            where: {
                status: "APPROVED",
                incomeDate: dateFilter,
            },
            select: {
                id: true,
                title: true,
                category: true,
                amount: true,
                incomeDate: true,
            },
            orderBy: { incomeDate: "desc" },
        }),
    ]);
    return {
        totalRevenue: toNumber(aggregate._sum.amount),
        incomeCount: aggregate._count._all,
        categoryBreakdown: categoryGroups.map((item) => ({
            category: item.category,
            amount: toNumber(item._sum.amount),
        })),
        records: records.map((item) => ({
            ...item,
            amount: toNumber(item.amount),
        })),
    };
}
async function buildProfitAndLoss(from, to) {
    const [revenue, expenses] = await Promise.all([
        getRevenueStatistics(from, to),
        getExpenseStatistics(from, to),
    ]);
    const netProfit = revenue.totalRevenue - expenses.totalExpenses;
    return {
        totalRevenue: revenue.totalRevenue,
        totalExpenses: expenses.totalExpenses,
        netProfit,
        result: netProfit > 0
            ? "PROFIT"
            : netProfit < 0
                ? "LOSS"
                : "BREAK_EVEN",
    };
}
// ==========================================
// PUBLIC REPORT APIs
// ==========================================
export async function getDashboardReport(userId, range) {
    await checkApprovedUser(userId);
    const [cows, milk, expenses, revenue, profitAndLoss] = await Promise.all([
        getCowStatistics(),
        getMilkStatistics(range.from, range.to),
        getExpenseStatistics(range.from, range.to),
        getRevenueStatistics(range.from, range.to),
        buildProfitAndLoss(range.from, range.to),
    ]);
    return {
        period: {
            from: range.from ?? null,
            to: range.to ?? null,
        },
        cows,
        milkProduction: milk,
        expenses,
        revenue: {
            totalRevenue: revenue.totalRevenue,
            incomeCount: revenue.incomeCount,
            categoryBreakdown: revenue.categoryBreakdown,
        },
        profitAndLoss,
    };
}
export async function getMilkProductionReport(userId, range) {
    await checkApprovedUser(userId);
    return getMilkStatistics(range.from, range.to);
}
export async function getExpenseReport(userId, range) {
    await checkApprovedUser(userId);
    return getExpenseStatistics(range.from, range.to);
}
export async function getRevenueReport(userId, range) {
    await checkApprovedUser(userId);
    return getRevenueStatistics(range.from, range.to);
}
export async function getProfitAndLossReport(userId, range) {
    await checkApprovedUser(userId);
    return buildProfitAndLoss(range.from, range.to);
}
//# sourceMappingURL=reports.service.js.map