
import { prisma } from "../../lib/prisma.js";
import { Prisma } from "../../generated/prisma/client.js";

type RecordStatus = "DRAFT" | "APPROVED" | "REJECTED" | "VOIDED";

type ContributionType = "INITIAL_CAPITAL" | "ADDITIONAL_CAPITAL";

type ExpenseCategory =
  | "FEED"
  | "MEDICINE"
  | "VETERINARY"
  | "SALARY"
  | "ELECTRICITY"
  | "TRANSPORT"
  | "EQUIPMENT"
  | "MAINTENANCE"
  | "OTHER";

// ==========================================
// COMMON HELPERS
// ==========================================

function parseAmount(value: unknown): Prisma.Decimal {
  let amount: Prisma.Decimal;

  try {
    amount = new Prisma.Decimal(String(value));
  } catch {
    throw new Error("Invalid amount.");
  }

  if (!amount.isFinite() || amount.lte(0)) {
    throw new Error("Amount must be greater than zero.");
  }

  return amount;
}

function parseDate(value?: string): Date | undefined {
  if (!value) return undefined;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new Error("Invalid date.");
  }

  return date;
}

function getDateFilter(from?: string, to?: string) {
  const start = parseDate(from);
  const end = parseDate(to);

  if (start && end && start > end) {
    throw new Error("'from' date cannot be after 'to' date.");
  }

  return {
    ...(start ? { gte: start } : {}),
    ...(end ? { lte: end } : {}),
  };
}

async function checkApprovedUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      accountStatus: true,
      isSuperAdmin: true,
    },
  });

  if (!user || user.accountStatus !== "APPROVED") {
    throw new Error("Your account is not approved.");
  }

  return user;
}

async function checkPartner(partnerId: string) {
  const partner = await prisma.user.findUnique({
    where: { id: partnerId },
    select: {
      id: true,
      name: true,
      email: true,
      accountStatus: true,
    },
  });

  if (!partner || partner.accountStatus !== "APPROVED") {
    throw new Error("Partner does not exist or is not approved.");
  }

  return partner;
}

// ==========================================
// CAPITAL CONTRIBUTIONS
// ==========================================

