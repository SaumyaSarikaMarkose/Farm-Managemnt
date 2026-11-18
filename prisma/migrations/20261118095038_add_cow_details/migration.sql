-- CreateEnum
CREATE TYPE "CowReproductiveStatus" AS ENUM ('MILKING', 'PREGNANT', 'DRY');

-- AlterTable
ALTER TABLE "Cow" ADD COLUMN     "currentWeightKg" DECIMAL(8,2),
ADD COLUMN     "damId" TEXT,
ADD COLUMN     "lactationNumber" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "reproductiveStatus" "CowReproductiveStatus",
ADD COLUMN     "sireId" TEXT,
ADD COLUMN     "weightMeasuredAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "Cow_damId_idx" ON "Cow"("damId");

-- CreateIndex
CREATE INDEX "Cow_sireId_idx" ON "Cow"("sireId");

-- CreateIndex
CREATE INDEX "Cow_reproductiveStatus_idx" ON "Cow"("reproductiveStatus");

-- AddForeignKey
ALTER TABLE "Cow" ADD CONSTRAINT "Cow_damId_fkey" FOREIGN KEY ("damId") REFERENCES "Cow"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cow" ADD CONSTRAINT "Cow_sireId_fkey" FOREIGN KEY ("sireId") REFERENCES "Cow"("id") ON DELETE SET NULL ON UPDATE CASCADE;
