import { NextResponse } from 'next/server';
import { getClass12Categories, getClass10Streams } from '@/lib/career-data';

export async function GET() {
  return NextResponse.json({
    class_12_categories: getClass12Categories(),
    class_10_streams: getClass10Streams(),
  });
}
