'use server';

import { prisma } from '../lib/prisma';
import { revalidatePath } from 'next/cache';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { mkdir } from 'fs/promises';

export type CreateOrderData = {
  customerEmail: string;
  amount: number;
  items: { id: string; name: string; price: number; quantity: number }[];
  transactionId: string;
};

export async function createOrder(data: CreateOrderData) {
  try {
    const order = await prisma.order.create({
      data: {
        customerEmail: data.customerEmail,
        amount: data.amount,
        items: JSON.stringify(data.items),
        transactionId: data.transactionId,
        status: 'PAID',
      },
    });
    revalidatePath('/purchases');
    revalidatePath('/admin');
    return { success: true, orderId: order.id };
  } catch (error) {
    console.error('Failed to create order:', error);
    return { success: false, error: 'Failed to create order' };
  }
}

export async function getUserOrders(email: string) {
  try {
    const orders = await prisma.order.findMany({
      where: { customerEmail: email },
      orderBy: { createdAt: 'desc' },
    });
    return orders;
  } catch (error) {
    console.error('Failed to get user orders:', error);
    return [];
  }
}

export async function getAllOrders() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return orders;
  } catch (error) {
    console.error('Failed to get all orders:', error);
    return [];
  }
}

export async function updateOrderToDelivered(formData: FormData) {
  const orderId = formData.get('orderId') as string;
  const file = formData.get('proof') as File;

  if (!orderId || !file) {
    return { success: false, error: 'Missing order ID or proof file' };
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Ensure uploads directory exists
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });

    const fileName = `${orderId}-${file.name}`;
    const filePath = join(uploadDir, fileName);

    await writeFile(filePath, buffer);
    const proofUrl = `/uploads/${fileName}`;

    await prisma.order.update({
      where: { id: orderId },
      data: {
        status: 'DELIVERED',
        proofPath: proofUrl,
      },
    });

    revalidatePath('/admin');
    revalidatePath('/purchases');
    return { success: true };
  } catch (error) {
    console.error('Failed to upload proof and update order:', error);
    return { success: false, error: 'Failed to process request' };
  }
}

export async function requestRefund(orderId: string) {
  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      return { success: false, error: 'Order not found' };
    }

    // Verify 72h condition
    const now = new Date();
    const createdAt = new Date(order.createdAt);
    const hoursDiff = (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60);

    if (hoursDiff < 72) {
      return { success: false, error: 'Cannot request refund before 72 hours' };
    }

    if (order.status === 'DELIVERED') {
      return { success: false, error: 'Cannot refund delivered order' };
    }

    await prisma.order.update({
      where: { id: orderId },
      data: { status: 'REFUND_REQUESTED' },
    });

    revalidatePath('/purchases');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error('Failed to request refund:', error);
    return { success: false, error: 'Failed to request refund' };
  }
}
