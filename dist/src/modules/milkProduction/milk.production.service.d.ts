export declare class MilkProductionService {
    static createProduction(userId: string, data: {
        cowId: string;
        productionDate: string;
        morningYield?: number | string | null;
        eveningYield?: number | string | null;
        notes?: string;
    }): Promise<{
        cow: {
            name: string | null;
            id: string;
            tagNumber: string;
            breed: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cowId: string;
        productionDate: Date;
        morningYield: import("@prisma/client-runtime-utils").Decimal | null;
        eveningYield: import("@prisma/client-runtime-utils").Decimal | null;
        notes: string | null;
        recordedById: string;
    }>;
    static updateProduction(userId: string, productionId: string, data: {
        morningYield?: number | string | null;
        eveningYield?: number | string | null;
        notes?: string | null;
    }): Promise<{
        cow: {
            name: string | null;
            id: string;
            tagNumber: string;
            breed: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cowId: string;
        productionDate: Date;
        morningYield: import("@prisma/client-runtime-utils").Decimal | null;
        eveningYield: import("@prisma/client-runtime-utils").Decimal | null;
        notes: string | null;
        recordedById: string;
    }>;
    static getDailyProduction(userId: string, dateString: string): Promise<{
        date: string;
        totalCowsRecorded: number;
        totalMorning: number;
        totalEvening: number;
        totalProduction: number;
        records: {
            totalYield: number;
            cow: {
                name: string | null;
                id: string;
                tagNumber: string;
                breed: string | null;
            };
            id: string;
            createdAt: Date;
            updatedAt: Date;
            cowId: string;
            productionDate: Date;
            morningYield: import("@prisma/client-runtime-utils").Decimal | null;
            eveningYield: import("@prisma/client-runtime-utils").Decimal | null;
            notes: string | null;
            recordedById: string;
        }[];
    }>;
    static getCowProduction(userId: string, cowId: string, from?: string, to?: string): Promise<{
        cow: {
            name: string | null;
            id: string;
            tagNumber: string;
            breed: string | null;
        };
        totalDaysRecorded: number;
        totalMorning: number;
        totalEvening: number;
        totalProduction: number;
        averageDailyProduction: number;
        records: {
            totalYield: number;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            cowId: string;
            productionDate: Date;
            morningYield: import("@prisma/client-runtime-utils").Decimal | null;
            eveningYield: import("@prisma/client-runtime-utils").Decimal | null;
            notes: string | null;
            recordedById: string;
        }[];
    }>;
    static getMonthlyProduction(userId: string, year: number, month: number): Promise<{
        year: number;
        month: number;
        totalCowsRecorded: number;
        totalRecords: number;
        totalMorning: number;
        totalEvening: number;
        totalProduction: number;
        averagePerRecordedDay: number;
        dailyTotals: {
            date: string;
            morning: number;
            evening: number;
            total: number;
        }[];
        records: {
            totalYield: number;
            cow: {
                name: string | null;
                id: string;
                tagNumber: string;
            };
            id: string;
            createdAt: Date;
            updatedAt: Date;
            cowId: string;
            productionDate: Date;
            morningYield: import("@prisma/client-runtime-utils").Decimal | null;
            eveningYield: import("@prisma/client-runtime-utils").Decimal | null;
            notes: string | null;
            recordedById: string;
        }[];
    }>;
    static getProductionReport(userId: string, from: string, to: string): Promise<{
        from: string;
        to: string;
        totalRecords: number;
        totalCows: number;
        totalMorning: number;
        totalEvening: number;
        totalProduction: number;
        cowWiseReport: {
            morningYield: number;
            eveningYield: number;
            totalProduction: number;
            daysRecorded: number;
            averageDailyProduction: number;
            name: string | null;
            id: string;
            tagNumber: string;
            breed: string | null;
        }[];
    }>;
}
//# sourceMappingURL=milk.production.service.d.ts.map