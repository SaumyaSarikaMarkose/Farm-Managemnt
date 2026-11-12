/*
  Warnings:

  - You are about to drop the column `contributedAt` on the `CapitalContribution` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `CapitalContribution` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `CapitalContribution` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `CapitalContribution` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `CapitalContribution` table. The data in that column could be lost. The data in that column will be cast from `Decimal(14,2)` to `Decimal(12,2)`.
  - You are about to drop the column `notes` on the `Expense` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `Expense` table. The data in that column could be lost. The data in that column will be cast from `Decimal(14,2)` to `Decimal(12,2)`.
  - You are about to drop the column `farmId` on the `ExpensePayment` table. All the data in the column will be lost.
  - You are about to drop the column `membershipId` on the `ExpensePayment` table. All the data in the column will be lost.
  - You are about to drop the column `paidAt` on the `ExpensePayment` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `ExpensePayment` table. The data in that column could be lost. The data in that column will be cast from `Decimal(14,2)` to `Decimal(12,2)`.
  - You are about to drop the `ExpenseAllocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OwnershipPeriod` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `contributionType` to the `CapitalContribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CapitalContribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `FarmMembership` table without a default value. This is not possible if the table is not empty.
  - Made the column `joinedAt` on table `FarmMembership` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "CowGender" AS ENUM ('FEMALE', 'MALE');

-- CreateEnum
CREATE TYPE "CowStatus" AS ENUM ('ACTIVE', 'SOLD', 'DECEASED', 'TRANSFERRED');

-- CreateEnum
CREATE TYPE "CowStage" AS ENUM ('CALF', 'HEIFER', 'LACTATING', 'DRY', 'BREEDING');

-- DropForeignKey
ALTER TABLE "CapitalContribution" DROP CONSTRAINT "CapitalContribution_membershipId_farmId_fkey";

-- DropForeignKey
ALTER TABLE "ExpenseAllocation" DROP CONSTRAINT "ExpenseAllocation_expenseId_fkey";

-- DropForeignKey
ALTER TABLE "ExpenseAllocation" DROP CONSTRAINT "ExpenseAllocation_membershipId_farmId_fkey";

-- DropForeignKey
ALTER TABLE "ExpensePayment" DROP CONSTRAINT "ExpensePayment_membershipId_farmId_fkey";

-- DropForeignKey
ALTER TABLE "OwnershipPeriod" DROP CONSTRAINT "OwnershipPeriod_membershipId_fkey";

-- DropIndex
DROP INDEX "CapitalContribution_farmId_contributedAt_idx";

-- DropIndex
DROP INDEX "CapitalContribution_membershipId_contributedAt_idx";

-- DropIndex
DROP INDEX "Expense_farmId_category_status_idx";

-- DropIndex
DROP INDEX "ExpensePayment_expenseId_idx";

-- DropIndex
DROP INDEX "ExpensePayment_membershipId_paidAt_idx";

-- DropIndex
DROP INDEX "Farm_createdById_idx";

-- DropIndex
DROP INDEX "FarmMembership_id_farmId_key";

-- AlterTable
ALTER TABLE "CapitalContribution" DROP COLUMN "contributedAt",
DROP COLUMN "notes",
DROP COLUMN "reference",
DROP COLUMN "type",
ADD COLUMN     "contributionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "contributionType" "ContributionType" NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "status" "RecordStatus" NOT NULL DEFAULT 'APPROVED',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(12,2);

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "notes",
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "expenseDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "status" SET DEFAULT 'APPROVED';

-- AlterTable
ALTER TABLE "ExpensePayment" DROP COLUMN "farmId",
DROP COLUMN "membershipId",
DROP COLUMN "paidAt",
ADD COLUMN     "paymentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "paymentMethod" TEXT,
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(12,2);

-- AlterTable
ALTER TABLE "Farm" ALTER COLUMN "name" SET DEFAULT 'My Dairy Farm';

-- AlterTable
ALTER TABLE "FarmMembership" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'ACTIVE',
ALTER COLUMN "joinedAt" SET NOT NULL,
ALTER COLUMN "joinedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "ExpenseAllocation";

-- DropTable
DROP TABLE "OwnershipPeriod";

-- CreateTable
CREATE TABLE "Cow" (
    "id" TEXT NOT NULL,
    "tagNumber" TEXT NOT NULL,
    "name" TEXT,
    "breed" TEXT,
    "gender" "CowGender" NOT NULL DEFAULT 'FEMALE',
    "dateOfBirth" TIMESTAMP(3),
    "acquiredAt" TIMESTAMP(3),
    "purchasePrice" DECIMAL(12,2),
    "status" "CowStatus" NOT NULL DEFAULT 'ACTIVE',
    "stage" "CowStage" NOT NULL,
    "photoUrl" TEXT,
    "description" TEXT,
    "farmId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Cow_farmId_status_idx" ON "Cow"("farmId", "status");

-- CreateIndex
CREATE INDEX "Cow_farmId_stage_idx" ON "Cow"("farmId", "stage");

-- CreateIndex
CREATE UNIQUE INDEX "Cow_farmId_tagNumber_key" ON "Cow"("farmId", "tagNumber");

-- CreateIndex
CREATE INDEX "CapitalContribution_farmId_contributionDate_idx" ON "CapitalContribution"("farmId", "contributionDate");

-- CreateIndex
CREATE INDEX "CapitalContribution_membershipId_contributionDate_idx" ON "CapitalContribution"("membershipId", "contributionDate");

-- CreateIndex
CREATE INDEX "Expense_farmId_category_idx" ON "Expense"("farmId", "category");

-- CreateIndex
CREATE INDEX "Expense_farmId_status_idx" ON "Expense"("farmId", "status");

-- CreateIndex
CREATE INDEX "ExpensePayment_expenseId_paymentDate_idx" ON "ExpensePayment"("expenseId", "paymentDate");

-- AddForeignKey
ALTER TABLE "CapitalContribution" ADD CONSTRAINT "CapitalContribution_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "FarmMembership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cow" ADD CONSTRAINT "Cow_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
