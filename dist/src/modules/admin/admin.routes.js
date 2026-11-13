import { Router } from "express";
import { pendingAccountsController, approveAccountController, } from "./admin.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";
const router = Router();
router.use(authenticate);
router.get("/accounts/pending", pendingAccountsController);
router.patch("/accounts/:userId/approve", approveAccountController);
export default router;
//# sourceMappingURL=admin.routes.js.map