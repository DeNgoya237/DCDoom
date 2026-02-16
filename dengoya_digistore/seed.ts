import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});

async function main() {
  const email = 'test@example.com';

  // Clean up if schema exists (it might not if I just pushed)
  // Actually, deleteMany might fail if table doesn't exist? No, db push ensures table exists.
  try {
      await prisma.order.deleteMany({ where: { customerEmail: email } });
  } catch (e) {
      console.log('No orders to delete or table missing (should be created by push)');
  }

  await prisma.order.create({
    data: {
      customerEmail: email,
      amount: 15000,
      status: 'PAID',
      items: JSON.stringify([{ id: '1', name: 'Formation', price: 15000, quantity: 1 }]),
      transactionId: `txn_recent_${Date.now()}`,
    },
  });

  const oldDate = new Date();
  oldDate.setDate(oldDate.getDate() - 4);

  await prisma.order.create({
    data: {
      customerEmail: email,
      amount: 5000,
      status: 'PAID',
      items: JSON.stringify([{ id: '2', name: 'Ebook', price: 5000, quantity: 1 }]),
      transactionId: `txn_old_${Date.now()}`,
      createdAt: oldDate,
    },
  });

  console.log('Seeded');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
