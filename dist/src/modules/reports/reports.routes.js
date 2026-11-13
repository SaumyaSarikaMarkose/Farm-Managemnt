import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import * as ReportsController from "./reports.controller.js";
const router = Router();
router.use(authenticate);
router.get("/dashboard", ReportsController.getDashboard);
router.get("/milk-production", ReportsController.getMilkProduction);
router.get("/expenses", ReportsController.getExpenses);
router.get("/revenue", ReportsController.getRevenue);
router.get("/profit-and-loss", ReportsController.getProfitAndLoss);
export default router;
//# sourceMappingURL=reports.routes.js.map