import { MilkProductionService } from "./milk.production.service.js";
// ==========================================
// STRING VALIDATION HELPER
// ==========================================
function getString(value) {
    return typeof value === "string" ? value : undefined;
}
// ==========================================
// MILK PRODUCTION CONTROLLER
// ==========================================
export class MilkProductionController {
    // ==========================================
    // CREATE PRODUCTION
    // POST /api/milk-production
    // ==========================================
    static async create(req, res, next) {
        try {
            const { cowId, productionDate, morningYield, eveningYield, notes, } = req.body;
            if (typeof cowId !== "string" ||
                typeof productionDate !== "string") {
                return res.status(400).json({
                    success: false,
                    message: "Valid cowId and productionDate are required.",
                });
            }
            const input = {
                cowId,
                productionDate,
                ...(morningYield !== undefined ? { morningYield } : {}),
                ...(eveningYield !== undefined ? { eveningYield } : {}),
                ...(notes !== undefined ? { notes } : {}),
            };
            const result = await MilkProductionService.createProduction(req.userId, input);
            return res.status(201).json({
                success: true,
                message: "Milk production recorded successfully.",
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
    // ==========================================
    // UPDATE PRODUCTION
    // PUT /api/milk-production/:id
    // ==========================================
    static async update(req, res, next) {
        try {
            const id = getString(req.params.id);
            if (!id) {
                return res.status(400).json({
                    success: false,
                    message: "Valid production ID is required.",
                });
            }
            const result = await MilkProductionService.updateProduction(req.userId, id, req.body);
            return res.status(200).json({
                success: true,
                message: "Milk production updated successfully.",
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
    // ==========================================
    // DAILY PRODUCTION
    // GET /api/milk-production/daily?date=
    // ==========================================
    static async daily(req, res, next) {
        try {
            const date = getString(req.query.date);
            if (!date) {
                return res.status(400).json({
                    success: false,
                    message: "Date is required in YYYY-MM-DD format.",
                });
            }
            const result = await MilkProductionService.getDailyProduction(req.userId, date);
            return res.status(200).json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
    // ==========================================
    // MONTHLY PRODUCTION
    // GET /api/milk-production/monthly?year=&month=
    // ==========================================
    static async monthly(req, res, next) {
        try {
            const yearString = getString(req.query.year);
            const monthString = getString(req.query.month);
            if (!yearString || !monthString) {
                return res.status(400).json({
                    success: false,
                    message: "Year and month are required.",
                });
            }
            const year = Number(yearString);
            const month = Number(monthString);
            const result = await MilkProductionService.getMonthlyProduction(req.userId, year, month);
            return res.status(200).json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
    // ==========================================
    // COW PRODUCTION HISTORY
    // GET /api/milk-production/cow/:cowId
    // ==========================================
    static async cowHistory(req, res, next) {
        try {
            const cowId = getString(req.params.cowId);
            if (!cowId) {
                return res.status(400).json({
                    success: false,
                    message: "Valid cow ID is required.",
                });
            }
            const from = getString(req.query.from);
            const to = getString(req.query.to);
            const result = await MilkProductionService.getCowProduction(req.userId, cowId, from, to);
            return res.status(200).json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
    // ==========================================
    // PRODUCTION REPORT
    // GET /api/milk-production/reports?from=&to=
    // ==========================================
    static async report(req, res, next) {
        try {
            const from = getString(req.query.from);
            const to = getString(req.query.to);
            if (!from || !to) {
                return res.status(400).json({
                    success: false,
                    message: "From and to dates are required.",
                });
            }
            const result = await MilkProductionService.getProductionReport(req.userId, from, to);
            return res.status(200).json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=milk.production.controller.js.map