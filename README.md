# 🧭 Career Compass - AI-Powered Career Guidance Website

> **Tagline:** *"Discover Your Interests. Explore Your Future."*

A modern, responsive, educational technology platform that provides conversational AI career counselling for students who have completed **Class 10** or **Class 12**.

The platform is available in two production architectures:
1. **Next.js Fullstack (App Router + TypeScript + Tailwind CSS)**: Modern React fullstack implementation with native Next.js Route Handlers.
2. **Python / Flask Backend + Vanilla SPA Frontend**: Lightweight Python backend with SQLite persistence and responsive web client.

---

## 🌟 Key Capabilities & Features

### 1. Education-Level Specific Assessment
* **12th-Pass Students**: Recommends the **TOP 3 suitable undergraduate degree courses** matched across 40 specialized interest categories with strict academic eligibility validation (PCM, PCB, PCMB, Commerce, Arts).
* **10th-Pass Students**: Recommends the **TOP 2 suitable academic streams** (Science PCM, Science PCB, Science PCMB, Commerce, Arts/Humanities) for Intermediate / +2 education.

### 2. Intelligent Conversational AI Counsellor
* Conducts an adaptive dialogue of **10 questions, one at a time**.
* Dynamically synthesizes follow-up questions from the student's previous answers (e.g., if a student mentions drawing, it probes digital UI/UX vs architectural blueprints vs 3D animation).
* Dual input mode: interactive **suggested quick-reply pills** PLUS an open text box for custom answers.
* Real-time progress bar (`Question X of 10`), typing indicator animation, and live student profile updates.
* **Review & Rollback**: Allows students to go back to previous questions or restart anytime.

### 3. Comprehensive Output & Reporting
* **Top 3 Degree Cards (12th)**: Degree title, AI fit percentage, personalized rationale, key curriculum subjects, course duration, entrance examinations (JEE, NEET, CUET, CLAT, NATA, etc.), salary ranges (with industry caveats), and postgraduate specializations.
* **Top 2 Stream Cards (10th)**: Stream name, subject combinations, academic rigor, board variations (CBSE, ICSE, State Boards), key advantages, subjects requiring particular attention, and future career doors.
* **Side-by-Side Comparison**: Compare the top recommendations across eligibility, syllabus, difficulty, and career pathways.
* **Download Career Report as PDF**: Print-ready, branded executive career assessment report including transcript and disclaimer.
* **Explore Careers Directory**: Searchable, domain-filtered library of all 40 undergraduate categories and 5 academic streams.

### 4. Dual AI Inference Engine
* **Cloud Mode (Google Gemini API)**: Plug in your Gemini API key (e.g., `gemini-2.5-flash`) via the built-in UI Settings Modal or `.env`. Keys are stored securely server-side.
* **Intelligent Local Engine**: When running offline or without an API key, the built-in natural language semantic engine provides full 10-question adaptive dialogues and eligibility matrix mapping.

---

## 🎨 Theme & Design System

* **Primary Color**: Royal Blue (`#2563EB`)
* **Secondary Color**: Light Blue (`#60A5FA`)
* **Background**: Very light blue tint (`#F5F9FF`) & pure white (`#FFFFFF`)
* **Text**: Dark Navy (`#14213D`)
* **Typography**: Inter & Poppins
* Modern glassmorphism, soft drop shadows (`shadow-royal`), card hover lift effects, and responsive mobile-first layouts.

---

## 📁 Project Architecture

