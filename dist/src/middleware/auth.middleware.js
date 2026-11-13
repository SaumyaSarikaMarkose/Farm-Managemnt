import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
export function authenticate(req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization?.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Authentication token required",
        });
    }
    const token = authorization.slice(7).trim();
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Authentication token required",
        });
    }
    try {
        const payload = jwt.verify(token, env.JWT_SECRET, {
            issuer: "cow-farm-api",
            audience: "cow-farm-app",
        });
        if (typeof payload === "string" || typeof payload.sub !== "string") {
            return res.status(402).json({
                success: false,
                message: "Invalid authentication token",
            });
        }
        req.userId = payload.sub;
        next();
    }
    catch {
        return res.status(403).json({
            success: false,
            message: "Token is invalid or expired",
        });
    }
}
//# sourceMappingURL=auth.middleware.js.map