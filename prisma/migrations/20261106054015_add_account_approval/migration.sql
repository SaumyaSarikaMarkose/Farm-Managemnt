-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accountReviewNote" TEXT,
ADD COLUMN     "accountReviewedAt" TIMESTAMP(3),
ADD COLUMN     "accountReviewedById" TEXT,
ADD COLUMN     "accountStatus" "AccountStatus" NOT NULL DEFAULT 'PENDING';

-- CreateIndex
CREATE INDEX "User_accountStatus_createdAt_idx" ON "User"("accountStatus", "createdAt");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_accountReviewedById_fkey" FOREIGN KEY ("accountReviewedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
