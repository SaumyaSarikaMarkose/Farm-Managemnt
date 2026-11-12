
import { prisma } from "../../lib/prisma.js";
import { Prisma } from "../../generated/prisma/client.js";

// ==========================================
// CHECK APPROVED USER
// ==========================================

async function checkApprovedUser(userId: string) {
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

// ==========================================
// DATE VALIDATION
// ==========================================

function parseDate(value: string): Date {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error("Date must be in YYYY-MM-DD format.");
  }

  const date = new Date(`${value}T00:00:00.000Z`);

  if (
    Number.isNaN(date.getTime()) ||
    date.toISOString().slice(0, 10) !== value
  ) {
    throw new Error("Invalid production date.");
  }

  return date;
}

// ==========================================
// YIELD VALIDATION
// ==========================================

function parseYield(
  value: number | string | null | undefined
): Prisma.Decimal | null {
  if (value === null || value === undefined) {
    return null;
  }

  const amount = Number(value);

  if (!Number.isFinite(amount) || amount < 0) {
    throw new Error("Milk yield must be a valid non-negative number.");
  }

  return new Prisma.Decimal(amount.toFixed(2));
}

function toNumber(value: Prisma.Decimal | null): number {
  return value ? Number(value.toString()) : 0;
}

// ==========================================
// DATE RANGE VALIDATION
// ==========================================

function validateDateRange(from: string, to: string) {
  const fromDate = parseDate(from);
  const toDate = parseDate(to);

  if (fromDate > toDate) {
    throw new Error("From date cannot be after to date.");
  }

  return { fromDate, toDate };
}

// ==========================================
// MILK PRODUCTION SERVICE
// ==========================================

export class MilkProductionService {
  // ==========================================
  // CREATE DAILY PRODUCTION
  // ==========================================

  static async createProduction(
    
    userId: string,
    data: {
      cowId: string;
      productionDate: string;
      morningYield?: number | string | null;
      eveningYield?: number | string | null;
      notes?: string;
    }
  ) {
    console.log("mmmmmmmmmm",userId,data)
    await checkApprovedUser(userId);

    const cow = await prisma.cow.findUnique({
      where: {
        id: data.cowId,
      },
      select: {
        id: true,
        status: true,
      },
    });

    if (!cow || cow.status !== "ACTIVE") {
      throw new Error("Active cow not found.");
    }

    const productionDate = parseDate(data.productionDate);
    const morningYield = parseYield(data.morningYield);
    const eveningYield = parseYield(data.eveningYield);

    if (morningYield === null && eveningYield === null) {
      throw new Error("At least one milk yield is required.");
    }

    try {
      return await prisma.milkProduction.create({
        data: {
          cowId: cow.id,
          productionDate,
          morningYield,
          eveningYield,
          notes: data.notes?.trim() || null,
          recordedById: userId,
        },
        include: {
          cow: {
            select: {
              id: true,
              tagNumber: true,
              name: true,
              breed: true,
            },
          },
        },
      });
    } catch (error: unknown) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        throw new Error(
          "Milk production for this cow and date already exists. Please update the existing record."
        );
      }

