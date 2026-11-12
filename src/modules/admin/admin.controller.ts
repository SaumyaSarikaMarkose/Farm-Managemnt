import type { Request, Response } from "express";
import { AppError } from "../../utils/app-error.js";

import {
  getPendingAccounts,
  approveAccount,
} from "./admin.service.js";

export async function pendingAccountsController(
  req: Request,
  res: Response
) {
  const adminId = req.userId;

  if (!adminId) {
    throw new AppError(401, "Authentication required.");
  }

  const accounts = await getPendingAccounts(adminId);

  return res.status(200).json({
    success: true,
    data: accounts,
  });
}

export async function approveAccountController(
  req: Request,
  res: Response
) {
  const adminId = req.userId;
  const userId = req.params.userId;

  if (!adminId) {
    throw new AppError(401, "Authentication required.");
  }

  if (typeof userId !== "string" || !userId.trim()) {
    throw new AppError(400, "Valid user ID is required.");
  }

  const { reviewNote } = req.body;

  if (
    reviewNote !== undefined &&
    typeof reviewNote !== "string"
  ) {
    throw new AppError(400, "Review note must be a string.");
  }

  const result = await approveAccount(
    adminId,
    userId,
    reviewNote
  );

  return res.status(200).json({
    success: true,
    ...result,
  });
}