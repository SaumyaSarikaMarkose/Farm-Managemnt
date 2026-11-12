import { Router } from "express";
import { FarmMemberController } from "./farm-member.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { requireSuperAdmin } from "../../middleware/require-super-admin.middleware.js";

const router = Router();

router.use(authenticate);
router.use(requireSuperAdmin);

router.get("/eligible-users", FarmMemberController.getEligibleUsers);
router.post("/", FarmMemberController.addMember);
router.get("/", FarmMemberController.getMembers);

router.patch(
  "/:membershipId",
  FarmMemberController.updateRole
);

router.patch(
  "/:membershipId/status",
  FarmMemberController.updateStatus
);

router.delete(
  "/:membershipId",
  FarmMemberController.removeMember
);

export default router;