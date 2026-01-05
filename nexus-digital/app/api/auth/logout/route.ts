import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
  return NextResponse.json({ message: 'Logged out successfully' });
}
