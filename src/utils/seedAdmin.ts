import { prisma } from './src/lib/prisma.js';
import crypto from 'crypto';
import util from 'util';

const scryptAsync = util.promisify(crypto.scrypt);

async function hashPassword(password: string): Promise<string> {
  const salt = crypto.randomBytes(16).toString('hex');
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString('hex')}.${salt}`;
}

async function run() {
  const email = 'Superadmin@gmail.com';
  const password = 'Superadmin@123';
  const name = 'Super Admin';

  const passwordHash = await hashPassword(password);

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      accountStatus: 'APPROVED',
      isSuperAdmin: true,
    },
    create: {
      email,
      name,
      passwordHash,
      accountStatus: 'APPROVED',
      isSuperAdmin: true,
    },
  });

  console.log('Superadmin user successfully set up:', user.email);
}

run()
  .catch(console.error)
  .finally(() => prisma.$disconnect());