      throw error;
    }
  }

  // ==========================================
  // UPDATE PRODUCTION
  // ==========================================

  static async updateProduction(
    userId: string,
    productionId: string,
    data: {
      morningYield?: number | string | null;
      eveningYield?: number | string | null;
      notes?: string | null;
    }
  ) {
    await checkApprovedUser(userId);

    const existing = await prisma.milkProduction.findUnique({
      where: {
        id: productionId,
      },
    });

    if (!existing) {
      throw new Error("Milk production record not found.");
    }

    const morningYield =
      data.morningYield !== undefined
        ? parseYield(data.morningYield)
        : existing.morningYield;

    const eveningYield =
      data.eveningYield !== undefined
        ? parseYield(data.eveningYield)
        : existing.eveningYield;

    if (morningYield === null && eveningYield === null) {
      throw new Error("At least one milk yield is required.");
    }

    const updateData: Prisma.MilkProductionUpdateInput = {};

    if (data.morningYield !== undefined) {
      updateData.morningYield = morningYield;
    }

    if (data.eveningYield !== undefined) {
      updateData.eveningYield = eveningYield;
    }

    if (data.notes !== undefined) {
      updateData.notes = data.notes?.trim() || null;
    }

    return prisma.milkProduction.update({
      where: {
        id: productionId,
      },
      data: updateData,
      include: {
        cow: {
          select: {
            id: true,
            tagNumber: true,
            name: true,
            breed: true,
          },
        },
      },
    });
  }

  // ==========================================
  // DAILY PRODUCTION
  // ==========================================

  static async getDailyProduction(
    userId: string,
    dateString: string
  ) {
    await checkApprovedUser(userId);

    const date = parseDate(dateString);

    const records = await prisma.milkProduction.findMany({
      where: {
        productionDate: date,
      },
      include: {
        cow: {
          select: {
            id: true,
            tagNumber: true,
            name: true,
            breed: true,
          },
        },
      },
      orderBy: {
        cow: {
          tagNumber: "asc",
        },
      },
    });

    const totalMorning = records.reduce(
      (sum, record) => sum + toNumber(record.morningYield),
      0
    );

    const totalEvening = records.reduce(
      (sum, record) => sum + toNumber(record.eveningYield),
      0
    );

    return {
      date: dateString,
      totalCowsRecorded: records.length,
      totalMorning,
      totalEvening,
      totalProduction: totalMorning + totalEvening,
      records: records.map((record) => ({
        ...record,
        totalYield:
          toNumber(record.morningYield) +
          toNumber(record.eveningYield),
      })),
    };
  }

  // ==========================================
  // INDIVIDUAL COW PRODUCTION HISTORY
  // ==========================================

  static async getCowProduction(
    userId: string,
    cowId: string,
    from?: string,
    to?: string
  ) {
    await checkApprovedUser(userId);

    const cow = await prisma.cow.findUnique({
      where: {
        id: cowId,
      },
      select: {
        id: true,
        tagNumber: true,
        name: true,
        breed: true,
      },
    });

    if (!cow) {
      throw new Error("Cow not found.");
    }

    if (from && to) {
      validateDateRange(from, to);
    }

    const productionDate: Prisma.DateTimeFilter = {};

    if (from) {
      productionDate.gte = parseDate(from);
    }

    if (to) {
      productionDate.lte = parseDate(to);
    }

    const where: Prisma.MilkProductionWhereInput = {
      cowId,
      ...(from || to ? { productionDate } : {}),
    };

    const records = await prisma.milkProduction.findMany({
      where,
      orderBy: {
        productionDate: "asc",
      },
    });

    const totalMorning = records.reduce(
      (sum, record) => sum + toNumber(record.morningYield),
      0
    );

    const totalEvening = records.reduce(
      (sum, record) => sum + toNumber(record.eveningYield),
      0
    );

    return {
      cow,
      totalDaysRecorded: records.length,
      totalMorning,
      totalEvening,
      totalProduction: totalMorning + totalEvening,
      averageDailyProduction:
        records.length > 0
          ? Number(
              (
                (totalMorning + totalEvening) /
                records.length
              ).toFixed(2)
            )
          : 0,
      records: records.map((record) => ({
        ...record,
        totalYield:
          toNumber(record.morningYield) +
          toNumber(record.eveningYield),
      })),
    };
  }

  // ==========================================
  // MONTHLY PRODUCTION
  // ==========================================

  static async getMonthlyProduction(
    userId: string,
    year: number,
    month: number
  ) {
    await checkApprovedUser(userId);

    if (
      !Number.isInteger(year) ||
      year < 2000 ||
      year > 9999 ||
      !Number.isInteger(month) ||
      month < 1 ||
      month > 12
    ) {
      throw new Error("Valid year and month are required.");
    }

    const startDate = new Date(Date.UTC(year, month - 1, 1));
    const endDate = new Date(Date.UTC(year, month, 1));

    const records = await prisma.milkProduction.findMany({
      where: {
        productionDate: {
          gte: startDate,
          lt: endDate,
        },
      },
      include: {
        cow: {
          select: {
            id: true,
            tagNumber: true,
            name: true,
          },
        },
      },
      orderBy: {
        productionDate: "asc",
      },
    });

    const dailyMap = new Map<
      string,
      { morning: number; evening: number }
    >();

    let totalMorning = 0;
    let totalEvening = 0;

    for (const record of records) {
      const date = record.productionDate.toISOString().slice(0, 10);

      const morning = toNumber(record.morningYield);
      const evening = toNumber(record.eveningYield);

      totalMorning += morning;
      totalEvening += evening;

      const current = dailyMap.get(date) || {
        morning: 0,
        evening: 0,
      };

      current.morning += morning;
      current.evening += evening;

      dailyMap.set(date, current);
    }

    const dailyTotals = Array.from(dailyMap.entries()).map(
      ([date, values]) => ({
        date,
        morning: values.morning,
        evening: values.evening,
        total: values.morning + values.evening,
      })
    );

    return {
      year,
      month,
      totalCowsRecorded: new Set(
        records.map((record) => record.cowId)
      ).size,
      totalRecords: records.length,
      totalMorning,
      totalEvening,
      totalProduction: totalMorning + totalEvening,
      averagePerRecordedDay:
        dailyTotals.length > 0
          ? Number(
              (
                (totalMorning + totalEvening) /
                dailyTotals.length
              ).toFixed(2)
            )
          : 0,
      dailyTotals,
      records: records.map((record) => ({
        ...record,
        totalYield:
          toNumber(record.morningYield) +
          toNumber(record.eveningYield),
      })),
    };
  }

  // ==========================================
  // PRODUCTION REPORT
  // ==========================================

  static async getProductionReport(
    userId: string,
    from: string,
    to: string
  ) {
    await checkApprovedUser(userId);

    const { fromDate, toDate } = validateDateRange(from, to);

    const records = await prisma.milkProduction.findMany({
      where: {
        productionDate: {
          gte: fromDate,
          lte: toDate,
        },
      },
      include: {
        cow: {
          select: {
            id: true,
            tagNumber: true,
            name: true,
            breed: true,
          },
        },
      },
      orderBy: {
        productionDate: "asc",
      },
    });

    const cowMap = new Map<
      string,
      {
        cow: (typeof records)[number]["cow"];
        morning: number;
        evening: number;
        daysRecorded: number;
      }
    >();

    let totalMorning = 0;
    let totalEvening = 0;

    for (const record of records) {
      const morning = toNumber(record.morningYield);
      const evening = toNumber(record.eveningYield);

      totalMorning += morning;
      totalEvening += evening;

      const current = cowMap.get(record.cowId) || {
        cow: record.cow,
        morning: 0,
        evening: 0,
        daysRecorded: 0,
      };

      current.morning += morning;
      current.evening += evening;
      current.daysRecorded += 1;

      cowMap.set(record.cowId, current);
    }

    const cowWiseReport = Array.from(cowMap.values()).map(
      (item) => ({
        ...item.cow,
        morningYield: item.morning,
        eveningYield: item.evening,
        totalProduction: item.morning + item.evening,
        daysRecorded: item.daysRecorded,
        averageDailyProduction: Number(
          (
            (item.morning + item.evening) /
            item.daysRecorded
          ).toFixed(2)
        ),
      })
    );

    return {
      from,
      to,
      totalRecords: records.length,
      totalCows: cowWiseReport.length,
      totalMorning,
      totalEvening,
      totalProduction: totalMorning + totalEvening,
      cowWiseReport,
    };
  }
}
