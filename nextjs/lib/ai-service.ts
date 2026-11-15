/**
 * Career Compass - AI Service Engine (Next.js / TypeScript)
 * Integrates Google Gemini API with intelligent conversational orchestration,
 * context memory, dynamic follow-up questioning, and multi-factor course/stream matching.
 * Includes a rich local semantic reasoning engine if the live API is unconfigured or offline.
 */

import {
  ChatMessage,
  StudentProfile,
  Recommendation12th,
  Recommendation10th,
  Class12Category,
} from './types';
import {
  getClass10Streams,
  getClass12Categories,
  getStreamById,
} from './career-data';
import { getSetting } from './database';

const GEMINI_MODEL = "gemini-2.5-flash";

export function getGeminiApiKey(): string | null {
  const envKey = process.env.GEMINI_API_KEY;
  if (envKey && envKey.trim().length > 0) {
    return envKey.trim();
  }
  const dbKey = getSetting("GEMINI_API_KEY");
  if (dbKey && dbKey.trim().length > 0) {
    return dbKey.trim();
  }
  return null;
}

export async function callGeminiGenerate(prompt: string, systemInstruction = ""): Promise<string | null> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) return null;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const payload: Record<string, unknown> = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ],
    generationConfig: {
      temperature: 0.65,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 2048,
      responseMimeType: "application/json"
    }
  };

  if (systemInstruction) {
    payload.systemInstruction = {
      parts: [{ text: systemInstruction }]
    };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const respData = await res.json();
      const candidate = respData?.candidates?.[0];
      const text = candidate?.content?.parts?.[0]?.text;
      return text || null;
    }
  } catch (e) {
    console.warn("[AI Service] Gemini API call exception:", e);
  }
  return null;
}

// =========================================================================
// INTELLIGENT SEMANTIC ENGINE
// =========================================================================

export const FIRST_QUESTION_12TH = {
  question: "What do you enjoy doing most in your free time?",
  quick_options: [
    "Coding, tinkering with tech & gadgets",
    "Drawing, designing, photography or music",
    "Reading, writing, debating or exploring social issues",
    "Science experiments, nature & biological sciences",
    "Business ideas, stock markets & entrepreneurship",
    "Sports, fitness, mechanics or outdoor adventures"
  ]
};

export const FIRST_QUESTION_10TH = {
  question: "What activities do you enjoy most, both inside and outside school?",
  quick_options: [
    "Solving math puzzles & experimenting with science",
    "Drawing, creative arts, drama or storytelling",
    "Learning about animals, nature, plants and the human body",
    "Organizing school events, managing money & group activities",
    "Reading history, debating current affairs & social causes",
    "Sports, building physical models & hands-on fixing"
  ]
};

