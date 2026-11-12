import type  { Request, Response } from "express";
import { CowService } from "./cow.service.js";
import {
  validateCreateCow,
  validateUpdateCow,
  validateCowStatus,
} from "./cow.validation.js";

interface AuthRequest extends Request {
  userId?: string;
}

function getUserId(req: AuthRequest): string {
  if (!req.userId) {
    throw new Error("Authentication required.");
  }

  return req.userId;
}
function getCowId(req: Request): string {
  const cowId = req.params.cowId;

  if (typeof cowId !== "string" || !cowId.trim()) {
    throw new Error("Invalid cow ID.");
  }

  return cowId;
}

function sendError(res: Response, error: unknown) {
  const message =
    error instanceof Error ? error.message : "Something went wrong.";

  const status =
    message === "Cow not found." ? 404 :
    message === "Authentication required." ? 401 :
    message.includes("permission") ||
    message.includes("approved") ||
    message.includes("active member") ? 403 :
    400;

  return res.status(status).json({
    success: false,
    message,
  });
}

export class CowController {
  static async createCow(req: Request, res: Response) {
    try {
      const authReq = req as AuthRequest;
      const errors = validateCreateCow(req.body);

      if (errors.length) {
        return res.status(400).json({
          success: false,
          message: "Validation failed.",
          errors,
        });
      }

      const cow = await CowService.createCow(
        getUserId(authReq),
        req.body
      );

      return res.status(201).json({
        success: true,
        message: "Cow created successfully.",
        data: cow,
      });
    } catch (error) {
      return sendError(res, error);
    }
  }

  static async getCows(req: Request, res: Response) {
    try {
      const authReq = req as AuthRequest;

      const result = await CowService.getCows(
        getUserId(authReq),
        {
          search: req.query.search as string,
          status: req.query.status as string,
          stage: req.query.stage as string,
          gender: req.query.gender as string,
          page: Number(req.query.page) || 1,
          limit: Number(req.query.limit) || 20,
        }
      );

      return res.status(200).json({
        success: true,
        data: result.cows,
        pagination: result.pagination,
      });
    } catch (error) {
      return sendError(res, error);
    }
  }

  static async getCowById(req: Request, res: Response) {
    try {
      const authReq = req as AuthRequest;

      const cow = await CowService.getCowById(
        getUserId(authReq),
        getCowId(req)
      );

      return res.status(200).json({
        success: true,
        data: cow,
      });
    } catch (error) {
      return sendError(res, error);
    }
  }

  static async updateCow(req: Request, res: Response) {
    try {
      const authReq = req as AuthRequest;
      const errors = validateUpdateCow(req.body);

      if (errors.length) {
        return res.status(400).json({
          success: false,
          message: "Validation failed.",
          errors,
        });
      }

      const cow = await CowService.updateCow(
        getUserId(authReq),
        getCowId(req),
        req.body
      );

      return res.status(200).json({
        success: true,
        message: "Cow updated successfully.",
        data: cow,
      });
    } catch (error) {
      return sendError(res, error);
    }
  }

  static async updateCowStatus(req: Request, res: Response) {
    try {
      const authReq = req as AuthRequest;
      const { status } = req.body;

      if (!validateCowStatus(status)) {
        return res.status(400).json({
          success: false,
          message: "Invalid cow status.",
        });
      }

      const cow = await CowService.updateCowStatus(
        getUserId(authReq),
        getCowId(req),
        status
      );

      return res.status(200).json({
        success: true,
        message: "Cow status updated successfully.",
        data: cow,
      });
    } catch (error) {
      return sendError(res, error);
    }
  }
}