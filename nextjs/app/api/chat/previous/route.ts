import { NextResponse } from 'next/server';
import { getSession, saveSession } from '@/lib/database';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const sessionId = typeof body?.session_id === 'string' ? body.session_id : '';

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
    }

    const session = getSession(sessionId);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    const currQIdx = session.current_question_index;
    if (currQIdx > 1) {
      const history = session.history;
      // Pop model question for current index
      while (history.length > 0 && history[history.length - 1].question_number === currQIdx) {
        history.pop();
      }
      // Pop user answer for previous index
      if (history.length > 0 && history[history.length - 1].role === 'user') {
        history.pop();
      }

      const newIdx = currQIdx - 1;
      session.current_question_index = newIdx;
      session.history = history;
      session.completed = false;
      saveSession(session);

      const lastModelMsg = [...history].reverse().find(m => m.role === 'model');
      const qText = lastModelMsg?.content || 'Please answer the previous question:';
      const qOpts = lastModelMsg?.quick_options || [];

      return NextResponse.json({
        session_id: sessionId,
        education_level: session.education_level,
        question_number: newIdx,
        total_questions: 10,
        question: qText,
        quick_options: qOpts,
        profile: session.profile,
      });
    } else {
      return NextResponse.json({ error: 'Already at question 1' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to revert to previous question' }, { status: 500 });
  }
}
