import bcrypt from "bcryptjs";
import { prisma } from "../../src/lib/prisma.js";

async function run() {
  const email = "superadmin@gmail.com";
  const password = "Superadmin@123";
  const name = "Super Admin";

  // Delete any existing record first to avoid stale hashes
  await prisma.user.deleteMany({
    where: { email },
  });

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash,
      accountStatus: "APPROVED",
      isSuperAdmin: true,
    },
  });

  console.log("Superadmin freshly recreated with correct hash:", user.email);
}

run()
  .catch(console.error)
  .finally(() => prisma.$disconnect());