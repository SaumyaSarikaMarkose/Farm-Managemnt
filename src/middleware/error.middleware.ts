
import type {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";

import { Prisma } from "../generated/prisma/client.js";
import { AppError } from "../utils/app-error.js";

export const errorMiddleware: ErrorRequestHandler = (
  error: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error("API Error:", {
    method: req.method,
    path: req.originalUrl,
    error,
  });

  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      success: false,
      code: error.code,
      message: error.message,
      ...(error.errors && { errors: error.errors }),
    });
    return;
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002": {
        const target = error.meta?.target;
        const isCowTag =
          error.message.includes("Cow_tagNumber_key") ||
          (Array.isArray(target) && target.includes("tagNumber"));

        res.status(409).json({
          success: false,
          code: isCowTag
            ? "COW_TAG_ALREADY_EXISTS"
            : "DUPLICATE_RECORD",
          message: isCowTag
            ? "A cow with this tag number already exists"
            : "This record already exists",
          errors: isCowTag
            ? [
                {
                  field: "tagNumber",
                  message: "This tag number is already registered",
                },
              ]
            : [],
        });
        return;
      }

      case "P2025":
        res.status(404).json({
          success: false,
          code: "RECORD_NOT_FOUND",
          message: "The requested record was not found",
        });
        return;

      case "P2003":
        res.status(400).json({
          success: false,
          code: "INVALID_RELATION",
          message: "This operation references a record that does not exist",
        });
        return;

      case "P2011":
      case "P2012":
        res.status(400).json({
          success: false,
          code: "REQUIRED_FIELD_MISSING",
          message: "Some required information is missing",
        });
        return;

      default:
        break;
    }
  }

  const statusCode =
    typeof error === "object" &&
    error !== null &&
    "statusCode" in error &&
    typeof error.statusCode === "number"
      ? error.statusCode
      : 500;

  res.status(statusCode).json({
    success: false,
    code: "INTERNAL_SERVER_ERROR",
    message:
      statusCode >= 500
        ? "Something went wrong. Please try again later."
        : error instanceof Error
          ? error.message
          : "The request could not be completed",
  });
};
