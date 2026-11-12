
import { Router } from "express";
import { MilkProductionController } from "../milkProduction/milk.production.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = Router();

// Record milk production
router.post(
  "/",
  authenticate,
  MilkProductionController.create
);

// Update milk production
router.put(
  "/:id",
  authenticate,
  MilkProductionController.update
);

// Daily production
router.get(
  "/daily",
  authenticate,
  MilkProductionController.daily
);

// Monthly production
router.get(
  "/monthly",
  authenticate,
  MilkProductionController.monthly
);

// Individual cow production history
router.get(
  "/cow/:cowId",
  authenticate,
  MilkProductionController.cowHistory
);

// Production reports
router.get(
  "/reports",
  authenticate,
  MilkProductionController.report
);

export default router;
