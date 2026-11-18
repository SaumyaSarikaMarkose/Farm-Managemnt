import {
  Prisma,
  CowGender,
  CowStatus,
  CowStage,
  CowReproductiveStatus,
} from "../../generated/prisma/client.js";

import { prisma } from "../../lib/prisma.js";
import type { CowPayload } from "./cow.validation.js";

function httpError(message: string, statusCode: number): never {
  const error = new Error(message) as Error & {
    statusCode: number;
  };

  error.statusCode = statusCode;
  throw error;
}

// ==========================================
// MEMBER ACCESS
// ==========================================

// ==========================================
// MEMBER ACCESS
// ==========================================

async function checkAccess(userId: string): Promise<void> {
  if (!userId) {
    httpError("Authentication required", 401);
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      accountStatus: true,
    },
  });

  if (!user) {
    httpError("User not found", 404);
  }

  if (user.accountStatus !== "APPROVED") {
    httpError("Your account is not approved", 403);
  }
}

// ==========================================
// AGE CALCULATION
// ==========================================

function calculateAge(dateOfBirth: Date | null) {
  if (!dateOfBirth) return null;

  const today = new Date();

  let years = today.getFullYear() - dateOfBirth.getFullYear();
  let months = today.getMonth() - dateOfBirth.getMonth();

  if (today.getDate() < dateOfBirth.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}

function formatCow<T extends { dateOfBirth: Date | null }>(cow: T) {
  return {
    ...cow,
    age: calculateAge(cow.dateOfBirth),
  };
}

// ==========================================
// VALIDATE PARENTS
// ==========================================

async function validateParents(
  damId?: string | null,
  sireId?: string | null,
  currentCowId?: string,
) {
  if (damId && sireId && damId === sireId) {
    httpError("Dam and Sire cannot be the same cow", 400);
  }

  const parentIds = [damId, sireId].filter(
    (id): id is string => Boolean(id),
  );

  if (currentCowId && parentIds.includes(currentCowId)) {
    httpError("A cow cannot be its own parent", 400);
  }

  if (!parentIds.length) return;

  const parents = await prisma.cow.findMany({
    where: {
      id: { in: parentIds },
    },
    select: {
      id: true,
      gender: true,
    },
  });

  if (parents.length !== parentIds.length) {
    httpError("One or more parent cows were not found", 404);
  }

  for (const parent of parents) {
    if (parent.id === damId && parent.gender !== CowGender.FEMALE) {
      httpError("Dam must be female", 400);
    }

    if (parent.id === sireId && parent.gender !== CowGender.MALE) {
      httpError("Sire must be male", 400);
    }
  }
}

// ==========================================
// CREATE COW
// ==========================================

async function createCow(userId: string, payload: CowPayload) {
  await checkAccess(userId);

  await validateParents(payload.damId, payload.sireId);

  const data: Prisma.CowUncheckedCreateInput = {
    tagNumber: payload.tagNumber!.trim(),
    name: payload.name ?? null,
    breed: payload.breed ?? null,
    gender: payload.gender ?? CowGender.FEMALE,

    dateOfBirth: payload.dateOfBirth
      ? new Date(payload.dateOfBirth)
      : null,

    currentWeightKg:
      payload.currentWeightKg == null
        ? null
        : new Prisma.Decimal(payload.currentWeightKg),

    weightMeasuredAt: payload.weightMeasuredAt
      ? new Date(payload.weightMeasuredAt)
      : null,

    acquiredAt: payload.acquiredAt
      ? new Date(payload.acquiredAt)
      : null,

    purchasePrice:
      payload.purchasePrice == null
        ? null
        : new Prisma.Decimal(payload.purchasePrice),

    damId: payload.damId ?? null,
    sireId: payload.sireId ?? null,

    reproductiveStatus: payload.reproductiveStatus ?? null,
    lactationNumber: payload.lactationNumber ?? 0,

    status: payload.status ?? CowStatus.ACTIVE,
    stage: payload.stage ?? CowStage.HEIFER,

    photoUrl: payload.photoUrl ?? null,
    description: payload.description ?? null,
  };

  const cow = await prisma.cow.create({
    data,
    include: {
      dam: {
        select: { id: true, tagNumber: true, name: true },
      },
      sire: {
        select: { id: true, tagNumber: true, name: true },
      },
    },
  });

  return formatCow(cow);
}

// ==========================================
// GET ALL COWS
// ==========================================

interface CowFilters {
  page?: number;
  limit?: number;
  search?: string;
  status?: CowStatus;
  stage?: CowStage;
  reproductiveStatus?: CowReproductiveStatus;
}

async function getAllCows(
  userId: string,
  filters: CowFilters,
) {
  await checkAccess(userId);

  const page = Math.max(1, filters.page ?? 1);
  const limit = Math.min(100, Math.max(1, filters.limit ?? 10));
  const skip = (page - 1) * limit;

  const where: Prisma.CowWhereInput = {};

  if (filters.status) where.status = filters.status;
  if (filters.stage) where.stage = filters.stage;

  if (filters.reproductiveStatus) {
    where.reproductiveStatus = filters.reproductiveStatus;
  }

  if (filters.search?.trim()) {
    const search = filters.search.trim();

    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { tagNumber: { contains: search, mode: "insensitive" } },
      { breed: { contains: search, mode: "insensitive" } },
    ];
  }

  const [cows, total] = await prisma.$transaction([
    prisma.cow.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        dam: {
          select: { id: true, tagNumber: true, name: true },
        },
        sire: {
          select: { id: true, tagNumber: true, name: true },
        },
      },
    }),
    prisma.cow.count({ where }),
  ]);

  return {
    data: cows.map(formatCow),
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      hasNextPage: page * limit < total,
      hasPreviousPage: page > 1,
    },
  };
}

