type DateRange = {
    from?: string;
    to?: string;
};
export declare function getDashboardReport(userId: string, range: DateRange): Promise<{
    period: {
        from: string | null;
        to: string | null;
    };
    cows: {
        totalCows: number;
        activeCows: number;
        statusBreakdown: {
            status: import("../../generated/prisma/enums.js").CowStatus;
            count: number;
        }[];
        stageBreakdown: {
            stage: import("../../generated/prisma/enums.js").CowStage;
            count: number;
        }[];
    };
    milkProduction: {
        totalProduction: number;
        morningTotal: number;
        eveningTotal: number;
        averageMorningYield: number;
        averageEveningYield: number;
        productionRecords: number;
        cowsWithProduction: number;
        averageProductionPerRecord: number;
        dailyProduction: {
            date: string;
            morning: number;
            evening: number;
            total: number;
        }[];
    };
    expenses: {
        totalExpenses: number;
        generalExpenseTotal: number;
        feedExpenseTotal: number;
        feedPurchaseTotal: number;
        generalExpenseCount: number;
        feedExpenseCount: number;
        feedPurchaseCount: number;
        categoryBreakdown: {
            category: string;
            amount: number;
        }[];
    };
    revenue: {
        totalRevenue: number;
        incomeCount: number;
        categoryBreakdown: {
            category: string;
            amount: number;
        }[];
    };
    profitAndLoss: {
        totalRevenue: number;
        totalExpenses: number;
        netProfit: number;
        result: string;
    };
}>;
export declare function getMilkProductionReport(userId: string, range: DateRange): Promise<{
    totalProduction: number;
    morningTotal: number;
    eveningTotal: number;
    averageMorningYield: number;
    averageEveningYield: number;
    productionRecords: number;
    cowsWithProduction: number;
    averageProductionPerRecord: number;
    dailyProduction: {
        date: string;
        morning: number;
        evening: number;
        total: number;
    }[];
}>;
export declare function getExpenseReport(userId: string, range: DateRange): Promise<{
    totalExpenses: number;
    generalExpenseTotal: number;
    feedExpenseTotal: number;
    feedPurchaseTotal: number;
    generalExpenseCount: number;
    feedExpenseCount: number;
    feedPurchaseCount: number;
    categoryBreakdown: {
        category: string;
        amount: number;
    }[];
}>;
export declare function getRevenueReport(userId: string, range: DateRange): Promise<{
    totalRevenue: number;
    incomeCount: number;
    categoryBreakdown: {
        category: string;
        amount: number;
    }[];
    records: {
        amount: number;
        id: string;
        title: string;
        category: string;
        incomeDate: Date;
    }[];
}>;
export declare function getProfitAndLossReport(userId: string, range: DateRange): Promise<{
    totalRevenue: number;
    totalExpenses: number;
    netProfit: number;
    result: string;
}>;
export {};
//# sourceMappingURL=reports.service.d.ts.map