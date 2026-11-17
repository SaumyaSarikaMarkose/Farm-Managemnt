import { registerSchema, loginSchema, } from "./auth.validation.js";
import { registerUser, loginUser, getUserProfile, } from "./auth.service.js";
import { env } from "../../config/env.js";
export async function register(req, res, next) {
    try {
        const parsed = registerSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: parsed.error.issues,
            });
        }
        const data = await registerUser(parsed.data);
        return res.status(201).json({
            success: true,
            message: "Registration successful",
            data: {
                ...data,
                expiresIn: env.JWT_EXPIRES_IN,
            },
        });
    }
    catch (error) {
        next(error);
    }
}
export async function login(req, res, next) {
    try {
        const parsed = loginSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: parsed.error.issues,
            });
        }
        const data = await loginUser(parsed.data);
        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                ...data,
                expiresIn: env.JWT_EXPIRES_IN,
            },
        });
    }
    catch (error) {
        next(error);
    }
}
export async function me(req, res, next) {
    try {
        const user = await getUserProfile(req.userId);
        return res.status(200).json({
            success: true,
            data: { user },
        });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=auth.controller.js.map