// ==========================================
// GET COW BY ID
// ==========================================

async function getCowById(userId: string, cowId: string) {
  await checkAccess(userId);

  const cow = await prisma.cow.findUnique({
    where: { id: cowId },
    include: {
      dam: {
        select: {
          id: true,
          tagNumber: true,
          name: true,
          breed: true,
        },
      },
      sire: {
        select: {
          id: true,
          tagNumber: true,
          name: true,
          breed: true,
        },
      },
      offspringAsDam: {
        select: { id: true, tagNumber: true, name: true },
      },
      offspringAsSire: {
        select: { id: true, tagNumber: true, name: true },
      },
    },
  });

  if (!cow) httpError("Cow not found", 404);

  return formatCow(cow);
}

// ==========================================
// UPDATE COW
// ==========================================

async function updateCow(
  userId: string,
  cowId: string,
  payload: CowPayload,
) {
  await checkAccess(userId);

  const existing = await prisma.cow.findUnique({
    where: { id: cowId },
  });

  if (!existing) httpError("Cow not found", 404);

  if (existing.status === CowStatus.INACTIVE) {
    httpError("Inactive cow cannot be updated", 400);
  }

  await validateParents(
    payload.damId !== undefined ? payload.damId : existing.damId,
    payload.sireId !== undefined ? payload.sireId : existing.sireId,
    cowId,
  );

  const data: Prisma.CowUncheckedUpdateInput = {};

  if (payload.tagNumber !== undefined) data.tagNumber = payload.tagNumber.trim();
  if (payload.name !== undefined) data.name = payload.name;
  if (payload.breed !== undefined) data.breed = payload.breed;
  if (payload.gender !== undefined) data.gender = payload.gender;

  if (payload.dateOfBirth !== undefined) {
    data.dateOfBirth = payload.dateOfBirth
      ? new Date(payload.dateOfBirth)
      : null;
  }

  if (payload.currentWeightKg !== undefined) {
    data.currentWeightKg = payload.currentWeightKg === null
      ? null
      : new Prisma.Decimal(payload.currentWeightKg);
  }

  if (payload.weightMeasuredAt !== undefined) {
    data.weightMeasuredAt = payload.weightMeasuredAt
      ? new Date(payload.weightMeasuredAt)
      : null;
  }

  if (payload.acquiredAt !== undefined) {
    data.acquiredAt = payload.acquiredAt
      ? new Date(payload.acquiredAt)
      : null;
  }

  if (payload.purchasePrice !== undefined) {
    data.purchasePrice = payload.purchasePrice === null
      ? null
      : new Prisma.Decimal(payload.purchasePrice);
  }

  if (payload.damId !== undefined) data.damId = payload.damId;
  if (payload.sireId !== undefined) data.sireId = payload.sireId;

  if (payload.reproductiveStatus !== undefined) {
    data.reproductiveStatus = payload.reproductiveStatus;
  }

  if (payload.lactationNumber !== undefined) {
    data.lactationNumber = payload.lactationNumber;
  }

  if (payload.status !== undefined) data.status = payload.status;
  if (payload.stage !== undefined) data.stage = payload.stage;
  if (payload.photoUrl !== undefined) data.photoUrl = payload.photoUrl;
  if (payload.description !== undefined) {
    data.description = payload.description;
  }

  const cow = await prisma.cow.update({
    where: { id: cowId },
    data,
    include: {
      dam: {
        select: { id: true, tagNumber: true, name: true },
      },
      sire: {
        select: { id: true, tagNumber: true, name: true },
      },
    },
  });

  return formatCow(cow);
}

// ==========================================
// DEACTIVATE COW
// ==========================================

async function deactivateCow(userId: string, cowId: string) {
  await checkAccess(userId);

  const cow = await prisma.cow.findUnique({
    where: { id: cowId },
  });

  if (!cow) httpError("Cow not found", 404);

  if (cow.status === CowStatus.INACTIVE) {
    httpError("Cow is already inactive", 400);
  }

  return prisma.cow.update({
    where: { id: cowId },
    data: { status: CowStatus.INACTIVE },
  });
}

// ==========================================
// UPDATE WEIGHT
// ==========================================

async function updateCowWeight(
  userId: string,
  cowId: string,
  weight: number,
  measuredAt?: string,
) {
  await checkAccess(userId);

  const cow = await prisma.cow.findUnique({
    where: { id: cowId },
  });

  if (!cow) httpError("Cow not found", 404);

  if (cow.status !== CowStatus.ACTIVE) {
    httpError("Only active cows can have their weight updated", 400);
  }

  return prisma.cow.update({
    where: { id: cowId },
    data: {
      currentWeightKg: new Prisma.Decimal(weight),
      weightMeasuredAt: measuredAt
        ? new Date(measuredAt)
        : new Date(),
    },
  });
}

// ==========================================
// GET OFFSPRING
// ==========================================

async function getOffspring(userId: string, cowId: string) {
  await checkAccess(userId);

  const parent = await prisma.cow.findUnique({
    where: { id: cowId },
    select: { id: true },
  });

  if (!parent) httpError("Cow not found", 404);

  const offspring = await prisma.cow.findMany({
    where: {
      OR: [
        { damId: cowId },
        { sireId: cowId },
      ],
    },
    include: {
      dam: {
        select: { id: true, tagNumber: true, name: true },
      },
      sire: {
        select: { id: true, tagNumber: true, name: true },
      },
    },
    orderBy: { dateOfBirth: "desc" },
  });

  return offspring.map(formatCow);
}

export const cowService = {
  createCow,
  getAllCows,
  getCowById,
  updateCow,
  deactivateCow,
  updateCowWeight,
  getOffspring,
};
