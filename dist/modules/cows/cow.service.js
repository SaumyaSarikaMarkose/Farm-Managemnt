import { prisma } from "../../lib/prisma.js";
import { Prisma } from "../../generated/prisma/client.js";
// Check whether the user account is approved.
async function checkApprovedUser(userId) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            accountStatus: true,
        },
    });
    if (!user || user.accountStatus !== "APPROVED") {
        throw new Error("Your account is not approved.");
    }
    return user;
}
// Get the single initialized farm without using farmCode.
async function getFarm() {
    const farm = await prisma.farm.findFirst({
        orderBy: {
            createdAt: "asc",
        },
        select: {
            id: true,
        },
    });
    if (!farm) {
        throw new Error("Farm has not been initialized.");
    }
    return farm;
}
function parseOptionalDate(value) {
    if (!value) {
        return null;
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        throw new Error("Invalid date provided.");
    }
    return date;
}
export class CowService {
    // ==========================================
    // CREATE COW
    // Any approved user can add a cow.
    // ==========================================
    static async createCow(userId, data) {
        await checkApprovedUser(userId);
        const farm = await getFarm();
        return prisma.cow.create({
            data: {
                farmId: farm.id,
                tagNumber: data.tagNumber.trim(),
                name: data.name?.trim() || null,
                breed: data.breed?.trim() || null,
                gender: data.gender || "FEMALE",
                dateOfBirth: parseOptionalDate(data.dateOfBirth),
                acquiredAt: parseOptionalDate(data.acquiredAt),
                purchasePrice: data.purchasePrice ?? null,
                stage: data.stage,
                photoUrl: data.photoUrl,
                description: data.description?.trim() || null,
            },
        });
    }
    // ==========================================
    // GET ALL COWS
    // ==========================================
    static async getCows(userId, filters) {
        await checkApprovedUser(userId);
        const farm = await getFarm();
        const page = Math.max(1, filters.page || 1);
        const limit = Math.min(100, Math.max(1, filters.limit || 20));
        const where = {
            farmId: farm.id,
        };
        if (filters.search) {
            where.OR = [
                {
                    tagNumber: {
                        contains: filters.search,
                        mode: "insensitive",
                    },
                },
                {
                    name: {
                        contains: filters.search,
                        mode: "insensitive",
                    },
                },
                {
                    breed: {
                        contains: filters.search,
                        mode: "insensitive",
                    },
                },
            ];
        }
        if (filters.status) {
            where.status = filters.status;
        }
        if (filters.stage) {
            where.stage = filters.stage;
        }
        if (filters.gender) {
            where.gender = filters.gender;
        }
        const [cows, total] = await prisma.$transaction([
            prisma.cow.findMany({
                where,
                orderBy: {
                    createdAt: "desc",
                },
                skip: (page - 1) * limit,
                take: limit,
            }),
            prisma.cow.count({ where }),
        ]);
        return {
            cows,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    // ==========================================
    // GET COW BY ID
    // ==========================================
    static async getCowById(userId, cowId) {
        await checkApprovedUser(userId);
        const farm = await getFarm();
        const cow = await prisma.cow.findFirst({
            where: {
                id: cowId,
                farmId: farm.id,
            },
        });
        if (!cow) {
            throw new Error("Cow not found.");
        }
        return cow;
    }
    // ==========================================
    // UPDATE COW
    // ==========================================
    static async updateCow(userId, cowId, data) {
        await checkApprovedUser(userId);
        const farm = await getFarm();
        const existingCow = await prisma.cow.findFirst({
            where: {
                id: cowId,
                farmId: farm.id,
            },
        });
        if (!existingCow) {
            throw new Error("Cow not found.");
        }
        const updateData = {};
        if (data.tagNumber !== undefined) {
            updateData.tagNumber = data.tagNumber.trim();
        }
        if (data.name !== undefined) {
            updateData.name = data.name?.trim() || null;
        }
        if (data.breed !== undefined) {
            updateData.breed = data.breed?.trim() || null;
        }
        if (data.gender !== undefined) {
            updateData.gender = data.gender;
        }
        if (data.dateOfBirth !== undefined) {
            updateData.dateOfBirth = parseOptionalDate(data.dateOfBirth);
        }
        if (data.acquiredAt !== undefined) {
            updateData.acquiredAt = parseOptionalDate(data.acquiredAt);
        }
        if (data.purchasePrice !== undefined) {
            updateData.purchasePrice = data.purchasePrice;
        }
        if (data.stage !== undefined) {
            updateData.stage = data.stage;
        }
        if (data.photoUrl !== undefined) {
            updateData.photoUrl = data.photoUrl || null;
        }
        if (data.description !== undefined) {
            updateData.description = data.description?.trim() || null;
        }
        return prisma.cow.update({
            where: {
                id: cowId,
            },
            data: updateData,
        });
    }
    // ==========================================
    // UPDATE COW STATUS
    // ==========================================
    static async updateCowStatus(userId, cowId, status) {
        await checkApprovedUser(userId);
        const farm = await getFarm();
        const existingCow = await prisma.cow.findFirst({
            where: {
                id: cowId,
                farmId: farm.id,
            },
        });
        if (!existingCow) {
            throw new Error("Cow not found.");
        }
        return prisma.cow.update({
            where: {
                id: cowId,
            },
            data: {
                status: status,
            },
        });
    }
}
//# sourceMappingURL=cow.service.js.map