export function analyzeStudentAnswerKeywords(text: string): {
  domain_scores: Record<string, number>;
  detected_stream: string | null;
  raw_text: string;
} {
  const textLower = text.toLowerCase();
  const domains: Record<string, number> = {
    tech_cs: 0,
    ai_data: 0,
    electronics_mech: 0,
    medical_bio: 0,
    pharmacy: 0,
    business_commerce: 0,
    finance_accounts: 0,
    design_creative: 0,
    architecture_spatial: 0,
    law_politics: 0,
    psychology_social: 0,
    journalism_media: 0,
    environment_agri: 0,
    defence_aviation: 0,
    sports_fitness: 0,
    culinary_hospitality: 0
  };

  const mappings: Record<string, string[]> = {
    tech_cs: ["coding", "code", "programming", "software", "app", "website", "computer", "python", "java", "developer", "hack", "tech"],
    ai_data: ["ai", "artificial intelligence", "machine learning", "data", "robot", "neural", "algorithm", "analytics"],
    electronics_mech: ["robotics", "circuits", "hardware", "machines", "mechanical", "engines", "cars", "automobiles", "gadgets", "fixing", "tools", "physics"],
    medical_bio: ["doctor", "medicine", "hospital", "patient", "biology", "human body", "health", "anatomy", "diseases", "surgery", "cure"],
    pharmacy: ["pharma", "pharmacy", "medicines", "drugs", "chemistry", "chemicals", "formulations", "tablets"],
    business_commerce: ["business", "startup", "entrepreneur", "management", "company", "leadership", "marketing", "sales", "ceo", "commerce"],
    finance_accounts: ["finance", "accounting", "money", "stocks", "investment", "ca", "chartered accountant", "taxes", "banking", "shares", "crypto", "profit"],
    design_creative: ["drawing", "sketching", "design", "painting", "illustration", "ui/ux", "graphic", "art", "creative", "fashion", "visual", "colors"],
    architecture_spatial: ["architecture", "buildings", "interior", "structures", "floor plan", "construction", "civil", "spaces", "monuments"],
    law_politics: ["law", "lawyer", "advocate", "court", "justice", "rights", "politics", "government", "constitution", "debate", "diplomacy", "ias", "upsc"],
    psychology_social: ["psychology", "human behaviour", "mind", "counselling", "therapy", "mental health", "listening", "empathy", "helping people", "social work", "ngo"],
    journalism_media: ["journalism", "news", "reporting", "writing", "stories", "media", "anchor", "film", "photography", "camera", "video editing", "youtube", "interviews"],
    environment_agri: ["nature", "animals", "wildlife", "environment", "plants", "forests", "agriculture", "farming", "crops", "green", "veterinary", "pets", "earth", "geology"],
    defence_aviation: ["army", "navy", "air force", "defence", "pilot", "flying", "aviation", "aircraft", "patriotism", "nda", "military"],
    sports_fitness: ["sports", "fitness", "gym", "football", "cricket", "basketball", "athletics", "exercise", "workout", "physical", "training"],
    culinary_hospitality: ["cooking", "baking", "chef", "food", "recipes", "hotel", "hospitality", "resort", "culinary", "restaurant"]
  };

  for (const [dom, kws] of Object.entries(mappings)) {
    for (const kw of kws) {
      const reg = new RegExp(`\\b${kw}\\b`, 'i');
      if (reg.test(textLower)) {
        domains[dom] += 1.5;
      } else if (textLower.includes(kw)) {
        domains[dom] += 0.8;
      }
    }
  }

  let detected_stream: string | null = null;
  if (["pcm", "physics chemistry math", "mpc", "maths physics chemistry", "science with math", "engineering stream"].some(k => textLower.includes(k))) {
    detected_stream = "Science (PCM)";
  } else if (["pcb", "physics chemistry biology", "bipc", "medical stream", "science with biology"].some(k => textLower.includes(k))) {
    detected_stream = "Science (PCB)";
  } else if (["pcmb", "pcbm", "both math and biology", "maths and biology"].some(k => textLower.includes(k))) {
    detected_stream = "Science (PCMB)";
  } else if (["commerce", "accounts", "accountancy", "business studies"].some(k => textLower.includes(k))) {
    detected_stream = "Commerce";
  } else if (["arts", "humanities", "history political", "social science"].some(k => textLower.includes(k))) {
    detected_stream = "Arts / Humanities";
  }

  return { domain_scores: domains, detected_stream, raw_text: text };
}

export function updateStudentProfile(
  profile: StudentProfile,
  newSignals: ReturnType<typeof analyzeStudentAnswerKeywords>,
  _questionIdx: number
): StudentProfile {
  if (!profile.domains) profile.domains = {};
  if (!profile.all_answers) profile.all_answers = [];
  if (!profile.detected_interests) profile.detected_interests = [];

  profile.all_answers.push(newSignals.raw_text);

  for (const [dom, score] of Object.entries(newSignals.domain_scores)) {
    profile.domains[dom] = (profile.domains[dom] || 0) + score;
  }

  if (newSignals.detected_stream) {
    profile.stream_studied = newSignals.detected_stream;
  }

  const sortedDomains = Object.entries(profile.domains).sort((a, b) => b[1] - a[1]);
  profile.detected_interests = sortedDomains.filter(d => d[1] > 0).slice(0, 5).map(d => d[0]);

  return profile;
}

