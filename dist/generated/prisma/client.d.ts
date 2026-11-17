import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Farm
 *
 */
export type Farm = Prisma.FarmModel;
/**
 * Model FarmMembership
 *
 */
export type FarmMembership = Prisma.FarmMembershipModel;
/**
 * Model FarmJoinRequest
 *
 */
export type FarmJoinRequest = Prisma.FarmJoinRequestModel;
/**
 * Model CapitalContribution
 *
 */
export type CapitalContribution = Prisma.CapitalContributionModel;
/**
 * Model Expense
 *
 */
export type Expense = Prisma.ExpenseModel;
/**
 * Model ExpensePayment
 *
 */
export type ExpensePayment = Prisma.ExpensePaymentModel;
/**
 * Model FinancialIncome
 *
 */
export type FinancialIncome = Prisma.FinancialIncomeModel;
/**
 * Model Cow
 *
 */
export type Cow = Prisma.CowModel;
/**
 * Model MilkProduction
 *
 */
export type MilkProduction = Prisma.MilkProductionModel;
/**
 * Model FeedItem
 *
 */
export type FeedItem = Prisma.FeedItemModel;
/**
 * Model FeedPurchase
 *
 */
export type FeedPurchase = Prisma.FeedPurchaseModel;
/**
 * Model FeedConsumption
 *
 */
export type FeedConsumption = Prisma.FeedConsumptionModel;
/**
 * Model FeedExpense
 *
 */
export type FeedExpense = Prisma.FeedExpenseModel;
//# sourceMappingURL=client.d.ts.map