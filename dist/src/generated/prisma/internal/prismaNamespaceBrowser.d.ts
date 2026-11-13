import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Farm: "Farm";
    readonly FarmMembership: "FarmMembership";
    readonly FarmJoinRequest: "FarmJoinRequest";
    readonly CapitalContribution: "CapitalContribution";
    readonly Expense: "Expense";
    readonly ExpensePayment: "ExpensePayment";
    readonly FinancialIncome: "FinancialIncome";
    readonly Cow: "Cow";
    readonly MilkProduction: "MilkProduction";
    readonly FeedItem: "FeedItem";
    readonly FeedPurchase: "FeedPurchase";
    readonly FeedConsumption: "FeedConsumption";
    readonly FeedExpense: "FeedExpense";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly isSuperAdmin: "isSuperAdmin";
    readonly accountStatus: "accountStatus";
    readonly accountReviewedById: "accountReviewedById";
    readonly accountReviewedAt: "accountReviewedAt";
    readonly accountReviewNote: "accountReviewNote";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const FarmScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly phone: "phone";
    readonly email: "email";
    readonly description: "description";
    readonly currency: "currency";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FarmScalarFieldEnum = (typeof FarmScalarFieldEnum)[keyof typeof FarmScalarFieldEnum];
export declare const FarmMembershipScalarFieldEnum: {
    readonly id: "id";
    readonly farmId: "farmId";
    readonly userId: "userId";
    readonly role: "role";
    readonly status: "status";
    readonly joinedAt: "joinedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FarmMembershipScalarFieldEnum = (typeof FarmMembershipScalarFieldEnum)[keyof typeof FarmMembershipScalarFieldEnum];
export declare const FarmJoinRequestScalarFieldEnum: {
    readonly id: "id";
    readonly farmId: "farmId";
    readonly userId: "userId";
    readonly message: "message";
    readonly status: "status";
    readonly reviewedById: "reviewedById";
    readonly reviewNote: "reviewNote";
    readonly requestedAt: "requestedAt";
    readonly reviewedAt: "reviewedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FarmJoinRequestScalarFieldEnum = (typeof FarmJoinRequestScalarFieldEnum)[keyof typeof FarmJoinRequestScalarFieldEnum];
export declare const CapitalContributionScalarFieldEnum: {
    readonly id: "id";
    readonly partnerId: "partnerId";
    readonly contributionType: "contributionType";
    readonly amount: "amount";
    readonly contributionDate: "contributionDate";
    readonly description: "description";
    readonly status: "status";
    readonly recordedById: "recordedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CapitalContributionScalarFieldEnum = (typeof CapitalContributionScalarFieldEnum)[keyof typeof CapitalContributionScalarFieldEnum];
export declare const ExpenseScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly category: "category";
    readonly amount: "amount";
    readonly expenseDate: "expenseDate";
    readonly status: "status";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum];
export declare const ExpensePaymentScalarFieldEnum: {
    readonly id: "id";
    readonly expenseId: "expenseId";
    readonly partnerId: "partnerId";
    readonly amount: "amount";
    readonly paymentDate: "paymentDate";
    readonly paymentMethod: "paymentMethod";
    readonly reference: "reference";
    readonly recordedById: "recordedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ExpensePaymentScalarFieldEnum = (typeof ExpensePaymentScalarFieldEnum)[keyof typeof ExpensePaymentScalarFieldEnum];
export declare const FinancialIncomeScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly category: "category";
    readonly amount: "amount";
    readonly incomeDate: "incomeDate";
    readonly status: "status";
    readonly recordedById: "recordedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FinancialIncomeScalarFieldEnum = (typeof FinancialIncomeScalarFieldEnum)[keyof typeof FinancialIncomeScalarFieldEnum];
export declare const CowScalarFieldEnum: {
    readonly id: "id";
    readonly tagNumber: "tagNumber";
    readonly name: "name";
    readonly breed: "breed";
    readonly gender: "gender";
    readonly dateOfBirth: "dateOfBirth";
    readonly acquiredAt: "acquiredAt";
    readonly purchasePrice: "purchasePrice";
    readonly status: "status";
    readonly stage: "stage";
    readonly photoUrl: "photoUrl";
    readonly description: "description";
    readonly farmId: "farmId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CowScalarFieldEnum = (typeof CowScalarFieldEnum)[keyof typeof CowScalarFieldEnum];
export declare const MilkProductionScalarFieldEnum: {
    readonly id: "id";
    readonly cowId: "cowId";
    readonly productionDate: "productionDate";
    readonly morningYield: "morningYield";
    readonly eveningYield: "eveningYield";
    readonly notes: "notes";
    readonly recordedById: "recordedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MilkProductionScalarFieldEnum = (typeof MilkProductionScalarFieldEnum)[keyof typeof MilkProductionScalarFieldEnum];
export declare const FeedItemScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly unit: "unit";
    readonly currentStock: "currentStock";
    readonly reorderLevel: "reorderLevel";
    readonly isActive: "isActive";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FeedItemScalarFieldEnum = (typeof FeedItemScalarFieldEnum)[keyof typeof FeedItemScalarFieldEnum];
export declare const FeedPurchaseScalarFieldEnum: {
    readonly id: "id";
    readonly feedItemId: "feedItemId";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly totalCost: "totalCost";
    readonly supplier: "supplier";
    readonly invoiceNumber: "invoiceNumber";
    readonly purchaseDate: "purchaseDate";
    readonly notes: "notes";
    readonly recordedById: "recordedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FeedPurchaseScalarFieldEnum = (typeof FeedPurchaseScalarFieldEnum)[keyof typeof FeedPurchaseScalarFieldEnum];
export declare const FeedConsumptionScalarFieldEnum: {
    readonly id: "id";
    readonly feedItemId: "feedItemId";
    readonly cowId: "cowId";
    readonly quantity: "quantity";
    readonly consumptionDate: "consumptionDate";
    readonly notes: "notes";
    readonly recordedById: "recordedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FeedConsumptionScalarFieldEnum = (typeof FeedConsumptionScalarFieldEnum)[keyof typeof FeedConsumptionScalarFieldEnum];
export declare const FeedExpenseScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly amount: "amount";
    readonly expenseDate: "expenseDate";
    readonly category: "category";
    readonly recordedById: "recordedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FeedExpenseScalarFieldEnum = (typeof FeedExpenseScalarFieldEnum)[keyof typeof FeedExpenseScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map