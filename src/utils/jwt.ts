import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../config/env.js";

export function generateAccessToken(userId: string): string {
  return jwt.sign(
    { sub: userId },
    env.JWT_SECRET,
    {
      expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
      issuer: "cow-farm-api",
      audience: "cow-farm-app",
    },
  );
}