import jwt, {} from "jsonwebtoken";
import { env } from "../config/env.js";
export function generateAccessToken(userId) {
    return jwt.sign({ sub: userId }, env.JWT_SECRET, {
        expiresIn: env.JWT_EXPIRES_IN,
        issuer: "cow-farm-api",
        audience: "cow-farm-app",
    });
}
//# sourceMappingURL=jwt.js.map