import { CowService } from "./cow.service.js";
import { validateCreateCow, validateUpdateCow, validateCowStatus, } from "./cow.validation.js";
function getUserId(req) {
    if (!req.userId) {
        throw new Error("Authentication required.");
    }
    return req.userId;
}
function getCowId(req) {
    const cowId = req.params.cowId;
    if (typeof cowId !== "string" || !cowId.trim()) {
        throw new Error("Invalid cow ID.");
    }
    return cowId;
}
function sendError(res, error) {
    const message = error instanceof Error ? error.message : "Something went wrong.";
    const status = message === "Cow not found." ? 404 :
        message === "Authentication required." ? 401 :
            message.includes("permission") ||
                message.includes("approved") ||
                message.includes("active member") ? 403 :
                400;
    return res.status(status).json({
        success: false,
        message,
    });
}
export class CowController {
    static async createCow(req, res) {
        try {
            const authReq = req;
            const errors = validateCreateCow(req.body);
            if (errors.length) {
                return res.status(400).json({
                    success: false,
                    message: "Validation failed.",
                    errors,
                });
            }
            const cow = await CowService.createCow(getUserId(authReq), req.body);
            return res.status(201).json({
                success: true,
                message: "Cow created successfully.",
                data: cow,
            });
        }
        catch (error) {
            return sendError(res, error);
        }
    }
    static async getCows(req, res) {
        try {
            const authReq = req;
            const result = await CowService.getCows(getUserId(authReq), {
                search: req.query.search,
                status: req.query.status,
                stage: req.query.stage,
                gender: req.query.gender,
                page: Number(req.query.page) || 1,
                limit: Number(req.query.limit) || 20,
            });
            return res.status(200).json({
                success: true,
                data: result.cows,
                pagination: result.pagination,
            });
        }
        catch (error) {
            return sendError(res, error);
        }
    }
    static async getCowById(req, res) {
        try {
            const authReq = req;
            const cow = await CowService.getCowById(getUserId(authReq), getCowId(req));
            return res.status(200).json({
                success: true,
                data: cow,
            });
        }
        catch (error) {
            return sendError(res, error);
        }
    }
    static async updateCow(req, res) {
        try {
            const authReq = req;
            const errors = validateUpdateCow(req.body);
            if (errors.length) {
                return res.status(400).json({
                    success: false,
                    message: "Validation failed.",
                    errors,
                });
            }
            const cow = await CowService.updateCow(getUserId(authReq), getCowId(req), req.body);
            return res.status(200).json({
                success: true,
                message: "Cow updated successfully.",
                data: cow,
            });
        }
        catch (error) {
            return sendError(res, error);
        }
    }
    static async updateCowStatus(req, res) {
        try {
            const authReq = req;
            const { status } = req.body;
            if (!validateCowStatus(status)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid cow status.",
                });
            }
            const cow = await CowService.updateCowStatus(getUserId(authReq), getCowId(req), status);
            return res.status(200).json({
                success: true,
                message: "Cow status updated successfully.",
                data: cow,
            });
        }
        catch (error) {
            return sendError(res, error);
        }
    }
}
//# sourceMappingURL=cow.controller.js.map