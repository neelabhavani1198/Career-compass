# 🧭 Career Compass - AI-Powered Career Guidance Website

> **Tagline:** *"Discover Your Interests. Explore Your Future."*

A modern, responsive, educational technology platform that provides conversational AI career counselling for students who have completed **Class 10** or **Class 12**.

---

## 🌟 Key Capabilities & Features

### 1. Education-Level Specific Assessment
* **12th-Pass Students**: Recommends the **TOP 3 suitable undergraduate degree courses** matched across 40 specialized interest categories with strict academic eligibility validation (PCM, PCB, PCMB, Commerce, Arts).
* **10th-Pass Students**: Recommends the **TOP 2 suitable academic streams** (Science PCM, Science PCB, Science PCMB, Commerce, Arts/Humanities) for Intermediate / +2 education.

### 2. Intelligent Conversational AI Counsellor
* Conducts an adaptive dialogue of **10 questions, one at a time**.
* Dynamically synthesizes follow-up questions from the student's previous answers (e.g., if a student mentions drawing, it probes digital UI/UX vs architectural blueprints vs 3D animation).
* Dual input mode: interactive **suggested quick-reply pills** PLUS an open text box for custom answers.
* Real-time progress bar (`Question X of 10`), typing indicator animation, live student profile sidebar.
* **Review & Rollback**: Allows students to go back to previous questions or restart anytime.

### 3. Comprehensive Output & Reporting
* **Top 3 Degree Cards (12th)**: Degree title, AI fit percentage, personalized rationale, key curriculum subjects, course duration, entrance examinations (JEE, NEET, CUET, CLAT, NATA, etc.), salary ranges (with industry caveats), and postgraduate specializations.
* **Top 2 Stream Cards (10th)**: Stream name, subject combinations, academic rigor, board variations (CBSE, ICSE, State Boards), key advantages, subjects requiring particular attention, and future career doors.
* **Side-by-Side Comparison**: Compare the top recommendations across eligibility, syllabus, difficulty, and salary.
* **Download Career Report as PDF**: Print-ready, branded executive career assessment report including transcript and disclaimer.
* **Explore Careers Directory**: Searchable, domain-filtered library of all 40 undergraduate categories and 5 academic streams.

### 4. Dual AI Inference Engine
* **Cloud Mode (Google Gemini API)**: Plug in your Gemini API key (e.g., `gemini-2.5-flash`) via the built-in UI Settings Modal or `.env` / database. Keys are stored securely server-side and never exposed to client scripts.
* **Intelligent Local Engine**: When running offline or without an API key, our built-in natural language semantic engine provides full 10-question adaptive dialogues and eligibility matrix mapping.

---

## 🎨 Theme & Design System

* **Primary Color**: Royal Blue (`#2563EB`)
* **Secondary Color**: Light Blue (`#60A5FA`)
* **Background**: Very light blue tint (`#F5F9FF`) & pure white (`#FFFFFF`)
* **Text**: Dark Navy (`#14213D`)
* **Typography**: Inter (UI prose) & Poppins (Headings)
* Modern glassmorphism, soft drop shadows (`shadow-royal`), card hover lift effects, and responsive mobile-first layouts.

---

## 📁 Project Architecture

```
career-compass/
├── backend/
│   ├── app.py                # Flask application entry point (`flask run`)
│   ├── server.py             # Flask REST API server & static file host
│   ├── ai_service.py         # Gemini API client & intelligent decision engine
│   ├── database.py           # SQLite database for sessions & configuration
│   ├── career_data.py        # 40 categories & 5 streams structured database
│   └── career_compass.db     # Local SQLite database (auto-created)
├── frontend/
│   ├── index.html            # Main single-page application entry point
│   ├── css/
│   │   └── style.css         # Theme colors, typing animations, print stylesheet
│   └── js/
│       ├── app.js            # Router, state manager & coordinator
│       ├── data/
│       │   └── careerData.js # Client-side career database mirror
│       ├── services/
│       │   ├── api.js        # REST API client
│       │   └── pdfExport.js  # Executive PDF career report generator
│       └── components/
│           ├── LandingPage.js
│           ├── EducationSelectPage.js
│           ├── ChatbotPage.js
│           ├── ResultsPage.js
│           ├── CompareModal.js
│           ├── ExploreCareersPage.js
│           ├── AboutPage.js
│           └── SettingsModal.js
├── requirements.txt          # Python dependencies (Flask >= 3.1)
├── start.bat                 # Windows one-click launcher
├── run.ps1                   # PowerShell launcher
└── README.md
```
│           ├── ResultsPage.js
│           ├── CompareModal.js
│           ├── ExploreCareersPage.js
│           ├── AboutPage.js
│           └── SettingsModal.js
├── start.bat                 # Windows one-click launcher
├── run.ps1                   # PowerShell launcher
└── README.md
```

---

## 🚀 How to Run the Website

### Option 1: One-Click Launcher (Windows)
Double-click `start.bat` in the project root folder. It will start the server on port `8000` and automatically open `http://localhost:8000` in your default web browser.

### Option 2: Command Line (PowerShell)
```powershell
cd "C:\Users\Neela Bhavani\.gemini\antigravity\scratch\career-compass\backend"
python server.py 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🔑 Configuring Google Gemini API (Optional)

1. Open `http://localhost:8000` in your browser.
2. Click the **"AI Engine"** button in the top navigation bar.
3. Paste your Google Gemini API key (obtainable free from [Google AI Studio](https://aistudio.google.com/app/apikey)).
4. Click **"Save & Connect"**. The status indicator will turn green, and all questions will be generated live using `gemini-2.5-flash`.
*(If no key is provided, the platform seamlessly uses the high-precision built-in semantic engine.)*

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
