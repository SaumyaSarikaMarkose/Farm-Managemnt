
import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js"
import * as FinancialController from "./Financial.controller.js";

const router = Router();

router.use(authenticate);

// Capital contributions
router.post("/contributions", FinancialController.createContribution);
router.get("/contributions", FinancialController.getContributions);
router.patch(
  "/contributions/:id/review",
  FinancialController.reviewContribution
);

// Expense management
router.post("/expenses", FinancialController.createExpense);
router.get("/expenses", FinancialController.getExpenses);
router.patch("/expenses/:id/review", FinancialController.reviewExpense);

// Expense payments
router.post("/expense-payments", FinancialController.createExpensePayment);
router.get("/expense-payments", FinancialController.getExpensePayments);

// Other income
router.post("/income", FinancialController.createIncome);
router.get("/income", FinancialController.getIncome);
router.patch("/income/:id/review", FinancialController.reviewIncome);

// Reports
router.get(
  "/reports/partner-investment/:partnerId",
  FinancialController.getPartnerInvestmentReport
);
router.get(
  "/reports/profit-and-loss",
  FinancialController.getProfitAndLossReport
);

export default router;
