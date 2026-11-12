/*
  Warnings:

  - A unique constraint covering the columns `[farmCode]` on the table `Farm` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[createdById]` on the table `Farm` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Farm" ADD COLUMN     "address" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "farmCode" TEXT NOT NULL DEFAULT 'DAIRY_FARM',
ADD COLUMN     "phone" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Farm_farmCode_key" ON "Farm"("farmCode");

-- CreateIndex
CREATE UNIQUE INDEX "Farm_createdById_key" ON "Farm"("createdById");
