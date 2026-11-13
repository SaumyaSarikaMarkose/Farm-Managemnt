import { prisma } from "../lib/prisma.js";
export async function requireSuperAdmin(req, res, next) {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Authentication required.",
            });
        }
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                isSuperAdmin: true,
                accountStatus: true,
            },
        });
        if (!user ||
            !user.isSuperAdmin ||
            user.accountStatus !== "APPROVED") {
            return res.status(403).json({
                success: false,
                message: "Super Admin access required.",
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to verify Super Admin permission.",
        });
    }
}
//# sourceMappingURL=require-super-admin.middleware.js.map