type RecordStatus = "DRAFT" | "APPROVED" | "REJECTED" | "VOIDED";
type ContributionType = "INITIAL_CAPITAL" | "ADDITIONAL_CAPITAL";
export declare function createContribution(userId: string, data: {
    partnerId: string;
    contributionType: ContributionType;
    amount: unknown;
    contributionDate?: string;
    description?: string;
}): Promise<{
    recordedBy: {
        name: string;
        id: string;
    };
    partner: {
        name: string;
        email: string;
        id: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    status: import("../../generated/prisma/enums.js").RecordStatus;
    recordedById: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    contributionType: import("../../generated/prisma/enums.js").ContributionType;
    contributionDate: Date;
    partnerId: string;
}>;
export declare function getContributions(userId: string, filters: {
    partnerId?: string;
    status?: RecordStatus;
    from?: string;
    to?: string;
}): Promise<({
    recordedBy: {
        name: string;
        id: string;
    };
    partner: {
        name: string;
        email: string;
        id: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    status: import("../../generated/prisma/enums.js").RecordStatus;
    recordedById: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    contributionType: import("../../generated/prisma/enums.js").ContributionType;
    contributionDate: Date;
    partnerId: string;
})[]>;
export declare function reviewContribution(userId: string, id: string, status: "APPROVED" | "REJECTED", description?: string): Promise<{
    partner: {
        name: string;
        id: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    status: import("../../generated/prisma/enums.js").RecordStatus;
    recordedById: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    contributionType: import("../../generated/prisma/enums.js").ContributionType;
    contributionDate: Date;
    partnerId: string;
}>;
export declare function createExpense(userId: string, data: {
    title: string;
    description?: string;
    category: string;
    amount: unknown;
    expenseDate?: string;
}): Promise<{
    createdBy: {
        name: string;
        id: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    createdById: string;
    status: import("../../generated/prisma/enums.js").RecordStatus;
    title: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    expenseDate: Date;
    category: import("../../generated/prisma/enums.js").ExpenseCategory;
}>;
export declare function getExpenses(userId: string, filters: {
    category?: string;
    status?: RecordStatus;
    from?: string;
    to?: string;
}): Promise<({
    createdBy: {
        name: string;
        id: string;
    };
    payments: ({
        partner: {
            name: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        recordedById: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        partnerId: string;
        expenseId: string;
        paymentDate: Date;
        paymentMethod: string | null;
        reference: string | null;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    createdById: string;
    status: import("../../generated/prisma/enums.js").RecordStatus;
    title: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    expenseDate: Date;
    category: import("../../generated/prisma/enums.js").ExpenseCategory;
})[]>;
export declare function reviewExpense(userId: string, id: string, status: "APPROVED" | "REJECTED"): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    createdById: string;
    status: import("../../generated/prisma/enums.js").RecordStatus;
    title: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    expenseDate: Date;
    category: import("../../generated/prisma/enums.js").ExpenseCategory;
}>;
export declare function createExpensePayment(userId: string, data: {
    expenseId: string;
    partnerId: string;
    amount: unknown;
    paymentDate?: string;
    paymentMethod?: string;
    reference?: string;
}): Promise<{
    expense: {
        id: string;
        title: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
    };
    recordedBy: {
        name: string;
        id: string;
    };
    partner: {
        name: string;
        id: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    recordedById: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    partnerId: string;
    expenseId: string;
    paymentDate: Date;
    paymentMethod: string | null;
    reference: string | null;
}>;
export declare function getExpensePayments(userId: string, filters: {
    expenseId?: string;
    partnerId?: string;
    from?: string;
    to?: string;
}): Promise<({
    expense: {
        id: string;
        title: string;
        category: import("../../generated/prisma/enums.js").ExpenseCategory;
    };
    recordedBy: {
        name: string;
        id: string;
    };
    partner: {
        name: string;
        email: string;
        id: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    recordedById: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    partnerId: string;
    expenseId: string;
    paymentDate: Date;
    paymentMethod: string | null;
    reference: string | null;
})[]>;
export declare function createIncome(userId: string, data: {
    title: string;
    description?: string;
    category?: string;
    amount: unknown;
    incomeDate?: string;
}): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    status: import("../../generated/prisma/enums.js").RecordStatus;
    recordedById: string;
    title: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    category: string;
    incomeDate: Date;
}>;
export declare function getIncome(userId: string, filters: {
    status?: RecordStatus;
    from?: string;
    to?: string;
}): Promise<({
    recordedBy: {
        name: string;
        id: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    status: import("../../generated/prisma/enums.js").RecordStatus;
    recordedById: string;
    title: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    category: string;
    incomeDate: Date;
})[]>;
export declare function reviewIncome(userId: string, id: string, status: "APPROVED" | "REJECTED"): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    status: import("../../generated/prisma/enums.js").RecordStatus;
    recordedById: string;
    title: string;
    amount: import("@prisma/client-runtime-utils").Decimal;
    category: string;
    incomeDate: Date;
}>;
export declare function getPartnerInvestmentReport(userId: string, partnerId: string, from?: string, to?: string): Promise<{
    partner: {
        name: string;
        email: string;
        id: string;
        accountStatus: import("../../generated/prisma/enums.js").AccountStatus;
    };
    period: {
        from: string | null;
        to: string | null;
    };
    totalContributions: string;
    totalExpensePayments: string;
    netCashInvested: string;
    contributions: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        status: import("../../generated/prisma/enums.js").RecordStatus;
        recordedById: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        contributionType: import("../../generated/prisma/enums.js").ContributionType;
        contributionDate: Date;
        partnerId: string;
    }[];
    expensePayments: ({
        expense: {
            id: string;
            title: string;
            category: import("../../generated/prisma/enums.js").ExpenseCategory;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        recordedById: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
        partnerId: string;
        expenseId: string;
        paymentDate: Date;
        paymentMethod: string | null;
        reference: string | null;
    })[];
}>;
export declare function getProfitAndLossReport(userId: string, from?: string, to?: string): Promise<{
    period: {
        from: string | null;
        to: string | null;
    };
    totalIncome: string;
    generalExpenses: string;
    feedPurchaseExpenses: string;
    otherFeedExpenses: string;
    totalExpenses: string;
    netProfitOrLoss: string;
    result: string;
}>;
export {};
//# sourceMappingURL=financial.service.d.ts.map