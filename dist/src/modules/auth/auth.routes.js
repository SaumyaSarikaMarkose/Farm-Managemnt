import { Router } from "express";
import rateLimit from "express-rate-limit";
import { register, login, me, } from "./auth.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";
const router = Router();
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many authentication attempts. Please try again later.",
    },
});
router.post("/register", authLimiter, register);
router.post("/login", authLimiter, login);
router.get("/me", authenticate, me);
export default router;
//# sourceMappingURL=auth.routes.js.map