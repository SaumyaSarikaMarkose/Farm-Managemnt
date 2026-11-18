
import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware.js";
import { cowController } from "./cow.controller.js";

const router = Router();

// All cow APIs require authentication.
router.use(authenticate);

router.post("/", cowController.createCow);

router.get("/", cowController.getAllCows);

router.get("/:id", cowController.getCowById);

router.patch("/:id", cowController.updateCow);

router.delete("/:id", cowController.deactivateCow);

router.patch("/:id/weight", cowController.updateCowWeight);

router.get("/:id/offspring", cowController.getOffspring);

export default router;
