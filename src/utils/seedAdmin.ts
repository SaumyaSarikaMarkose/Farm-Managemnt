import { prisma } from '../lib/prisma.js';
import crypto from 'crypto';
import util from 'util';

const scryptAsync = util.promisify(crypto.scrypt);

async function hashPassword(password: string): Promise<string> {
  const salt = crypto.randomBytes(16).toString('hex');
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString('hex')}.${salt}`;
}

export async function seedDefaultAdmin() {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'Admin@gmail.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';
    const adminName = 'System Administrator';

    const existingAdmin = await prisma.user.findFirst({
      where: {
        OR: [
          { email: adminEmail },
          { isSuperAdmin: true }
        ]
      },
    });

    if (!existingAdmin) {
      const passwordHash = await hashPassword(adminPassword);
      
      await prisma.user.create({
        data: {
          email: adminEmail,
          name: adminName,
          passwordHash,
          accountStatus: 'APPROVED',
          isSuperAdmin: true,
        },
      });

      console.log(`Default admin user created successfully (${adminEmail})`);
    }
  } catch (error) {
    console.error('Error seeding default admin:', error);
  }
}