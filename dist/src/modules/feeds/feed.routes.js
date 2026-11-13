import { Router } from "express";
import { FeedController } from "./feed.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";
const router = Router();
// ==========================================
// FEED INVENTORY
// ==========================================
router.post("/items", authenticate, FeedController.createItem);
router.get("/inventory", authenticate, FeedController.inventory);
router.get("/items/:id", authenticate, FeedController.getItem);
router.put("/items/:id", authenticate, FeedController.updateItem);
// ==========================================
// FEED PURCHASES
// ==========================================
router.post("/purchases", authenticate, FeedController.createPurchase);
router.get("/purchases", authenticate, FeedController.purchases);
// ==========================================
// DAILY FEED CONSUMPTION
// ==========================================
router.post("/consumption", authenticate, FeedController.createConsumption);
router.get("/consumption/daily", authenticate, FeedController.dailyConsumption);
router.get("/consumption/cow/:cowId", authenticate, FeedController.cowConsumption);
// ==========================================
// FEED EXPENSES
// ==========================================
router.post("/expenses", authenticate, FeedController.createExpense);
router.get("/expenses", authenticate, FeedController.expenses);
// ==========================================
// FEED REPORT
// ==========================================
router.get("/reports", authenticate, FeedController.report);
export default router;
//# sourceMappingURL=feed.routes.js.map