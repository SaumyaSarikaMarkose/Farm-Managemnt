/*
  Warnings:

  - You are about to drop the column `farmId` on the `Cow` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tagNumber]` on the table `Cow` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Cow" DROP CONSTRAINT "Cow_farmId_fkey";

-- DropIndex
DROP INDEX "Cow_farmId_stage_idx";

-- DropIndex
DROP INDEX "Cow_farmId_status_idx";

-- DropIndex
DROP INDEX "Cow_farmId_tagNumber_key";

-- AlterTable
ALTER TABLE "Cow" DROP COLUMN "farmId",
ALTER COLUMN "stage" SET DEFAULT 'HEIFER';

-- CreateIndex
CREATE INDEX "Cow_status_idx" ON "Cow"("status");

-- CreateIndex
CREATE INDEX "Cow_stage_idx" ON "Cow"("stage");

-- CreateIndex
CREATE UNIQUE INDEX "Cow_tagNumber_key" ON "Cow"("tagNumber");
