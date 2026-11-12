/*
  Warnings:

  - You are about to drop the column `farmId` on the `MilkProduction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MilkProduction" DROP CONSTRAINT "MilkProduction_farmId_fkey";

-- DropIndex
DROP INDEX "MilkProduction_cowId_productionDate_idx";

-- DropIndex
DROP INDEX "MilkProduction_farmId_productionDate_idx";

-- AlterTable
ALTER TABLE "MilkProduction" DROP COLUMN "farmId";

-- CreateIndex
CREATE INDEX "MilkProduction_productionDate_idx" ON "MilkProduction"("productionDate");