```
career-compass/
├── nextjs/                   # ★ NEXT.JS FULLSTACK IMPLEMENTATION
│   ├── app/
│   │   ├── api/              # Next.js Route Handlers (API Backend)
│   │   │   ├── chat/start/   # POST: Initialize assessment session
│   │   │   ├── chat/message/ # POST: Adaptive question & recommendation engine
│   │   │   ├── chat/previous/# POST: Rollback to previous question
│   │   │   ├── config/       # GET/POST: AI engine status & key config
│   │   │   ├── categories/   # GET: 40 categories & 5 streams
│   │   │   └── sessions/     # GET: Assessment history
│   │   ├── layout.tsx        # Next.js Root Layout with metadata & fonts
│   │   ├── page.tsx          # Complete interactive Career Compass client app
│   │   └── globals.css       # Tailwind CSS & global styles
│   ├── lib/
│   │   ├── types.ts          # TypeScript domain interfaces & types
│   │   ├── career-data.ts    # 40 categories & 5 streams data dictionary
│   │   ├── database.ts       # File-based JSON persistence (.data/)
│   │   └── ai-service.ts     # Gemini Flash API + 10-step adaptive engine
│   ├── public/assets/        # Vector logo & compass icons
│   ├── package.json          # Next.js 14, React 18, Tailwind, TypeScript
│   ├── tsconfig.json         # TypeScript configuration
│   └── .env.example          # Environment variable template
├── backend/                  # PYTHON / FLASK BACKEND
│   ├── server.py             # Flask REST API server & static host
│   ├── app.py                # WSGI entry point
│   ├── ai_service.py         # Gemini API & Python decision engine
│   ├── database.py           # SQLite database for sessions & settings
│   └── career_data.py        # Python career & stream database
├── frontend/                 # VANILLA SPA FRONTEND (used with Flask)
│   ├── index.html            # Single-page application entry point
│   ├── css/style.css         # Theme styles & animations
│   └── js/                   # Modular ES6 components & services
├── start-next.bat            # One-click launcher for Next.js (Windows)
├── run-next.ps1              # PowerShell launcher for Next.js
├── start.bat                 # One-click launcher for Flask (Windows)
├── run.ps1                   # PowerShell launcher for Flask
└── README.md
```

---

## 🚀 How to Run the Website

### Option A: Next.js (Fullstack App Router)

**Prerequisite:** [Node.js](https://nodejs.org/) (v18 or higher).

#### Method 1: One-Click Launcher (Windows)
Double-click **`start-next.bat`** in the project root folder. It will:
1. Verify Node.js is installed.
2. Install npm dependencies if not already installed (`npm install`).
3. Start the Next.js development server on `http://localhost:8000`.
4. Automatically open your web browser.

#### Method 2: Command Line (PowerShell / Terminal)
```powershell
cd "C:\Users\Neela Bhavani\.gemini\antigravity\scratch\career-compass\nextjs"
npm install
npm run dev
```
Then visit `http://localhost:8000` in your web browser.

---

### Option B: Python / Flask Backend

**Prerequisite:** Python 3.10+ installed.

#### Method 1: One-Click Launcher (Windows)
Double-click **`start.bat`** in the project root folder.

#### Method 2: Command Line (PowerShell)
```powershell
cd "C:\Users\Neela Bhavani\.gemini\antigravity\scratch\career-compass\backend"
python server.py 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🔑 Configuring Google Gemini API (Optional)

1. Open `http://localhost:8000` in your browser.
2. For Next.js: create a `.env.local` file inside `nextjs/`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   Or set it in the UI Settings dialog.
3. Free keys are available from [Google AI Studio](https://aistudio.google.com/app/apikey).
*(If no API key is provided, the platform automatically runs with the high-precision offline semantic reasoning engine!)*

---

## 📚 Career & Stream Databases Included

### 40 Undergraduate Categories (12th Pass)
1. Computers & Programming
2. Artificial Intelligence & Data Science
3. Cybersecurity & Ethical Hacking
4. Mathematics & Computing
5. Physics & Space Research
6. Medical & Clinical Healthcare
7. Pharmacy & Medicines
8. Biotechnology & Microbiology
9. Business & Management
10. Finance & Accounting
11. Banking & Investments
12. Designing & Creativity
13. Fashion & Clothing
14. Architecture & Buildings
15. Mechanical Machines
16. Automobiles & Mobility
17. Robotics & Automation
18. Electronics & Circuits
19. Electrical Systems & Energy
20. Law & Justice
21. Politics & Government
22. Psychology & Human Behaviour
23. Journalism & Media
24. Film, Direction & Photography
25. Agriculture & Farming
26. Environment & Nature
27. Animals & Veterinary Science
28. Hospitality & Hotels
29. Tourism & Travelling
30. Sports & Fitness
31. Defence & Military Services
32. Aviation & Flying
33. Teaching & Education
34. Food Technology & Nutrition
35. Cooking & Culinary Arts
36. Skilled Trades, Mechatronics & Technical Repair
37. Statistics & Data Science
38. Languages & Literature
39. Social Work & Community Development
40. Geology & Earth Sciences

### 5 Intermediate Academic Streams (10th Pass)
1. **Science (PCM)**: Physics, Chemistry & Mathematics
2. **Science (PCB)**: Physics, Chemistry & Biology
3. **Science (PCMB)**: Physics, Chemistry, Mathematics & Biology
4. **Commerce**: Accountancy, Business Studies & Economics
5. **Arts / Humanities**: History, Political Science, Psychology & Literature