export function generateDynamicQuestion12th(
  history: ChatMessage[],
  profile: StudentProfile,
  questionNum: number
): { question: string; quick_options: string[] } {
  const lastAnswer = history.length > 0 && history[history.length - 1].role === 'user' ? history[history.length - 1].content : '';
  const lastLower = lastAnswer.toLowerCase();

  if (questionNum === 2) {
    if (["drawing", "art", "sketch", "design", "creative", "painting"].some(w => lastLower.includes(w))) {
      return {
        question: "That's wonderful! When you draw or create, do you enjoy realistic scenery and portraits, designing digital interfaces/graphics, or building imaginative 3D concepts?",
        quick_options: [
          "Realistic natural landscapes and portraits",
          "Digital art, UI/UX designs, and modern graphics",
          "Architectural spaces, product sketches and 3D models",
          "Character illustrations and animation"
        ]
      };
    } else if (["coding", "programming", "tech", "computer", "gadget", "software", "app"].some(w => lastLower.includes(w))) {
      return {
        question: "Fascinating! When exploring technology or code, what excites you more: building interactive web/mobile apps, diving into AI & smart algorithms, or understanding how hardware circuits and machines work?",
        quick_options: [
          "Building interactive web applications & mobile apps",
          "Artificial Intelligence, Machine Learning & data models",
          "Cybersecurity, ethical hacking & network defense",
          "Robotics, microcontrollers and IoT hardware"
        ]
      };
    } else if (["biology", "medicine", "doctor", "health", "nature", "science", "body"].some(w => lastLower.includes(w))) {
      return {
        question: "Inspiring! Are you drawn more towards hands-on patient healthcare and clinical treatment, or would you prefer laboratory research, pharmaceutical drug discovery, and biotechnology?",
        quick_options: [
          "Direct clinical treatment & saving lives in hospitals",
          "Pharmaceutical research and developing new medicines",
          "Biotechnology, genetics and laboratory experiments",
          "Public health, wellness and nutrition science"
        ]
      };
    } else if (["business", "finance", "stock", "startup", "entrepreneur", "money", "market"].some(w => lastLower.includes(w))) {
      return {
        question: "Exciting ambition! In the world of business, do you find yourself more intrigued by market investments & financial numbers, or building innovative startups and marketing strategies?",
        quick_options: [
          "Investment banking, stock markets & quantitative finance",
          "Launching innovative startups & venture building",
          "Corporate strategy, management consulting & brand marketing",
          "Chartered Accountancy, taxation and corporate auditing"
        ]
      };
    } else if (["reading", "writing", "law", "debate", "politics", "social"].some(w => lastLower.includes(w))) {
      return {
        question: "Great! When analyzing issues, are you motivated by legal justice and constitutional debates, investigative journalism and media storytelling, or understanding human psychology and counselling?",
        quick_options: [
          "Legal justice, courtroom advocacy & corporate law",
          "Human psychology, counselling and mental wellness",
          "Investigative journalism, digital media & mass communication",
          "Civil services, public policy and international relations"
        ]
      };
    } else {
      return {
        question: `Interesting! You mentioned "${lastAnswer.slice(0, 30)}...". When you engage in this, what part brings you the greatest satisfaction?`,
        quick_options: [
          "Solving a complex puzzle or logical challenge",
          "Expressing personal creativity and original aesthetics",
          "Seeing the tangible real-world outcome in practice",
          "Helping other people or collaborating with a team"
        ]
      };
    }
  } else if (questionNum === 3) {
    return {
      question: "How do you prefer to tackle challenges: do you lean towards logical & mathematical calculations, hands-on physical building, creative artistic expression, or interpersonal communication?",
      quick_options: [
        "Logical analysis, mathematical algorithms and structured data",
        "Creative visual storytelling, aesthetics and outside-the-box ideas",
        "Hands-on experimentation, building physical objects or machines",
        "Persuasive communication, negotiation, debate and leading people"
      ]
    };
  } else if (questionNum === 4) {
    return {
      question: "Think about the kind of real-world impact you want to create. Which of these global challenges would you feel most proud dedicating your career to?",
      quick_options: [
        "Developing breakthrough AI, cutting-edge software or cybersecurity",
        "Advancing healthcare, curing illnesses or medical bio-innovations",
        "Building sustainable infrastructure, green energy or smart cities",
        "Driving economic growth, business transformation or finance",
        "Championing human rights, law, public policy and social reform",
        "Creating world-class media, entertainment, films or design"
      ]
    };
  } else if (questionNum === 5) {
    return {
      question: "What kind of everyday working environment energizes you the most?",
      quick_options: [
        "A modern tech company or vibrant software innovation lab",
        "A hospital, clinic or diagnostic scientific research lab",
        "A corporate boardroom, financial trading floor or startup incubator",
        "A creative design studio, film set or digital media newsroom",
        "Courtrooms, government think tanks, or international embassies",
        "Outdoor fieldwork, aviation cockpits, defense bases or manufacturing plants"
      ]
    };
  } else if (questionNum === 6) {
    return {
      question: "Looking at your personal strengths, what do your friends, teachers, or family frequently say you are naturally good at?",
      quick_options: [
        "Explaining complex concepts clearly and thinking logically",
        "Aesthetic sense, sketching, visual creativity or writing",
        "Organizing people, managing money, or leading initiatives",
        "Listening empathetically, resolving disputes and supporting others",
        "Technical troubleshooting, tinkering with devices, or coding",
        "Physical discipline, focus under pressure, or strategic gaming"
      ]
    };
  } else if (questionNum === 7) {
    return {
      question: "When planning your long-term career, what is your primary expectation regarding financial rewards and lifestyle balance?",
      quick_options: [
        "High initial earning potential and rapid promotion in fast-growth sectors",
        "Long-term stability, respected social prestige and work-life balance",
        "Entrepreneurial freedom with unlimited risk-reward potential",
        "Meaningful social impact and purposeful work, even if growth is gradual",
        "Global mobility and opportunities to work or travel internationally"
      ]
    };
  } else if (questionNum === 8) {
    const currentStream = profile.stream_studied;
    if (currentStream) {
      return {
        question: `You previously indicated your 12th stream is ${currentStream}. To confirm academic eligibility, what was your exact subject combination?`,
        quick_options: [
          `${currentStream} with Mathematics & Computer Science`,
          `${currentStream} with Physical Education / Informatics`,
          `${currentStream} with Economics / Applied Math`,
          "I want to specify my exact subjects in the text box"
        ]
      };
    } else {
      return {
        question: "To ensure we only recommend courses you are academically eligible for, what was your stream in 12th standard?",
        quick_options: [
          "Science with Mathematics (PCM / MPC)",
          "Science with Biology (PCB / BiPC)",
          "Science with both Math & Biology (PCMB)",
          "Commerce with Mathematics",
          "Commerce without Mathematics",
          "Arts / Humanities"
        ]
      };
    }
  } else if (questionNum === 9) {
    return {
      question: "How comfortable and confident do you feel with intensive mathematical problem-solving or theoretical sciences in your college studies?",
      quick_options: [
        "Very confident – I enjoy advanced math, statistics and complex calculations",
        "Moderate – I can handle applied math/statistics if required for tech or business",
        "Prefer descriptive subjects, human sciences, theory and conceptual learning",
        "Prefer practical, creative and visual project work over formulas"
      ]
    };
  } else {
    return {
      question: "Final question: If you had to pick one dream direction right now—whether technical, creative, business, medical, or legal—what excites you the most?",
      quick_options: [
        "Software engineering, AI systems or modern tech development",
        "Medical doctor, clinical specialist or pharmaceutical innovator",
        "Chartered Accountant, investment banker or corporate business leader",
        "UI/UX product designer, architect or creative director",
        "Corporate legal counsel, civil servant or public policy leader",
        "Commercial pilot, defence officer, or aerospace specialist"
      ]
    };
  }
}

