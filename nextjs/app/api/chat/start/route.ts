import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { FIRST_QUESTION_10TH, FIRST_QUESTION_12TH } from '@/lib/ai-service';
import { saveSession } from '@/lib/database';
import { AssessmentSession } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    let educationLevel = body?.education_level;
    if (educationLevel !== '10th' && educationLevel !== '12th') {
      educationLevel = '12th';
    }

    const sessionId = crypto.randomUUID();
    const firstQ = educationLevel === '12th' ? FIRST_QUESTION_12TH : FIRST_QUESTION_10TH;
    const now = new Date().toISOString();

    const sessionData: AssessmentSession = {
      id: sessionId,
      education_level: educationLevel,
      created_at: now,
      updated_at: now,
      completed: false,
      current_question_index: 1,
      history: [
        {
          role: 'model',
          content: firstQ.question,
          quick_options: firstQ.quick_options,
          question_number: 1,
        },
      ],
      profile: {
        education_level: educationLevel,
        domains: {},
        all_answers: [],
        detected_interests: [],
      },
      recommendations: null,
    };

    saveSession(sessionData);

    return NextResponse.json({
      session_id: sessionId,
      education_level: educationLevel,
      question_number: 1,
      total_questions: 10,
      question: firstQ.question,
      quick_options: firstQ.quick_options,
      profile: sessionData.profile,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to initialize assessment' }, { status: 500 });
  }
}
