export const SINGLE_FARM_CODE = "DAIRY_FARM";
import { Router } from "express";
import { FarmController } from "./farm.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { requireSuperAdmin } from "../../middleware/require-super-admin.middleware.js";
const router = Router();
// Create farm - Super Admin only
router.post("/", authenticate, requireSuperAdmin, FarmController.createFarm);
// Get all farms - Super Admin only
router.get("/", authenticate, requireSuperAdmin, FarmController.getAllFarms);
// Get initialized farm - Authenticated users
// router.get(
//   "/current",
//   authenticate,
//   FarmController.getCurrentFarm
// );
export default router;
//# sourceMappingURL=farm.routes.js.map