import type { Request, Response } from "express";
import * as ReportsService from "../reports/reports.service.js";

function getString(value: unknown): string | undefined {
  if (typeof value === "string") return value;

  if (Array.isArray(value) && typeof value[0] === "string") {
    return value[0];
  }

  return undefined;
}

function getUserId(req: Request): string {
  if (!req.userId) {
    throw new Error("Unauthorized");
  }

  return req.userId;
}

function getRange(req: Request) {
  const from = getString(req.query.from);
  const to = getString(req.query.to);

  return {
    ...(from ? { from } : {}),
    ...(to ? { to } : {}),
  };
}

function handleError(res: Response, error: unknown) {
  const message =
    error instanceof Error ? error.message : "Something went wrong.";

  const status =
    message === "Unauthorized"
      ? 401
      : message === "User not found."
        ? 404
        : message === "Your account is not approved."
          ? 403
          : 400;

  return res.status(status).json({
    success: false,
    message,
  });
}

export async function getDashboard(req: Request, res: Response) {
  try {
    const data = await ReportsService.getDashboardReport(
      getUserId(req),
      getRange(req)
    );

    return res.status(200).json({
      success: true,
      message: "Dashboard report fetched successfully.",
      data,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

export async function getMilkProduction(req: Request, res: Response) {
  try {
    const data = await ReportsService.getMilkProductionReport(
      getUserId(req),
      getRange(req)
    );

    return res.status(200).json({
      success: true,
      message: "Milk production report fetched successfully.",
      data,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

export async function getExpenses(req: Request, res: Response) {
  try {
    const data = await ReportsService.getExpenseReport(
      getUserId(req),
      getRange(req)
    );

    return res.status(200).json({
      success: true,
      message: "Expense report fetched successfully.",
      data,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

export async function getRevenue(req: Request, res: Response) {
  try {
    const data = await ReportsService.getRevenueReport(
      getUserId(req),
      getRange(req)
    );

    return res.status(200).json({
      success: true,
      message: "Revenue report fetched successfully.",
      data,
    });
  } catch (error) {
    return handleError(res, error);
  }
}

export async function getProfitAndLoss(req: Request, res: Response) {
  try {
    const data = await ReportsService.getProfitAndLossReport(
      getUserId(req),
      getRange(req)
    );

    return res.status(200).json({
      success: true,
      message: "Profit and loss report fetched successfully.",
      data,
    });
  } catch (error) {
    return handleError(res, error);
  }
}
