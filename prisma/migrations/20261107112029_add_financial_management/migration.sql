/*
  Warnings:

  - You are about to drop the column `farmId` on the `CapitalContribution` table. All the data in the column will be lost.
  - You are about to drop the column `membershipId` on the `CapitalContribution` table. All the data in the column will be lost.
  - You are about to drop the column `farmId` on the `Expense` table. All the data in the column will be lost.
  - Added the required column `partnerId` to the `CapitalContribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partnerId` to the `ExpensePayment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ExpensePayment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CapitalContribution" DROP CONSTRAINT "CapitalContribution_farmId_fkey";

-- DropForeignKey
ALTER TABLE "CapitalContribution" DROP CONSTRAINT "CapitalContribution_membershipId_fkey";

-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_farmId_fkey";

-- DropIndex
DROP INDEX "CapitalContribution_farmId_contributionDate_idx";

-- DropIndex
DROP INDEX "CapitalContribution_membershipId_contributionDate_idx";

-- DropIndex
DROP INDEX "Expense_farmId_category_idx";

-- DropIndex
DROP INDEX "Expense_farmId_expenseDate_idx";

-- DropIndex
DROP INDEX "Expense_farmId_status_idx";

-- AlterTable
ALTER TABLE "CapitalContribution" DROP COLUMN "farmId",
DROP COLUMN "membershipId",
ADD COLUMN     "partnerId" TEXT NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "farmId",
ALTER COLUMN "status" SET DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "ExpensePayment" ADD COLUMN     "partnerId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "FinancialIncome" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL DEFAULT 'OTHER',
    "amount" DECIMAL(12,2) NOT NULL,
    "incomeDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "RecordStatus" NOT NULL DEFAULT 'DRAFT',
    "recordedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinancialIncome_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FinancialIncome_incomeDate_idx" ON "FinancialIncome"("incomeDate");

-- CreateIndex
CREATE INDEX "FinancialIncome_status_idx" ON "FinancialIncome"("status");

-- CreateIndex
CREATE INDEX "CapitalContribution_partnerId_contributionDate_idx" ON "CapitalContribution"("partnerId", "contributionDate");

-- CreateIndex
CREATE INDEX "CapitalContribution_status_idx" ON "CapitalContribution"("status");

-- CreateIndex
CREATE INDEX "CapitalContribution_contributionDate_idx" ON "CapitalContribution"("contributionDate");

-- CreateIndex
CREATE INDEX "Expense_expenseDate_idx" ON "Expense"("expenseDate");

-- CreateIndex
CREATE INDEX "Expense_category_idx" ON "Expense"("category");

-- CreateIndex
CREATE INDEX "Expense_status_idx" ON "Expense"("status");

-- CreateIndex
CREATE INDEX "ExpensePayment_partnerId_paymentDate_idx" ON "ExpensePayment"("partnerId", "paymentDate");

-- AddForeignKey
ALTER TABLE "CapitalContribution" ADD CONSTRAINT "CapitalContribution_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpensePayment" ADD CONSTRAINT "ExpensePayment_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialIncome" ADD CONSTRAINT "FinancialIncome_recordedById_fkey" FOREIGN KEY ("recordedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
