/**
 * Career Compass - Next.js Core Type Definitions
 */

export interface Class10Stream {
  id: string;
  name: string;
  tagline: string;
  suitable_interests: string[];
  main_subjects: string[];
  future_courses: string[];
  career_opportunities: string[];
  advantages: string[];
  subjects_needing_attention: string[];
  academic_rigor: string;
  board_notes: string;
}

export interface Class12Category {
  id: number;
  category: string;
  domain: string;
  suitable_for_streams: string[];
  courses: string[];
  careers: string[];
  important_subjects: string[];
  duration: string;
  eligibility: string;
  entrance_exams: string[];
  salary_range: string;
  salary_notes: string;
  further_study: string[];
  why_match_keywords: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  quick_options?: string[];
  question_number?: number;
}

export interface StudentProfile {
  education_level: '10th' | '12th';
  domains: Record<string, number>;
  all_answers: string[];
  detected_interests: string[];
  stream_studied?: string;
}

export interface Recommendation12th {
  rank: string;
  rank_num: number;
  category_id: number;
  category_name: string;
  domain: string;
  recommended_course: string;
  all_degree_options: string[];
  match_percentage: number;
  match_indicator: string;
  why_matches: string;
  important_subjects: string[];
  duration: string;
  eligibility: string;
  entrance_exams: string[];
  career_opportunities: string[];
  salary_range: string;
  salary_notes: string;
  further_study: string[];
  academic_stream_validated: string;
}

export interface Recommendation10th {
  rank: string;
  rank_num: number;
  stream_id: string;
  stream_name: string;
  tagline: string;
  match_percentage: number;
  match_indicator: string;
  why_matches: string;
  main_subjects: string[];
  future_degree_options: string[];
  career_opportunities: string[];
  important_advantages: string[];
  subjects_needing_attention: string[];
  academic_rigor: string;
  board_notes: string;
}

export interface AssessmentSession {
  id: string;
  education_level: '10th' | '12th';
  created_at: string;
  updated_at: string;
  completed: boolean;
  current_question_index: number;
  history: ChatMessage[];
  profile: StudentProfile;
  recommendations: Recommendation12th[] | Recommendation10th[] | null;
}
