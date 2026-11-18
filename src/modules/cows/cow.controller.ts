
import type { Request, Response, NextFunction } from "express";

import {
  CowStatus,
  CowStage,
  CowReproductiveStatus,
} from "../../generated/prisma/client.js";

import { cowService } from "./cow.service.js";

import {
  validateCowPayload,
  validateWeightPayload,
} from "./cow.validation.js";

// ---------------------------------------------
// Helper functions
// ---------------------------------------------

function createHttpError(
  message: string,
  statusCode: number,
): Error & { statusCode: number } {
  const error = new Error(message) as Error & {
    statusCode: number;
  };

  error.statusCode = statusCode;

  return error;
}

// Get authenticated user ID
function getUserId(req: Request): string {
  const userId = req.userId;

  if (typeof userId !== "string" || !userId.trim()) {
    throw createHttpError("Authentication required", 401);
  }

  return userId;
}

// Get cow ID safely (Express 5 compatible)
function getCowId(req: Request): string {
  const id = req.params.id;

  if (typeof id !== "string" || !id.trim()) {
    throw createHttpError("Cow ID is required", 400);
  }

  return id.trim();
}

// Validate query filters
function validateFilter<T extends string>(
  value: unknown,
  allowed: readonly T[],
  field: string,
): T | undefined {
  if (
    value === undefined ||
    value === "" ||
    value === "ALL"
  ) {
    return undefined;
  }

  if (
    typeof value !== "string" ||
    !allowed.includes(value as T)
  ) {
    throw createHttpError(`Invalid ${field}`, 400);
  }

  return value as T;
}

// Validate pagination numbers
function getPositiveInteger(
  value: unknown,
  defaultValue: number,
  field: string,
  max?: number,
): number {
  if (value === undefined) {
    return defaultValue;
  }

  if (
    typeof value !== "string" ||
    !/^\d+$/.test(value)
  ) {
    throw createHttpError(`Invalid ${field}`, 400);
  }

  const parsed = Number(value);

  if (
    !Number.isSafeInteger(parsed) ||
    parsed < 1 ||
    (max !== undefined && parsed > max)
  ) {
    throw createHttpError(`Invalid ${field}`, 400);
  }

  return parsed;
}

// ---------------------------------------------
// Cow Controller
// ---------------------------------------------

export const cowController = {

  /**
   * POST /cows
   * Create a new cow
   */
  createCow: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = getUserId(req);
      const payload = validateCowPayload(req.body);

      const cow = await cowService.createCow(
        userId,
        payload,
      );

      res.status(201).json({
        success: true,
        message: "Cow registered successfully",
        data: cow,
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * GET /cows
   * Get all cows with pagination and filters
   */
  getAllCows: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = getUserId(req);

      const page = getPositiveInteger(
        req.query.page,
        1,
        "page",
      );

      const limit = getPositiveInteger(
        req.query.limit,
        10,
        "limit",
        100,
      );

      const search =
        typeof req.query.search === "string"
          ? req.query.search.trim()
          : undefined;

      const status = validateFilter(
        req.query.status,
        Object.values(CowStatus),
        "status",
      );

      const stage = validateFilter(
        req.query.stage,
        Object.values(CowStage),
        "stage",
      );

      const reproductiveStatus = validateFilter(
        req.query.reproductiveStatus,
        Object.values(CowReproductiveStatus),
        "reproductive status",
      );

      // Build filters without explicitly assigning undefined.
      const filters = {
        page,
        limit,
        ...(search !== undefined && { search }),
        ...(status !== undefined && { status }),
        ...(stage !== undefined && { stage }),
        ...(reproductiveStatus !== undefined && {
          reproductiveStatus,
        }),
      };

      const result = await cowService.getAllCows(
        userId,
        filters,
      );

      res.status(200).json({
        success: true,
        message: "Cows retrieved successfully",
        ...result,
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * GET /cows/:id
   * Get a cow by ID
   */
  getCowById: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = getUserId(req);
      const cowId = getCowId(req);

      const cow = await cowService.getCowById(
        userId,
        cowId,
      );

      res.status(200).json({
        success: true,
        message: "Cow retrieved successfully",
        data: cow,
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * PATCH /cows/:id
   * Update cow details
   */
  updateCow: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = getUserId(req);
      const cowId = getCowId(req);

      const payload = validateCowPayload(
        req.body,
        true,
      );

      const cow = await cowService.updateCow(
        userId,
        cowId,
        payload,
      );

      res.status(200).json({
        success: true,
        message: "Cow updated successfully",
        data: cow,
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * DELETE /cows/:id
   * Deactivate a cow (soft delete)
   */
  deactivateCow: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = getUserId(req);
      const cowId = getCowId(req);

      const cow = await cowService.deactivateCow(
        userId,
        cowId,
      );

      res.status(200).json({
        success: true,
        message: "Cow deactivated successfully",
        data: cow,
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * PATCH /cows/:id/weight
   * Update cow's current weight
   */
  updateCowWeight: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = getUserId(req);
      const cowId = getCowId(req);

      const payload = validateWeightPayload(req.body);

      const cow = await cowService.updateCowWeight(
        userId,
        cowId,
        payload.currentWeightKg,
        payload.weightMeasuredAt,
      );

      res.status(200).json({
        success: true,
        message: "Cow weight updated successfully",
        data: cow,
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * GET /cows/:id/offspring
   * Get offspring of a cow
   */
  getOffspring: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = getUserId(req);
      const cowId = getCowId(req);

      const offspring = await cowService.getOffspring(
        userId,
        cowId,
      );

      res.status(200).json({
        success: true,
        message: "Offspring retrieved successfully",
        data: offspring,
      });
    } catch (error) {
      next(error);
    }
  },
};
