
import type { Request, Response, NextFunction } from "express";
import { FarmService } from "./farm.service.js";

export class FarmController {
  static async createFarm(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const {
        name,
        address,
        phone,
        email,
        description,
        currency,
      } = req.body;

      if (!name || typeof name !== "string" || !name.trim()) {
        return res.status(400).json({
          success: false,
          message: "Farm name is required.",
        });
      }

      const farm = await FarmService.createFarm(
        {
          name: name.trim(),
          address,
          phone,
          email,
          description,
          currency,
        },
        req.userId!
      );

      return res.status(201).json({
        success: true,
        message: "Farm created successfully.",
        data: farm,
      });
    } catch (error: any) {
      if (
        error.message === "Farm has already been initialized." ||
        error.message === "Farm already exists or admin has already created a farm."
      ) {
        return res.status(409).json({
          success: false,
          message: error.message,
        });
      }

      next(error);
    }
  }

  static async getAllFarms(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const farms = await FarmService.getAllFarms();

      return res.status(200).json({
        success: true,
        data: farms,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getCurrentFarm(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const farm = await FarmService.getCurrentFarm();

      return res.status(200).json({
        success: true,
        data: farm,
      });
    } catch (error: any) {
      if (error.message === "Farm has not been initialized.") {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }

      next(error);
    }
  }
}
