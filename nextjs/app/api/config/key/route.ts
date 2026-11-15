import { NextResponse } from 'next/server';
import { setSetting } from '@/lib/database';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const apiKey = typeof body?.api_key === 'string' ? body.api_key.trim() : '';

    if (apiKey) {
      setSetting('GEMINI_API_KEY', apiKey);
      return NextResponse.json({ success: true, message: 'Gemini API key configured successfully' });
    } else {
      setSetting('GEMINI_API_KEY', '');
      return NextResponse.json({ success: true, message: 'API key cleared' });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update API key' }, { status: 500 });
  }
}
