/*
  Warnings:

  - You are about to drop the column `farmCode` on the `Farm` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Farm_farmCode_key";

-- AlterTable
ALTER TABLE "Farm" DROP COLUMN "farmCode";

-- CreateTable
CREATE TABLE "MilkProduction" (
    "id" TEXT NOT NULL,
    "farmId" TEXT NOT NULL,
    "cowId" TEXT NOT NULL,
    "productionDate" DATE NOT NULL,
    "morningYield" DECIMAL(10,2),
    "eveningYield" DECIMAL(10,2),
    "notes" TEXT,
    "recordedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MilkProduction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MilkProduction_farmId_productionDate_idx" ON "MilkProduction"("farmId", "productionDate");

-- CreateIndex
CREATE INDEX "MilkProduction_cowId_productionDate_idx" ON "MilkProduction"("cowId", "productionDate");

-- CreateIndex
CREATE INDEX "MilkProduction_recordedById_idx" ON "MilkProduction"("recordedById");

-- CreateIndex
CREATE UNIQUE INDEX "MilkProduction_cowId_productionDate_key" ON "MilkProduction"("cowId", "productionDate");

-- AddForeignKey
ALTER TABLE "MilkProduction" ADD CONSTRAINT "MilkProduction_recordedById_fkey" FOREIGN KEY ("recordedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MilkProduction" ADD CONSTRAINT "MilkProduction_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MilkProduction" ADD CONSTRAINT "MilkProduction_cowId_fkey" FOREIGN KEY ("cowId") REFERENCES "Cow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