export async function createContribution(
  userId: string,
  data: {
    partnerId: string;
    contributionType: ContributionType;
    amount: unknown;
    contributionDate?: string;
    description?: string;
  }
) {
  await checkApprovedUser(userId);

  if (!data.partnerId || !data.contributionType) {
    throw new Error("Partner and contribution type are required.");
  }

  if (
    data.contributionType !== "INITIAL_CAPITAL" &&
    data.contributionType !== "ADDITIONAL_CAPITAL"
  ) {
    throw new Error("Invalid contribution type.");
  }

  await checkPartner(data.partnerId);

  return prisma.capitalContribution.create({
    data: {
      partnerId: data.partnerId,
      contributionType: data.contributionType,
      amount: parseAmount(data.amount),
      contributionDate:
        parseDate(data.contributionDate) ?? new Date(),
      ...(data.description !== undefined
        ? { description: data.description }
        : {}),
      recordedById: userId,
      status: "DRAFT",
    },
    include: {
      partner: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      recordedBy: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

export async function getContributions(
  userId: string,
  filters: {
    partnerId?: string;
    status?: RecordStatus;
    from?: string;
    to?: string;
  }
) {
  await checkApprovedUser(userId);

  return prisma.capitalContribution.findMany({
    where: {
      ...(filters.partnerId
        ? { partnerId: filters.partnerId }
        : {}),
      ...(filters.status
        ? { status: filters.status }
        : {}),
      contributionDate: getDateFilter(
        filters.from,
        filters.to
      ),
    },
    include: {
      partner: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      recordedBy: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      contributionDate: "desc",
    },
  });
}

export async function reviewContribution(
  userId: string,
  id: string,
  status: "APPROVED" | "REJECTED",
  description?: string
) {
  await checkApprovedUser(userId);

  const contribution =
    await prisma.capitalContribution.findUnique({
      where: { id },
    });

  if (!contribution) {
    throw new Error("Contribution not found.");
  }

  if (contribution.status !== "DRAFT") {
    throw new Error("Only draft contributions can be reviewed.");
  }

  return prisma.capitalContribution.update({
    where: { id },
    data: {
      status,
      ...(description !== undefined
        ? { description }
        : {}),
    },
    include: {
      partner: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

// ==========================================
// EXPENSE MANAGEMENT
// ==========================================

export async function createExpense(
  userId: string,
  data: {
    title: string;
    description?: string;
    category: string;
    amount: unknown;
    expenseDate?: string;
  }
) {
  await checkApprovedUser(userId);

  const categories: ExpenseCategory[] = [
    "FEED",
    "MEDICINE",
    "VETERINARY",
    "SALARY",
    "ELECTRICITY",
    "TRANSPORT",
    "EQUIPMENT",
    "MAINTENANCE",
    "OTHER",
  ];

  if (!data.title?.trim()) {
    throw new Error("Expense title is required.");
  }

  if (!categories.includes(data.category as ExpenseCategory)) {
    throw new Error("Invalid expense category.");
  }

  return prisma.expense.create({
    data: {
      title: data.title.trim(),
      ...(data.description !== undefined
        ? { description: data.description }
        : {}),
      category: data.category as ExpenseCategory,
      amount: parseAmount(data.amount),
      expenseDate: parseDate(data.expenseDate) ?? new Date(),
      createdById: userId,
      status: "DRAFT",
    },
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

export async function getExpenses(
  userId: string,
  filters: {
    category?: string;
    status?: RecordStatus;
    from?: string;
    to?: string;
  }
) {
  await checkApprovedUser(userId);

  return prisma.expense.findMany({
    where: {
      ...(filters.category
        ? { category: filters.category as ExpenseCategory }
        : {}),
      ...(filters.status
        ? { status: filters.status }
        : {}),
      expenseDate: getDateFilter(
        filters.from,
        filters.to
      ),
    },
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
        },
      },
      payments: {
        include: {
          partner: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      expenseDate: "desc",
    },
  });
}

export async function reviewExpense(
  userId: string,
  id: string,
  status: "APPROVED" | "REJECTED"
) {
  await checkApprovedUser(userId);

  const expense = await prisma.expense.findUnique({
    where: { id },
  });

  if (!expense) {
    throw new Error("Expense not found.");
  }

  if (expense.status !== "DRAFT") {
    throw new Error("Only draft expenses can be reviewed.");
  }

  return prisma.expense.update({
    where: { id },
    data: { status },
  });
}

// ==========================================
// EXPENSE PAYMENTS
// ==========================================

export async function createExpensePayment(
  userId: string,
  data: {
    expenseId: string;
    partnerId: string;
    amount: unknown;
    paymentDate?: string;
    paymentMethod?: string;
    reference?: string;
  }
) {
  await checkApprovedUser(userId);

  if (!data.expenseId || !data.partnerId) {
    throw new Error("Expense and partner are required.");
  }

  await checkPartner(data.partnerId);

  const amount = parseAmount(data.amount);

  return prisma.$transaction(
    async (tx) => {
      const expense = await tx.expense.findUnique({
        where: { id: data.expenseId },
      });

      if (!expense) {
        throw new Error("Expense not found.");
      }

      if (expense.status !== "APPROVED") {
        throw new Error(
          "Payments can only be recorded for approved expenses."
        );
      }

      const existingPayments =
        await tx.expensePayment.aggregate({
          where: {
            expenseId: data.expenseId,
          },
          _sum: {
            amount: true,
          },
        });

      const paidAmount =
        existingPayments._sum.amount ??
        new Prisma.Decimal(0);

      const outstanding = expense.amount.minus(paidAmount);

      if (amount.gt(outstanding)) {
        throw new Error(
          `Payment exceeds outstanding balance. Outstanding: ${outstanding.toString()}`
        );
      }

      return tx.expensePayment.create({
        data: {
          expenseId: data.expenseId,
          partnerId: data.partnerId,
          amount,
          paymentDate:
            parseDate(data.paymentDate) ?? new Date(),
          ...(data.paymentMethod !== undefined
            ? { paymentMethod: data.paymentMethod }
            : {}),
          ...(data.reference !== undefined
            ? { reference: data.reference }
            : {}),
          recordedById: userId,
        },
        include: {
          expense: {
            select: {
              id: true,
              title: true,
              amount: true,
            },
          },
          partner: {
            select: {
              id: true,
              name: true,
            },
          },
          recordedBy: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    },
    {
      isolationLevel:
        Prisma.TransactionIsolationLevel.Serializable,
    }
  );
}

export async function getExpensePayments(
  userId: string,
  filters: {
    expenseId?: string;
    partnerId?: string;
    from?: string;
    to?: string;
  }
) {
  await checkApprovedUser(userId);

  return prisma.expensePayment.findMany({
    where: {
      ...(filters.expenseId
        ? { expenseId: filters.expenseId }
        : {}),
      ...(filters.partnerId
        ? { partnerId: filters.partnerId }
        : {}),
      paymentDate: getDateFilter(
        filters.from,
        filters.to
      ),
    },
    include: {
      expense: {
        select: {
          id: true,
          title: true,
          category: true,
        },
      },
      partner: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      recordedBy: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      paymentDate: "desc",
    },
  });
}

// ==========================================
// FINANCIAL INCOME
// ==========================================

export async function createIncome(
  userId: string,
  data: {
    title: string;
    description?: string;
    category?: string;
    amount: unknown;
    incomeDate?: string;
  }
) {
  await checkApprovedUser(userId);

  if (!data.title?.trim()) {
    throw new Error("Income title is required.");
  }

  return prisma.financialIncome.create({
    data: {
      title: data.title.trim(),
      ...(data.description !== undefined
        ? { description: data.description }
        : {}),
      category: data.category ?? "OTHER",
      amount: parseAmount(data.amount),
      incomeDate: parseDate(data.incomeDate) ?? new Date(),
      recordedById: userId,
      status: "DRAFT",
    },
  });
}

export async function getIncome(
  userId: string,
  filters: {
    status?: RecordStatus;
    from?: string;
    to?: string;
  }
) {
  await checkApprovedUser(userId);

  return prisma.financialIncome.findMany({
    where: {
      ...(filters.status
        ? { status: filters.status }
        : {}),
      incomeDate: getDateFilter(
        filters.from,
        filters.to
      ),
    },
    include: {
      recordedBy: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      incomeDate: "desc",
    },
  });
}

export async function reviewIncome(
  userId: string,
  id: string,
  status: "APPROVED" | "REJECTED"
) {
  await checkApprovedUser(userId);

  const income = await prisma.financialIncome.findUnique({
    where: { id },
  });

  if (!income) {
    throw new Error("Income record not found.");
  }

  if (income.status !== "DRAFT") {
    throw new Error("Only draft income records can be reviewed.");
  }

  return prisma.financialIncome.update({
    where: { id },
    data: { status },
  });
}

// ==========================================
// PARTNER INVESTMENT REPORT
// ==========================================

export async function getPartnerInvestmentReport(
  userId: string,
  partnerId: string,
  from?: string,
  to?: string
) {
  await checkApprovedUser(userId);

  const partner = await checkPartner(partnerId);

  const dateFilter = getDateFilter(from, to);

  const [contributions, payments] = await Promise.all([
    prisma.capitalContribution.findMany({
      where: {
        partnerId,
        status: "APPROVED",
        contributionDate: dateFilter,
      },
      orderBy: {
        contributionDate: "asc",
      },
    }),

    prisma.expensePayment.findMany({
      where: {
        partnerId,
        paymentDate: dateFilter,
        expense: {
          status: "APPROVED",
        },
      },
      include: {
        expense: {
          select: {
            id: true,
            title: true,
            category: true,
          },
        },
      },
      orderBy: {
        paymentDate: "asc",
      },
    }),
  ]);

  const totalContributions = contributions.reduce(
    (sum, item) => sum.plus(item.amount),
    new Prisma.Decimal(0)
  );

  const totalExpensePayments = payments.reduce(
    (sum, item) => sum.plus(item.amount),
    new Prisma.Decimal(0)
  );

  return {
    partner,
    period: {
      from: from ?? null,
      to: to ?? null,
    },
    totalContributions: totalContributions.toString(),
    totalExpensePayments: totalExpensePayments.toString(),
    netCashInvested: totalContributions
      .plus(totalExpensePayments)
      .toString(),
    contributions,
    expensePayments: payments,
  };
}

// ==========================================
// PROFIT AND LOSS REPORT
// ==========================================

export async function getProfitAndLossReport(
  userId: string,
  from?: string,
  to?: string
) {
  await checkApprovedUser(userId);

  const dateFilter = getDateFilter(from, to);

  const [
    incomes,
    expenses,
    feedPurchases,
    feedExpenses,
  ] = await Promise.all([
    prisma.financialIncome.aggregate({
      where: {
        status: "APPROVED",
        incomeDate: dateFilter,
      },
      _sum: {
        amount: true,
      },
    }),

    prisma.expense.aggregate({
      where: {
        status: "APPROVED",
        expenseDate: dateFilter,
      },
      _sum: {
        amount: true,
      },
    }),

    prisma.feedPurchase.aggregate({
      where: {
        purchaseDate: dateFilter,
      },
      _sum: {
        totalCost: true,
      },
    }),

    prisma.feedExpense.aggregate({
      where: {
        expenseDate: dateFilter,
      },
      _sum: {
        amount: true,
      },
    }),
  ]);

  const totalIncome =
    incomes._sum.amount ?? new Prisma.Decimal(0);

  const generalExpenses =
    expenses._sum.amount ?? new Prisma.Decimal(0);

  const feedPurchaseExpenses =
    feedPurchases._sum.totalCost ?? new Prisma.Decimal(0);

  const otherFeedExpenses =
    feedExpenses._sum.amount ?? new Prisma.Decimal(0);

  const totalExpenses = generalExpenses
    .plus(feedPurchaseExpenses)
    .plus(otherFeedExpenses);

  const netProfitOrLoss = totalIncome.minus(totalExpenses);

  return {
    period: {
      from: from ?? null,
      to: to ?? null,
    },
    totalIncome: totalIncome.toString(),
    generalExpenses: generalExpenses.toString(),
    feedPurchaseExpenses: feedPurchaseExpenses.toString(),
    otherFeedExpenses: otherFeedExpenses.toString(),
    totalExpenses: totalExpenses.toString(),
    netProfitOrLoss: netProfitOrLoss.toString(),
    result: netProfitOrLoss.gte(0) ? "PROFIT" : "LOSS",
  };
}
