import { prisma } from "../../lib/prisma.js";

const FARM_CODE = "DAIRY_FARM";

const ALLOWED_ROLES = [
  "PARTNER",
  "ACCOUNTANT",
  "MANAGER",
  "WORKER",
  "AUDITOR",
] as const;

async function getFarm() {
  const farm = await prisma.farm.findUnique({
    where: { farmCode: FARM_CODE },
  });

  if (!farm) {
    throw new Error("Farm has not been initialized.");
  }

  return farm;
}

export class FarmMemberService {
  // List approved users who are not already active members
  static async getEligibleUsers() {
    console.log("llllllllllllllllllllllll")
    const farm = await getFarm();

    return prisma.user.findMany({
      where: {
        accountStatus: "APPROVED",
        memberships: {
          none: {
            farmId: farm.id,
            status: "ACTIVE",
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // Add an existing approved user to the farm
  static async addMember(userId: string, role: string) {
    if (!ALLOWED_ROLES.includes(role as any)) {
      throw new Error("Invalid farm member role.");
    }

    const farm = await getFarm();

    return prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          accountStatus: true,
        },
      });

      if (!user || user.accountStatus !== "APPROVED") {
        throw new Error("Only approved users can become farm members.");
      }

      const existing = await tx.farmMembership.findUnique({
        where: {
          farmId_userId: {
            farmId: farm.id,
            userId,
          },
        },
      });

      if (existing?.status === "ACTIVE") {
        throw new Error("This user is already an active farm member.");
      }

      if (existing) {
        return tx.farmMembership.update({
          where: { id: existing.id },
          data: {
            role: role as any,
            status: "ACTIVE",
            joinedAt: new Date(),
          },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        });
      }

      return tx.farmMembership.create({
        data: {
          farmId: farm.id,
          userId,
          role: role as any,
          status: "ACTIVE",
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });
    });
  }

  // List members
  static async getMembers() {
    const farm = await getFarm();

    return prisma.farmMembership.findMany({
      where: {
        farmId: farm.id,
        status: {
          in: ["ACTIVE", "SUSPENDED"],
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            accountStatus: true,
          },
        },
      },
      orderBy: { joinedAt: "asc" },
    });
  }

  // Change a member's role
  static async updateRole(membershipId: string, role: string) {
    if (!ALLOWED_ROLES.includes(role as any)) {
      throw new Error("Invalid farm member role.");
    }

    const farm = await getFarm();

    const membership = await prisma.farmMembership.findFirst({
      where: {
        id: membershipId,
        farmId: farm.id,
      },
    });

    if (!membership) {
      throw new Error("Farm membership not found.");
    }

    if (membership.role === "OWNER") {
      throw new Error("The farm OWNER role cannot be changed here.");
    }

    return prisma.farmMembership.update({
      where: { id: membershipId },
      data: { role: role as any },
    });
  }

  // Suspend or reactivate a member
  static async updateStatus(
    membershipId: string,
    status: "ACTIVE" | "SUSPENDED"
  ) {
    const farm = await getFarm();

    const membership = await prisma.farmMembership.findFirst({
      where: {
        id: membershipId,
        farmId: farm.id,
      },
    });

    if (!membership) {
      throw new Error("Farm membership not found.");
    }

    if (membership.role === "OWNER") {
      throw new Error("The farm OWNER membership cannot be suspended.");
    }

    return prisma.farmMembership.update({
      where: { id: membershipId },
      data: { status },
    });
  }

  // Remove a member without deleting their historical records
  static async removeMember(membershipId: string) {
    const farm = await getFarm();

    const membership = await prisma.farmMembership.findFirst({
      where: {
        id: membershipId,
        farmId: farm.id,
      },
    });

    if (!membership) {
      throw new Error("Farm membership not found.");
    }

    if (membership.role === "OWNER") {
      throw new Error("The farm OWNER cannot be removed.");
    }

    return prisma.farmMembership.update({
      where: { id: membershipId },
      data: { status: "LEFT" },
    });
  }
}