interface CreateFarmInput {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    description?: string;
    currency?: string;
}
export declare class FarmService {
    static createFarm(input: CreateFarmInput, superAdminId: string): Promise<{
        name: string;
        email: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        description: string | null;
        currency: string;
        createdById: string;
    }>;
    static getAllFarms(): Promise<({
        _count: {
            memberships: number;
            cows: number;
        };
    } & {
        name: string;
        email: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        description: string | null;
        currency: string;
        createdById: string;
    })[]>;
    static getFarmById(farmId: string): Promise<{
        _count: {
            memberships: number;
            cows: number;
        };
    } & {
        name: string;
        email: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        description: string | null;
        currency: string;
        createdById: string;
    }>;
}
export {};
//# sourceMappingURL=farm.service.d.ts.map