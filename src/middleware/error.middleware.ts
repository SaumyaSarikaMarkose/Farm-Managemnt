import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app-error.js";

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  console.error("Unexpected API error:", error);

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}