import { NextResponse } from 'next/server';
import { getSession } from '@/lib/database';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const session = getSession(params.id);
  if (session) {
    return NextResponse.json(session);
  }
  return NextResponse.json({ error: 'Session not found' }, { status: 404 });
}
