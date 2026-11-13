import { AppError } from "../utils/app-error.js";
export function errorHandler(error, _req, res, _next) {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
    }
    console.error("Unexpected API error:", error);
    return res.status(500).json({
        success: false,
        message: "Internal server error",
    });
}
//# sourceMappingURL=error.middleware.js.map