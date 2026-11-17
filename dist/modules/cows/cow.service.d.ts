export declare class CowService {
    static createCow(userId: string, data: any): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        tagNumber: string;
        breed: string | null;
        gender: import("../../generated/prisma/enums.js").CowGender;
        dateOfBirth: Date | null;
        acquiredAt: Date | null;
        purchasePrice: import("@prisma/client-runtime-utils").Decimal | null;
        status: import("../../generated/prisma/enums.js").CowStatus;
        stage: import("../../generated/prisma/enums.js").CowStage;
        photoUrl: string | null;
        farmId: string;
    }>;
    static getCows(userId: string, filters: {
        search?: string;
        status?: string;
        stage?: string;
        gender?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        cows: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            tagNumber: string;
            breed: string | null;
            gender: import("../../generated/prisma/enums.js").CowGender;
            dateOfBirth: Date | null;
            acquiredAt: Date | null;
            purchasePrice: import("@prisma/client-runtime-utils").Decimal | null;
            status: import("../../generated/prisma/enums.js").CowStatus;
            stage: import("../../generated/prisma/enums.js").CowStage;
            photoUrl: string | null;
            farmId: string;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    static getCowById(userId: string, cowId: string): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        tagNumber: string;
        breed: string | null;
        gender: import("../../generated/prisma/enums.js").CowGender;
        dateOfBirth: Date | null;
        acquiredAt: Date | null;
        purchasePrice: import("@prisma/client-runtime-utils").Decimal | null;
        status: import("../../generated/prisma/enums.js").CowStatus;
        stage: import("../../generated/prisma/enums.js").CowStage;
        photoUrl: string | null;
        farmId: string;
    }>;
    static updateCow(userId: string, cowId: string, data: any): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        tagNumber: string;
        breed: string | null;
        gender: import("../../generated/prisma/enums.js").CowGender;
        dateOfBirth: Date | null;
        acquiredAt: Date | null;
        purchasePrice: import("@prisma/client-runtime-utils").Decimal | null;
        status: import("../../generated/prisma/enums.js").CowStatus;
        stage: import("../../generated/prisma/enums.js").CowStage;
        photoUrl: string | null;
        farmId: string;
    }>;
    static updateCowStatus(userId: string, cowId: string, status: string): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        tagNumber: string;
        breed: string | null;
        gender: import("../../generated/prisma/enums.js").CowGender;
        dateOfBirth: Date | null;
        acquiredAt: Date | null;
        purchasePrice: import("@prisma/client-runtime-utils").Decimal | null;
        status: import("../../generated/prisma/enums.js").CowStatus;
        stage: import("../../generated/prisma/enums.js").CowStage;
        photoUrl: string | null;
        farmId: string;
    }>;
}
//# sourceMappingURL=cow.service.d.ts.map