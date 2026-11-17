import * as FinancialService from "../financial/financial.service.js";
function getString(value) {
    if (typeof value === "string")
        return value;
    if (Array.isArray(value) && typeof value[0] === "string") {
        return value[0];
    }
    return undefined;
}
function getUserId(req) {
    if (!req.userId) {
        throw new Error("Unauthorized.");
    }
    return req.userId;
}
function handleError(res, error) {
    const message = error instanceof Error ? error.message : "Something went wrong.";
    const status = message === "Unauthorized." ? 401 :
        message.includes("not approved") ? 403 :
            message.includes("not found") ? 404 :
                400;
    return res.status(status).json({
        success: false,
        message,
    });
}
// ==========================================
// CONTRIBUTIONS
// ==========================================
export async function createContribution(req, res) {
    try {
        const result = await FinancialService.createContribution(getUserId(req), req.body);
        return res.status(201).json({
            success: true,
            message: "Capital contribution created successfully.",
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function getContributions(req, res) {
    try {
        const result = await FinancialService.getContributions(getUserId(req), {
            ...(getString(req.query.partnerId)
                ? { partnerId: getString(req.query.partnerId) }
                : {}),
            ...(getString(req.query.status)
                ? { status: getString(req.query.status) }
                : {}),
            ...(getString(req.query.from)
                ? { from: getString(req.query.from) }
                : {}),
            ...(getString(req.query.to)
                ? { to: getString(req.query.to) }
                : {}),
        });
        return res.json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function reviewContribution(req, res) {
    try {
        const id = getString(req.params.id);
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Contribution ID is required.",
            });
        }
        const result = await FinancialService.reviewContribution(getUserId(req), id, req.body.status, req.body.description);
        return res.json({
            success: true,
            message: "Contribution reviewed successfully.",
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
// ==========================================
// EXPENSES
// ==========================================
export async function createExpense(req, res) {
    try {
        const result = await FinancialService.createExpense(getUserId(req), req.body);
        return res.status(201).json({
            success: true,
            message: "Expense created successfully.",
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function getExpenses(req, res) {
    try {
        const result = await FinancialService.getExpenses(getUserId(req), {
            ...(getString(req.query.category)
                ? { category: getString(req.query.category) }
                : {}),
            ...(getString(req.query.status)
                ? { status: getString(req.query.status) }
                : {}),
            ...(getString(req.query.from)
                ? { from: getString(req.query.from) }
                : {}),
            ...(getString(req.query.to)
                ? { to: getString(req.query.to) }
                : {}),
        });
        return res.json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function reviewExpense(req, res) {
    try {
        const id = getString(req.params.id);
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Expense ID is required.",
            });
        }
        const result = await FinancialService.reviewExpense(getUserId(req), id, req.body.status);
        return res.json({
            success: true,
            message: "Expense reviewed successfully.",
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
// ==========================================
// EXPENSE PAYMENTS
// ==========================================
export async function createExpensePayment(req, res) {
    try {
        const result = await FinancialService.createExpensePayment(getUserId(req), req.body);
        return res.status(201).json({
            success: true,
            message: "Expense payment recorded successfully.",
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function getExpensePayments(req, res) {
    try {
        const result = await FinancialService.getExpensePayments(getUserId(req), {
            ...(getString(req.query.expenseId)
                ? { expenseId: getString(req.query.expenseId) }
                : {}),
            ...(getString(req.query.partnerId)
                ? { partnerId: getString(req.query.partnerId) }
                : {}),
            ...(getString(req.query.from)
                ? { from: getString(req.query.from) }
                : {}),
            ...(getString(req.query.to)
                ? { to: getString(req.query.to) }
                : {}),
        });
        return res.json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
// ==========================================
// INCOME
// ==========================================
export async function createIncome(req, res) {
    try {
        const result = await FinancialService.createIncome(getUserId(req), req.body);
        return res.status(201).json({
            success: true,
            message: "Income created successfully.",
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function getIncome(req, res) {
    try {
        const result = await FinancialService.getIncome(getUserId(req), {
            ...(getString(req.query.status)
                ? { status: getString(req.query.status) }
                : {}),
            ...(getString(req.query.from)
                ? { from: getString(req.query.from) }
                : {}),
            ...(getString(req.query.to)
                ? { to: getString(req.query.to) }
                : {}),
        });
        return res.json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function reviewIncome(req, res) {
    try {
        const id = getString(req.params.id);
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Income ID is required.",
            });
        }
        const result = await FinancialService.reviewIncome(getUserId(req), id, req.body.status);
        return res.json({
            success: true,
            message: "Income reviewed successfully.",
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
// ==========================================
// REPORTS
// ==========================================
export async function getPartnerInvestmentReport(req, res) {
    try {
        const partnerId = getString(req.params.partnerId);
        if (!partnerId) {
            return res.status(400).json({
                success: false,
                message: "Partner ID is required.",
            });
        }
        const result = await FinancialService.getPartnerInvestmentReport(getUserId(req), partnerId, getString(req.query.from), getString(req.query.to));
        return res.json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function getProfitAndLossReport(req, res) {
    try {
        const result = await FinancialService.getProfitAndLossReport(getUserId(req), getString(req.query.from), getString(req.query.to));
        return res.json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
//# sourceMappingURL=Financial.controller.js.map