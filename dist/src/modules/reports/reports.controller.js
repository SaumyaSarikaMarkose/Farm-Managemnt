import * as ReportsService from "../reports/reports.service.js";
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
        throw new Error("Unauthorized");
    }
    return req.userId;
}
function getRange(req) {
    const from = getString(req.query.from);
    const to = getString(req.query.to);
    return {
        ...(from ? { from } : {}),
        ...(to ? { to } : {}),
    };
}
function handleError(res, error) {
    const message = error instanceof Error ? error.message : "Something went wrong.";
    const status = message === "Unauthorized"
        ? 401
        : message === "User not found."
            ? 404
            : message === "Your account is not approved."
                ? 403
                : 400;
    return res.status(status).json({
        success: false,
        message,
    });
}
export async function getDashboard(req, res) {
    try {
        const data = await ReportsService.getDashboardReport(getUserId(req), getRange(req));
        return res.status(200).json({
            success: true,
            message: "Dashboard report fetched successfully.",
            data,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function getMilkProduction(req, res) {
    try {
        const data = await ReportsService.getMilkProductionReport(getUserId(req), getRange(req));
        return res.status(200).json({
            success: true,
            message: "Milk production report fetched successfully.",
            data,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function getExpenses(req, res) {
    try {
        const data = await ReportsService.getExpenseReport(getUserId(req), getRange(req));
        return res.status(200).json({
            success: true,
            message: "Expense report fetched successfully.",
            data,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function getRevenue(req, res) {
    try {
        const data = await ReportsService.getRevenueReport(getUserId(req), getRange(req));
        return res.status(200).json({
            success: true,
            message: "Revenue report fetched successfully.",
            data,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
export async function getProfitAndLoss(req, res) {
    try {
        const data = await ReportsService.getProfitAndLossReport(getUserId(req), getRange(req));
        return res.status(200).json({
            success: true,
            message: "Profit and loss report fetched successfully.",
            data,
        });
    }
    catch (error) {
        return handleError(res, error);
    }
}
//# sourceMappingURL=reports.controller.js.map