
import bcrypt from "bcryptjs";
import { Prisma } from "../../generated/prisma/client.js";

import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../utils/app-error.js";
import { generateAccessToken } from "../../utils/jwt.js";

import type {
  RegisterInput,
  LoginInput,
} from "./auth.validation.js";

// ==========================================
// REGISTER USER
// ==========================================

export async function registerUser(input: RegisterInput) {
  const email = input.email.toLowerCase();

  const existingUser = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (existingUser) {
    throw new AppError(409, "An account with this email already exists");
  }

  const passwordHash = await bcrypt.hash(input.password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        name: input.name,
        email,
        passwordHash,

        // New accounts require Super Admin approval
        accountStatus: "PENDING",

        // Never allow normal registration to create a Super Admin
        isSuperAdmin: false,
      },
      select: {
        id: true,
        name: true,
        email: true,
        accountStatus: true,
        createdAt: true,
      },
    });

    // Do not generate an access token before approval.
    return {
      message:
        "Registration successful. Your account is waiting for Super Admin approval.",
      user,
    };
  } catch (error) {
    // Protect against simultaneous registrations with the same email.
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new AppError(409, "An account with this email already exists");
    }

    throw error;
  }
}

// ==========================================
// LOGIN USER
// ==========================================

export async function loginUser(input: LoginInput) {
  const email = input.email.toLowerCase();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new AppError(401, "Invalid email or password");
  }

  const passwordMatches = await bcrypt.compare(
    input.password,
    user.passwordHash,
  );

  if (!passwordMatches) {
    throw new AppError(401, "Invalid email or password");
  }

  // Check account approval before generating JWT
  if (user.accountStatus === "PENDING") {
    throw new AppError(
      403,
      "Your account is awaiting Super Admin approval.",
    );
  }

  if (user.accountStatus === "REJECTED") {
    throw new AppError(
      403,
      "Your account registration has been rejected. Please contact the administrator.",
    );
  }

  // Only APPROVED users can reach this point.
  const accessToken = generateAccessToken(user.id);

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      isSuperAdmin: user.isSuperAdmin,
      accountStatus: user.accountStatus,
    },
    accessToken,
    tokenType: "Bearer",
    expiresIn: "15m",
  };
}

// ==========================================
// GET USER PROFILE
// ==========================================

export async function getUserProfile(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      isSuperAdmin: true,
      accountStatus: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new AppError(401, "User account not found");
  }

  return user;
}
