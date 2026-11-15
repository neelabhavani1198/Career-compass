import { NextResponse } from 'next/server';
import {
  analyzeStudentAnswerKeywords,
  updateStudentProfile,
  getNextQuestion,
  generateRecommendations,
} from '@/lib/ai-service';
import { getSession, saveSession } from '@/lib/database';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const sessionId = typeof body?.session_id === 'string' ? body.session_id : '';
    const userAnswer = typeof body?.answer === 'string' ? body.answer.trim() : '';

    if (!sessionId || !userAnswer) {
      return NextResponse.json({ error: 'Missing session_id or answer' }, { status: 400 });
    }

    const session = getSession(sessionId);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    const currQIdx = session.current_question_index;
    const educationLevel = session.education_level;
    const history = session.history;
    let profile = session.profile;

    // Add user answer to history
    history.push({
      role: 'user',
      content: userAnswer,
      question_number: currQIdx,
    });

    // Extract signals & update profile
    const signals = analyzeStudentAnswerKeywords(userAnswer);
    profile = updateStudentProfile(profile, signals, currQIdx);

    const nextQIdx = currQIdx + 1;

    if (nextQIdx <= 10) {
      // Generate next adaptive question
      const nextQData = await getNextQuestion(educationLevel, nextQIdx, history, profile);
      history.push({
        role: 'model',
        content: nextQData.question,
        quick_options: nextQData.quick_options,
        question_number: nextQIdx,
      });

      session.current_question_index = nextQIdx;
      session.history = history;
      session.profile = profile;
      saveSession(session);

      return NextResponse.json({
        completed: false,
        session_id: sessionId,
        education_level: educationLevel,
        question_number: nextQIdx,
        total_questions: 10,
        question: nextQData.question,
        quick_options: nextQData.quick_options,
        profile: profile,
      });
    } else {
      // 10 Questions complete! Run final analysis and recommendations!
      const recommendations = generateRecommendations(educationLevel, history, profile);
      session.completed = true;
      session.current_question_index = 10;
      session.history = history;
      session.profile = profile;
      session.recommendations = recommendations;
      saveSession(session);

      return NextResponse.json({
        completed: true,
        session_id: sessionId,
        education_level: educationLevel,
        total_questions: 10,
        profile: profile,
        recommendations: recommendations,
      });
    }
  } catch (error) {
    console.error('[API chat/message error]:', error);
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}
