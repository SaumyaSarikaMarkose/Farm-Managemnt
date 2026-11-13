export declare class FeedService {
    static createFeedItem(userId: string, data: {
        name: string;
        description?: string;
        unit: string;
        reorderLevel?: number | string;
    }): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        createdById: string;
        unit: string;
        currentStock: import("@prisma/client-runtime-utils").Decimal;
        reorderLevel: import("@prisma/client-runtime-utils").Decimal;
        isActive: boolean;
    }>;
    static updateFeedItem(userId: string, feedItemId: string, data: {
        name?: string;
        description?: string | null;
        unit?: string;
        reorderLevel?: number | string;
        isActive?: boolean;
    }): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        createdById: string;
        unit: string;
        currentStock: import("@prisma/client-runtime-utils").Decimal;
        reorderLevel: import("@prisma/client-runtime-utils").Decimal;
        isActive: boolean;
    }>;
    static getInventory(userId: string): Promise<{
        currentStock: number;
        reorderLevel: number;
        lowStock: boolean;
        _count: {
            purchases: number;
            consumptions: number;
        };
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        createdById: string;
        unit: string;
        isActive: boolean;
    }[]>;
    static getFeedItem(userId: string, feedItemId: string): Promise<{
        currentStock: number;
        reorderLevel: number;
        purchases: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            recordedById: string;
            purchaseDate: Date;
            feedItemId: string;
            quantity: import("@prisma/client-runtime-utils").Decimal;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalCost: import("@prisma/client-runtime-utils").Decimal;
            supplier: string | null;
            invoiceNumber: string | null;
        }[];
        consumptions: ({
            cow: {
                name: string | null;
                id: string;
                tagNumber: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            cowId: string | null;
            notes: string | null;
            recordedById: string;
            feedItemId: string;
            quantity: import("@prisma/client-runtime-utils").Decimal;
            consumptionDate: Date;
        })[];
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        createdById: string;
        unit: string;
        isActive: boolean;
    }>;
    static createPurchase(userId: string, data: {
        feedItemId: string;
        quantity: number | string;
        unitPrice: number | string;
        supplier?: string;
        invoiceNumber?: string;
        purchaseDate: string;
        notes?: string;
    }): Promise<{
        totalCost: number;
        quantity: number;
        unitPrice: number;
        feedItem: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            createdById: string;
            unit: string;
            currentStock: import("@prisma/client-runtime-utils").Decimal;
            reorderLevel: import("@prisma/client-runtime-utils").Decimal;
            isActive: boolean;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        recordedById: string;
        purchaseDate: Date;
        feedItemId: string;
        supplier: string | null;
        invoiceNumber: string | null;
    }>;
    static getPurchases(userId: string, feedItemId?: string, from?: string, to?: string): Promise<{
        quantity: number;
        unitPrice: number;
        totalCost: number;
        feedItem: {
            name: string;
            id: string;
            unit: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        recordedById: string;
        purchaseDate: Date;
        feedItemId: string;
        supplier: string | null;
        invoiceNumber: string | null;
    }[]>;
    static createConsumption(userId: string, data: {
        feedItemId: string;
        cowId?: string | null;
        quantity: number | string;
        consumptionDate: string;
        notes?: string;
    }): Promise<{
        quantity: number;
        cow: {
            name: string | null;
            id: string;
            tagNumber: string;
        } | null;
        feedItem: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            createdById: string;
            unit: string;
            currentStock: import("@prisma/client-runtime-utils").Decimal;
            reorderLevel: import("@prisma/client-runtime-utils").Decimal;
            isActive: boolean;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cowId: string | null;
        notes: string | null;
        recordedById: string;
        feedItemId: string;
        consumptionDate: Date;
    }>;
    static getDailyConsumption(userId: string, dateString: string): Promise<{
        date: string;
        totalEntries: number;
        feedTotals: {
            feedItemId: string;
            feedName: string;
            unit: string;
            totalQuantity: number;
        }[];
        records: {
            quantity: number;
            cow: {
                name: string | null;
                id: string;
                tagNumber: string;
            } | null;
            feedItem: {
                name: string;
                id: string;
                unit: string;
            };
            id: string;
            createdAt: Date;
            updatedAt: Date;
            cowId: string | null;
            notes: string | null;
            recordedById: string;
            feedItemId: string;
            consumptionDate: Date;
        }[];
    }>;
    static getCowConsumption(userId: string, cowId: string, from?: string, to?: string): Promise<{
        cow: {
            name: string | null;
            id: string;
            tagNumber: string;
        };
        totalEntries: number;
        feedTotals: {
            feedName: string;
            unit: string;
            quantity: number;
            feedItemId: string;
        }[];
        records: {
            quantity: number;
            feedItem: {
                name: string;
                id: string;
                unit: string;
            };
            id: string;
            createdAt: Date;
            updatedAt: Date;
            cowId: string | null;
            notes: string | null;
            recordedById: string;
            feedItemId: string;
            consumptionDate: Date;
        }[];
    }>;
    static createFeedExpense(userId: string, data: {
        title: string;
        description?: string;
        amount: number | string;
        expenseDate: string;
        category?: string;
    }): Promise<{
        amount: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        recordedById: string;
        title: string;
        expenseDate: Date;
        category: string;
    }>;
    static getFeedExpenses(userId: string, from?: string, to?: string): Promise<{
        purchaseExpenses: {
            quantity: number;
            unitPrice: number;
            totalCost: number;
            feedItem: {
                name: string;
                id: string;
                unit: string;
            };
            id: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            recordedById: string;
            purchaseDate: Date;
            feedItemId: string;
            supplier: string | null;
            invoiceNumber: string | null;
        }[];
        otherExpenses: {
            amount: number;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            recordedById: string;
            title: string;
            expenseDate: Date;
            category: string;
        }[];
        purchaseTotal: number;
        otherExpenseTotal: number;
        totalFeedExpenses: number;
    }>;
    static getFeedReport(userId: string, from: string, to: string): Promise<{
        from: string;
        to: string;
        totalPurchases: number;
        totalConsumptionEntries: number;
        totalPurchaseCost: number;
        totalOtherExpenses: number;
        totalFeedExpenses: number;
        consumptionByFeed: {
            feedName: string;
            unit: string;
            totalQuantity: number;
            feedItemId: string;
        }[];
        purchases: {
            quantity: number;
            unitPrice: number;
            totalCost: number;
            feedItem: {
                name: string;
                id: string;
                unit: string;
            };
            id: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            recordedById: string;
            purchaseDate: Date;
            feedItemId: string;
            supplier: string | null;
            invoiceNumber: string | null;
        }[];
    }>;
}
//# sourceMappingURL=feed.service.d.ts.map