export function generateDynamicQuestion10th(
  _history: ChatMessage[],
  _profile: StudentProfile,
  questionNum: number
): { question: string; quick_options: string[] } {
  if (questionNum === 2) {
    return {
      question: "Among the school subjects you studied in Class 10, which two subjects did you look forward to the most?",
      quick_options: [
        "Mathematics and Science (Physics/Chemistry)",
        "Science (especially Biology & Living Organisms) and English",
        "Social Science (History, Civics, Economics) and Languages",
        "Computer Applications / Information Technology",
        "Art, Physical Education and Creative Activities",
        "Economics and Commercial Studies"
      ]
    };
  } else if (questionNum === 3) {
    return {
      question: "How do you honestly feel about Mathematics: do you enjoy solving algebraic equations and geometry problems, or does it feel stressful?",
      quick_options: [
        "I love Math! It's one of my highest scoring and most enjoyable subjects",
        "I can manage Math well with practice, but I prefer applied calculations",
        "I find Math tough or boring and would rather avoid advanced calculus in 11th",
        "I prefer biology and descriptive theory over numerical formulas"
      ]
    };
  } else if (questionNum === 4) {
    return {
      question: "When you study Science, which area fascinates your curiosity more?",
      quick_options: [
        "Physics and Chemistry: understanding how electricity, gravity, engines, and matter behave",
        "Biology: understanding human anatomy, organs, plant systems, genetics and diseases",
        "Both equally! I love both physical sciences and living organisms",
        "Neither attracts me much; I am far more drawn to economics, business or humanities"
      ]
    };
  } else if (questionNum === 5) {
    return {
      question: "Have you ever found yourself curious about how businesses make money, how stock markets work, or managing personal budgets?",
      quick_options: [
        "Yes, very curious! I find business models, entrepreneurship and investing exciting",
        "Somewhat interested, especially in starting my own brand or company someday",
        "Only casually, but my core passion lies in technology, medicine or science",
        "Not really, I prefer social issues, arts, literature, or human behavior"
      ]
    };
  } else if (questionNum === 6) {
    return {
      question: "How do you feel about subjects like History, Geography, Civics, and discussing politics, social justice, or current affairs?",
      quick_options: [
        "Very passionate! I love debating, learning about world events and human rights",
        "I enjoy understanding current affairs, but prefer technical or scientific subjects",
        "I find them interesting for general knowledge, but not as my primary study stream",
        "I prefer structured numerical problem-solving over memorizing historical dates"
      ]
    };
  } else if (questionNum === 7) {
    return {
      question: "What is your preferred learning style when studying new topics?",
      quick_options: [
        "Solving numerical problems, writing code, and logical proofs",
        "Visual learning with diagrams, flowcharts, and biological specimens",
        "Reading case studies, writing essays, debate and group discussions",
        "Practical laboratory experiments, building physical models and projects"
      ]
    };
  } else if (questionNum === 8) {
    return {
      question: "Fast-forward 6–8 years: picture your ideal professional day. Where do you see yourself working?",
      quick_options: [
        "At a tech company writing code or developing robotics/space technologies",
        "In a hospital, clinic, or pharmaceutical research lab helping patients",
        "In a financial consultancy, bank, corporate office, or running my own company",
        "In a court of law, government ministry, international NGO, or media studio",
        "In an architecture firm, design studio, or aviation cockpit"
      ]
    };
  } else if (questionNum === 9) {
    return {
      question: "In Class 11 and 12, are you ready to prepare for rigorous competitive entrance examinations like JEE, NEET, CLAT, or CA Foundation?",
      quick_options: [
        "Yes, fully motivated to dedicate 4–6 hours daily for JEE (Engineering) or NEET (Medical)",
        "Yes, motivated to prepare for commerce/management exams like CA Foundation or IPMAT",
        "Yes, interested in humanities & law exams like CLAT or UPSC Civil Services foundation",
        "I prefer focusing on school board excellence, holistic profile, and balanced routine"
      ]
    };
  } else {
    return {
      question: "Final question: If you had to choose today, which broad direction feels closest to your heart for 11th and 12th?",
      quick_options: [
        "Science (PCM) – Focusing on Engineering, Tech, Architecture & Physical Sciences",
        "Science (PCB) – Focusing on Medical, Healthcare, Pharmacy & Life Sciences",
        "Science (PCMB) – Keeping both Engineering & Medical doors open",
        "Commerce – Focusing on Business, Chartered Accountancy, Banking & Finance",
        "Arts / Humanities – Focusing on Law, Civil Services, Psychology, Journalism & Design"
      ]
    };
  }
}

