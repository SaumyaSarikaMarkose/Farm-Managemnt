import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/app-error.js";
async function checkSuperAdmin(adminId) {
    const admin = await prisma.user.findUnique({
        where: { id: adminId },
        select: {
            id: true,
            isSuperAdmin: true,
            accountStatus: true,
        },
    });
    if (!admin ||
        !admin.isSuperAdmin ||
        admin.accountStatus !== "APPROVED") {
        throw new AppError(403, "Only an approved Super Admin can perform this action.");
    }
    return admin;
}
// Get all accounts waiting for approval
export async function getPendingAccounts(adminId) {
    await checkSuperAdmin(adminId);
    return prisma.user.findMany({
        where: {
            accountStatus: "PENDING",
            isSuperAdmin: false,
        },
        select: {
            id: true,
            name: true,
            email: true,
            accountStatus: true,
            createdAt: true,
        },
        orderBy: {
            createdAt: "asc",
        },
    });
}
// Approve a registered account
export async function approveAccount(adminId, userId, reviewNote) {
    await checkSuperAdmin(adminId);
    const targetUser = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            accountStatus: true,
            isSuperAdmin: true,
        },
    });
    if (!targetUser) {
        throw new AppError(404, "User account not found.");
    }
    if (targetUser.isSuperAdmin) {
        throw new AppError(400, "This account cannot be approved through this endpoint.");
    }
    if (targetUser.accountStatus !== "PENDING") {
        throw new AppError(400, "This account is not waiting for approval.");
    }
    // Update only if the account is still pending
    const result = await prisma.user.updateMany({
        where: {
            id: userId,
            accountStatus: "PENDING",
            isSuperAdmin: false,
        },
        data: {
            accountStatus: "APPROVED",
            accountReviewedById: adminId,
            accountReviewedAt: new Date(),
            accountReviewNote: reviewNote ?? null,
        },
    });
    if (result.count === 0) {
        throw new AppError(409, "The account status has changed. Please refresh and try again.");
    }
    return {
        message: "User account approved successfully.",
        user: await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                accountStatus: true,
                accountReviewedAt: true,
                accountReviewNote: true,
            },
        }),
    };
}
//# sourceMappingURL=admin.service.js.map