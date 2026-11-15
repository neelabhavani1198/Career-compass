import { NextResponse } from 'next/server';
import { listRecentSessions } from '@/lib/database';

export async function GET() {
  const sessions = listRecentSessions(20);
  return NextResponse.json({ sessions });
}