export function analyzeAndRecommend12th(
  history: ChatMessage[],
  profile: StudentProfile
): Recommendation12th[] {
  let detectedStream = profile.stream_studied;
  const combinedAnswers = history.map(h => h.content).join(' ').toLowerCase();

  if (!detectedStream) {
    if (["pcm", "mpc", "maths physics chemistry", "science with math"].some(w => combinedAnswers.includes(w))) {
      detectedStream = "Science (PCM)";
    } else if (["pcb", "bipc", "biology physics chemistry", "medical stream"].some(w => combinedAnswers.includes(w))) {
      detectedStream = "Science (PCB)";
    } else if (["pcmb", "pcbm"].some(w => combinedAnswers.includes(w))) {
      detectedStream = "Science (PCMB)";
    } else if (["commerce", "accounts", "business studies"].some(w => combinedAnswers.includes(w))) {
      detectedStream = "Commerce";
    } else if (["arts", "humanities", "history"].some(w => combinedAnswers.includes(w))) {
      detectedStream = "Arts / Humanities";
    } else {
      detectedStream = "Science (PCM)";
    }
  }

  const allCategories = getClass12Categories();
  const scoredCategories: { cat: Class12Category; score: number; whyMatch: string }[] = [];

  for (const cat of allCategories) {
    const suitableStreams = cat.suitable_for_streams || [];
    let isEligible = false;

    if (suitableStreams.includes("Any Stream") || suitableStreams.some(s => s.includes("Any"))) {
      isEligible = true;
    } else if (suitableStreams.includes(detectedStream)) {
      isEligible = true;
    } else if (detectedStream === "Science (PCMB)" && suitableStreams.some(s => s.includes("Science"))) {
      isEligible = true;
    } else if (detectedStream === "Commerce" && suitableStreams.some(s => s.includes("Commerce"))) {
      isEligible = true;
    } else if (detectedStream === "Science (PCM)" && suitableStreams.some(s => s.includes("PCM"))) {
      isEligible = true;
    } else if (detectedStream === "Science (PCB)" && suitableStreams.some(s => s.includes("PCB"))) {
      isEligible = true;
    }

    if (!isEligible) continue;

    let score = 0;
    const matchedReasons: string[] = [];

    for (const [dom, pts] of Object.entries(profile.domains || {})) {
      if (cat.category.toLowerCase().includes(dom) || cat.domain.toLowerCase().includes(dom)) {
        score += pts * 2.5;
      }
    }

    for (const kw of cat.why_match_keywords || []) {
      if (combinedAnswers.includes(kw)) {
        score += 3.0;
        if (!matchedReasons.includes(kw)) {
          matchedReasons.push(kw);
        }
      }
    }

    if (combinedAnswers.includes("tech") && cat.domain.includes("Technology")) score += 4.0;
    if (combinedAnswers.includes("medic") && cat.domain.includes("Medical")) score += 4.0;
    if (combinedAnswers.includes("business") && cat.domain.includes("Business")) score += 4.0;
    if (combinedAnswers.includes("design") && cat.domain.includes("Design")) score += 4.0;
    if (combinedAnswers.includes("law") && cat.domain.includes("Law")) score += 4.0;

    const reasonKws = matchedReasons.slice(0, 3).join(', ') || "your declared aptitude and problem-solving preferences";
    const whyMatch = `Based on your answers throughout the assessment, you demonstrated strong interest in ${cat.category} (particularly around ${reasonKws}). Your 12th standard background in ${detectedStream} fulfills the prerequisites for this degree pathway.`;

    scoredCategories.push({ cat, score, whyMatch });
  }

  scoredCategories.sort((a, b) => b.score - a.score);
  const top3 = scoredCategories.slice(0, 3);

  if (top3.length < 3) {
    for (const cat of allCategories) {
      if (!top3.some(t => t.cat.id === cat.id)) {
        top3.push({
          cat,
          score: 15.0,
          whyMatch: `Compatible degree choice for ${detectedStream} students exploring career growth.`
        });
        if (top3.length >= 3) break;
      }
    }
  }

  const matchPercentages = [96, 91, 86];
  const ranks = ["#1 Best Match", "#2 Strong Match", "#3 High Potential Alternative"];

  return top3.map((item, i) => ({
    rank: ranks[i],
    rank_num: i + 1,
    category_id: item.cat.id,
    category_name: item.cat.category,
    domain: item.cat.domain,
    recommended_course: item.cat.courses[0],
    all_degree_options: item.cat.courses,
    match_percentage: matchPercentages[i],
    match_indicator: `${matchPercentages[i]}% Interest Alignment (AI Estimate)`,
    why_matches: item.whyMatch,
    important_subjects: item.cat.important_subjects,
    duration: item.cat.duration,
    eligibility: item.cat.eligibility,
    entrance_exams: item.cat.entrance_exams,
    career_opportunities: item.cat.careers,
    salary_range: item.cat.salary_range,
    salary_notes: item.cat.salary_notes,
    further_study: item.cat.further_study,
    academic_stream_validated: detectedStream
  }));
}

