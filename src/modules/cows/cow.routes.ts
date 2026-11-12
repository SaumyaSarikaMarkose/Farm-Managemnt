import { Router } from "express";
import { CowController } from "./cow.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = Router();

// All cow routes require authentication
router.use(authenticate);

router.post("/", CowController.createCow);
router.get("/", CowController.getCows);
router.get("/:cowId", CowController.getCowById);
router.patch("/:cowId", CowController.updateCow);
router.patch("/:cowId/status", CowController.updateCowStatus);

export default router;