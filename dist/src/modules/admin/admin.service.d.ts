export declare function getPendingAccounts(adminId: string): Promise<{
    name: string;
    email: string;
    id: string;
    accountStatus: import("../../generated/prisma/enums.js").AccountStatus;
    createdAt: Date;
}[]>;
export declare function approveAccount(adminId: string, userId: string, reviewNote?: string): Promise<{
    message: string;
    user: {
        name: string;
        email: string;
        id: string;
        accountStatus: import("../../generated/prisma/enums.js").AccountStatus;
        accountReviewedAt: Date | null;
        accountReviewNote: string | null;
    } | null;
}>;
//# sourceMappingURL=admin.service.d.ts.map