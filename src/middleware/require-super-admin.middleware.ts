import type { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma.js";

interface AuthRequest extends Request {
  userId?: string;
}

export async function requireSuperAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = (req as AuthRequest).userId;

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

    if (
      !user ||
      !user.isSuperAdmin ||
      user.accountStatus !== "APPROVED"
    ) {
      return res.status(403).json({
        success: false,
        message: "Super Admin access required.",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to verify Super Admin permission.",
    });
  }
}