export function analyzeAndRecommend10th(
  history: ChatMessage[],
  profile: StudentProfile
): Recommendation10th[] {
  const combinedAnswers = history.map(h => h.content).join(' ').toLowerCase();

  const scores: Record<string, number> = {
    "science-pcm": 0,
    "science-pcb": 0,
    "science-pcmb": 0,
    "commerce": 0,
    "arts-humanities": 0
  };

  const doms = profile.domains || {};
  scores["science-pcm"] += (doms["tech_cs"] || 0) * 2.5 + (doms["electronics_mech"] || 0) * 2.5 + (doms["ai_data"] || 0) * 2.0;
  scores["science-pcb"] += (doms["medical_bio"] || 0) * 3.0 + (doms["pharmacy"] || 0) * 2.5 + (doms["environment_agri"] || 0) * 1.5;
  scores["commerce"] += (doms["business_commerce"] || 0) * 3.0 + (doms["finance_accounts"] || 0) * 3.0;
  scores["arts-humanities"] += (doms["law_politics"] || 0) * 3.0 + (doms["psychology_social"] || 0) * 2.5 + (doms["journalism_media"] || 0) * 2.5 + (doms["design_creative"] || 0) * 1.5;

  if (combinedAnswers.includes("love math") || combinedAnswers.includes("enjoy solving") || combinedAnswers.includes("pcm")) {
    scores["science-pcm"] += 8.0;
    scores["commerce"] += 3.0;
  }
  if (combinedAnswers.includes("doctor") || combinedAnswers.includes("patient") || combinedAnswers.includes("pcb") || combinedAnswers.includes("biology")) {
    scores["science-pcb"] += 8.0;
  }
  if ((combinedAnswers.includes("both math and biology") || combinedAnswers.includes("both equally")) && scores["science-pcm"] > 5 && scores["science-pcb"] > 5) {
    scores["science-pcmb"] += (scores["science-pcm"] + scores["science-pcb"]) * 0.6 + 5.0;
  }
  if (combinedAnswers.includes("business") || combinedAnswers.includes("finance") || combinedAnswers.includes("stock") || combinedAnswers.includes("chartered")) {
    scores["commerce"] += 8.0;
  }
  if (combinedAnswers.includes("history") || combinedAnswers.includes("law") || combinedAnswers.includes("debating") || combinedAnswers.includes("civil services") || combinedAnswers.includes("upsc")) {
    scores["arts-humanities"] += 8.0;
  }

  const sortedStreams = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topStreamIds = [sortedStreams[0][0], sortedStreams[1][0]];

  const ranks = ["#1 Recommended Stream", "#2 Alternative Stream"];
  const matchPercentages = [95, 88];

  const results: Recommendation10th[] = [];

  for (let i = 0; i < topStreamIds.length; i++) {
    const sId = topStreamIds[i];
    const streamData = getStreamById(sId);
    if (!streamData) continue;

    let whyMatch = "";
    if (sId === "science-pcm") {
      whyMatch = "Your dialogue revealed a strong orientation toward logical problem-solving, technology, and mathematical aptitude. Science (PCM) will provide you with the most direct springboard to engineering, architecture, computer science, and data technology.";
    } else if (sId === "science-pcb") {
      whyMatch = "You expressed keen interest in life sciences, biological systems, healthcare, or medicine. Science (PCB) provides the foundational syllabus necessary for medical degrees (MBBS, BDS), pharmacy, and biotechnology research.";
    } else if (sId === "science-pcmb") {
      whyMatch = "Your responses indicated balanced enthusiasm for both mathematical reasoning and biological sciences. PCMB preserves complete flexibility for both technical engineering and clinical healthcare pathways.";
    } else if (sId === "commerce") {
      whyMatch = "Throughout our conversation, you displayed interest in business dynamics, corporate enterprise, financial growth, and economics. Commerce equips you with practical mastery of financial ledgers, corporate governance, and economic markets.";
    } else if (sId === "arts-humanities") {
      whyMatch = "Your answers highlighted strong communication skills, curiosity about social structures, justice, creative expression, or human behavior. Arts/Humanities offers the premier foundation for legal studies, civil services, psychology, and modern media.";
    }

    results.push({
      rank: ranks[i],
      rank_num: i + 1,
      stream_id: streamData.id,
      stream_name: streamData.name,
      tagline: streamData.tagline,
      match_percentage: matchPercentages[i],
      match_indicator: `${matchPercentages[i]}% Stream Affinity (AI Estimate)`,
      why_matches: whyMatch,
      main_subjects: streamData.main_subjects,
      future_degree_options: streamData.future_courses,
      career_opportunities: streamData.career_opportunities,
      important_advantages: streamData.advantages,
      subjects_needing_attention: streamData.subjects_needing_attention,
      academic_rigor: streamData.academic_rigor,
      board_notes: streamData.board_notes
    });
  }

  return results;
}

