import { NextResponse } from 'next/server';
import { getGeminiApiKey } from '@/lib/ai-service';
import { getClass12Categories, getClass10Streams } from '@/lib/career-data';

export async function GET() {
  const geminiKey = getGeminiApiKey();
  const hasKey = Boolean(geminiKey && geminiKey.length > 5);

  return NextResponse.json({
    status: 'ok',
    app_name: 'Career Compass',
    framework: 'Next.js (App Router)',
    version: '2.0.0',
    ai_engine: hasKey ? 'Google Gemini 2.5 Flash' : 'Intelligent Semantic Engine',
    has_gemini_key: hasKey,
    total_categories_12th: getClass12Categories().length,
    total_streams_10th: getClass10Streams().length,
  });
}
