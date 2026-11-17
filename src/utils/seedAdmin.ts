import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma.js";

async function run() {
  const email = "superadmin@gmail.com"; // Lowercased to match auth service
  const password = "Superadmin@123";
  const name = "Super Admin";

  // Matches your backend's exact hashing configuration (bcryptjs with 12 rounds)
  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      accountStatus: "APPROVED",
      isSuperAdmin: true,
    },
    create: {
      email,
      name,
      passwordHash,
      accountStatus: "APPROVED",
      isSuperAdmin: true,
    },
  });

  console.log("Superadmin successfully seeded with bcryptjs:", user.email);
}

run()
  .catch(console.error)
  .finally(() => prisma.$disconnect());