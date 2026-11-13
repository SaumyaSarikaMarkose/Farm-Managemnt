import { prisma } from "../../lib/prisma.js";

interface CreateFarmInput {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  description?: string;
  currency?: string;
}

export class FarmService {
  
  static async createFarm(
    input: CreateFarmInput,
    superAdminId: string
  ) {
    // Verify Super Admin
    const admin = await prisma.user.findUnique({
      where: { id: superAdminId },
      select: {
        id: true,
        isSuperAdmin: true,
      },
    });

    if (!admin || !admin.isSuperAdmin) {
      throw new Error("Only Super Admin can create a farm.");
    }

    try {
      const farm = await prisma.farm.create({
        data: {
          name: input.name ?? "My Dairy Farm",
          currency: input.currency ?? "INR",

          ...(input.address !== undefined && {
            address: input.address,
          }),

          ...(input.phone !== undefined && {
            phone: input.phone,
          }),

          ...(input.email !== undefined && {
            email: input.email,
          }),

          ...(input.description !== undefined && {
            description: input.description,
          }),

          createdBy: {
            connect: { id: superAdminId }
          }
        },
      });

      return farm;

    } catch (error: any) {
      if (error.code === "P2002") {
        throw new Error(
          "Farm already exists or admin has already created a farm."
        );
      }

      throw error;
    }
  }

  static async getAllFarms() {
    return prisma.farm.findMany({
      include: {
        _count: {
          select: {
            memberships: true,
            cows: true,
          },
        },
      },
    });
  }

  static async getFarmById(farmId: string) {
    const farm = await prisma.farm.findUnique({
      where: {
        id: farmId,
      },
      include: {
        _count: {
          select: {
            memberships: true,
            cows: true,
          },
        },
      },
    });

    if (!farm) {
      throw new Error("Farm has not been initialized or found.");
    }

    return farm;
  }
}