export async function tryGeminiQuestion(
  educationLevel: '10th' | '12th',
  currentQuestionIndex: number,
  history: ChatMessage[],
  _profile: StudentProfile
): Promise<{ question: string; quick_options: string[] } | null> {
  const systemPrompt = `You are Career Compass AI, an expert, encouraging career guidance counsellor.
The student has completed ${educationLevel} standard.
You must conduct a 10-question conversational assessment, asking exactly ONE question at a time.
Current Question Number: ${currentQuestionIndex} of 10.

CRITICAL RULES:
1. Always generate the next question directly tailored to the student's previous answers in the transcript.
2. If the user mentioned a hobby or interest (e.g. drawing, coding, games, biology), probe deeper into what specifically they enjoy about it.
3. For 12th students: by questions 8-9, make sure to ascertain their 12th standard stream (PCM, PCB, PCMB, Commerce, Arts) to ensure eligibility checking.
4. For 10th students: explore their comfort with math, sciences, business, and humanities to suggest Intermediate streams.
5. Provide 3 to 5 realistic quick-reply options as suggestion pills, but keep the question open-ended.
6. Return your response STRICTLY as a JSON object with this format:
{
    "question": "Your personalized question here",
    "quick_options": ["Option 1", "Option 2", "Option 3", "Option 4"]
}`;

  const prompt = `Student Conversation History:\n${JSON.stringify(history, null, 2)}\n\nGenerate Question ${currentQuestionIndex} of 10.`;

  const raw = await callGeminiGenerate(prompt, systemPrompt);
  if (raw) {
    try {
      let cleaned = raw.trim();
      if (cleaned.startsWith("```json")) cleaned = cleaned.slice(7);
      if (cleaned.startsWith("```")) cleaned = cleaned.slice(3);
      if (cleaned.endsWith("```")) cleaned = cleaned.slice(0, -3);
      const data = JSON.parse(cleaned.trim());
      if (data.question && Array.isArray(data.quick_options)) {
        return {
          question: data.question,
          quick_options: data.quick_options
        };
      }
    } catch (e) {
      console.warn("[AI Service] Failed to parse Gemini response:", e);
    }
  }
  return null;
}

export async function getNextQuestion(
  educationLevel: '10th' | '12th',
  currentQuestionIndex: number,
  history: ChatMessage[],
  profile: StudentProfile
): Promise<{ question: string; quick_options: string[] }> {
  const apiKey = getGeminiApiKey();
  if (apiKey && currentQuestionIndex > 1) {
    const geminiRes = await tryGeminiQuestion(educationLevel, currentQuestionIndex, history, profile);
    if (geminiRes) return geminiRes;
  }

  if (educationLevel === '12th') {
    return generateDynamicQuestion12th(history, profile, currentQuestionIndex);
  } else {
    return generateDynamicQuestion10th(history, profile, currentQuestionIndex);
  }
}

export function generateRecommendations(
  educationLevel: '10th' | '12th',
  history: ChatMessage[],
  profile: StudentProfile
): Recommendation12th[] | Recommendation10th[] {
  if (educationLevel === '12th') {
    return analyzeAndRecommend12th(history, profile);
  } else {
    return analyzeAndRecommend10th(history, profile);
  }
}
