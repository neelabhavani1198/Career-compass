"""
Career Compass - Career and Academic Stream Database
Contains detailed information on 40 interest categories for 12th-pass students
and 5 academic streams for 10th-pass students.
"""

from typing import List, Dict, Any

# 5 Academic Streams for 10th-Pass Students
CLASS_10_STREAMS: List[Dict[str, Any]] = [
    {
        "id": "science-pcm",
        "name": "Science (PCM)",
        "tagline": "Physics, Chemistry & Mathematics",
        "suitable_interests": [
            "Technology", "Engineering", "Mathematics", "Coding", "Robotics", 
            "Aviation", "Architecture", "Logical Problem Solving", "Inventions", "Mechanics"
        ],
        "main_subjects": ["Physics", "Chemistry", "Mathematics", "English", "Informatics Practices / Physical Education / Computer Science"],
        "future_courses": [
            "B.Tech / B.E (All Engineering disciplines)",
            "B.Arch (Architecture)",
            "B.Sc Physics / Mathematics / Chemistry",
            "B.Sc Data Science & Artificial Intelligence",
            "BCA (Computer Applications)",
            "Commercial Pilot License (CPL) Training",
            "National Defence Academy (NDA - Army/Navy/Air Force)"
        ],
        "career_opportunities": [
            "Software Engineer / Architect",
            "Aerospace / Aeronautical Engineer",
            "Mechanical / Civil Engineer",
            "Data Scientist / Quantitative Analyst",
            "Commercial Pilot",
            "Defence Forces Technical Officer"
        ],
        "advantages": [
            "Maximum career flexibility with open doors to all technical, scientific, and even commerce/arts careers later.",
            "Strong foundation in quantitative, logical, and analytical reasoning skills.",
            "High availability of premier engineering institutes (IITs, NITs, BITS) across India and globally."
        ],
        "subjects_needing_attention": [
            "Advanced Mathematics (Calculus, Coordinate Geometry, Vectors) requires rigorous daily practice.",
            "Physics requires deep conceptual comprehension rather than rote memorization."
        ],
        "academic_rigor": "High",
        "board_notes": "Available across CBSE, ICSE, and all State Boards. Some schools offer Computer Science or Electronics as the 5th elective subject."
    },
    {
        "id": "science-pcb",
        "name": "Science (PCB)",
        "tagline": "Physics, Chemistry & Biology",
        "suitable_interests": [
            "Medicine", "Healthcare", "Biology", "Human Anatomy", "Genetics",
            "Pharmaceuticals", "Dentistry", "Veterinary Care", "Environmental Science"
        ],
        "main_subjects": ["Physics", "Chemistry", "Biology (Botany & Zoology)", "English", "Psychology / Physical Education / Biotechnology"],
        "future_courses": [
            "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
            "BDS (Dental Surgery)",
            "BAMS / BHMS (Ayurvedic & Homeopathic Medicine)",
            "B.Pharm / Pharm.D (Pharmacy & Drug Research)",
            "B.Sc Nursing / Physiotherapy (BPT)",
            "B.V.Sc & AH (Veterinary Science)",
            "B.Sc Biotechnology / Microbiology / Genetics"
        ],
        "career_opportunities": [
            "Doctor / Specialized Surgeon",
            "Dentist / Orthodontist",
            "Pharmacist / Clinical Research Scientist",
            "Biotechnologist / Microbiologist",
            "Veterinary Physician",
            "Healthcare Administrator / Medical Advisor"
        ],
        "advantages": [
            "Direct pathway to high-impact, noble, and recession-resilient healthcare careers.",
            "Fascinating understanding of life processes, human physiology, and molecular biology.",
            "Expansive emerging research fields in genetics, immunotherapy, and bio-pharmaceuticals."
        ],
        "subjects_needing_attention": [
            "Extensive memorization and retention of biological diagrams, taxonomy, and biochemical pathways.",
            "Physics numerical problem-solving often proves challenging for biology enthusiasts and needs equal dedication."
        ],
        "academic_rigor": "High",
        "board_notes": "Compulsory for NEET-UG aspirants. In some state boards, Biology is divided into separate Botany and Zoology papers."
    },
    {
        "id": "science-pcmb",
        "name": "Science (PCMB)",
        "tagline": "Physics, Chemistry, Mathematics & Biology",
        "suitable_interests": [
            "Dual Engineering & Medical interests", "Biomedical Engineering", "Biotechnology",
            "Bioinformatics", "Neuroscience", "Undecided between Math and Biology", "High Academic Stamina"
        ],
        "main_subjects": ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
        "future_courses": [
            "B.Tech in Biomedical Engineering / Biotechnology / Bioinformatics",
            "MBBS / BDS / Allied Healthcare Degrees",
            "B.Tech in Computer Science / Electronics (all engineering)",
            "B.Sc in Biophysics / Computational Biology / Biochemistry",
            "Integrated Dual Degree Programs in Pure Sciences (IISER, NISER)"
        ],
        "career_opportunities": [
            "Biomedical Engineer (Medical Devices & Prosthetics)",
            "Bioinformatics Scientist (Genomic Big Data)",
            "Healthcare Technologist / AI in Medicine Specialist",
            "Medical Doctor or Biotech Researcher",
            "Pharmaceutical Process Engineer"
        ],
        "advantages": [
            "Ultimate academic flexibility: eligible for both NEET and JEE entrance examinations.",
            "Ideal foundation for modern intersectional sciences (Nanotechnology, Neural Engineering, Genetic Algorithms).",
            "Never closes a door to either engineering or medical sciences."
        ],
        "subjects_needing_attention": [
            "Significantly higher study workload and pressure managing both intensive Mathematics and detailed Biology.",
            "Demands disciplined time-management to avoid burnout when preparing for competitive examinations."
        ],
        "academic_rigor": "Very High",
        "board_notes": "Not all schools offer PCMB due to timetable and laboratory constraints; check your prospective school's subject combinations."
    },
    {
        "id": "commerce",
        "name": "Commerce (with/without Mathematics)",
        "tagline": "Accountancy, Business Studies & Economics",
        "suitable_interests": [
            "Business", "Banking", "Finance", "Stock Markets", "Entrepreneurship",
            "Corporate Management", "Economics", "Trade", "Investments", "E-commerce"
        ],
        "main_subjects": ["Accountancy", "Business Studies", "Economics", "English", "Mathematics or Informatics Practices or Entrepreneurship"],
        "future_courses": [
            "B.Com / B.Com (Honours)",
            "BBA / BMS (Bachelor of Business Administration / Management)",
            "Chartered Accountancy (CA - ICAI pathway)",
            "Company Secretary (CS) / Cost & Management Accountant (CMA)",
            "BA Economics (Honours)",
            "Integrated 5-Year BBA-MBA (IPMAT pathway)",
            "B.Des / Law (BA LLB / BBA LLB)"
        ],
        "career_opportunities": [
            "Chartered Accountant / Certified Public Accountant",
            "Investment Banker / Equity Research Analyst",
            "Management Consultant / Business Strategist",
            "Corporate Financial Analyst / Controller",
            "Fintech Entrepreneur",
            "Corporate Lawyer (via Law degree)"
        ],
        "advantages": [
            "Direct practical application to how corporations, markets, and global economies function.",
            "Prestigious professional credentials (CA, CFA, CMA) can be pursued concurrently or right after 12th.",
            "Excellent balance of conceptual theory, case studies, and quantitative skills."
        ],
        "subjects_needing_attention": [
            "Accountancy requires high precision, ledger accuracy, and systematic ledger posting principles.",
            "Economics requires grasp of mathematical models, graphs, and macroeconomic indicators."
        ],
        "academic_rigor": "Moderate to High (Higher with Applied Mathematics)",
        "board_notes": "Taking Mathematics or Applied Mathematics as the 5th subject is strongly recommended if aiming for top colleges (SRCC, St. Stephen's) or economics/finance majors."
    },
    {
        "id": "arts-humanities",
        "name": "Arts / Humanities",
        "tagline": "History, Political Science, Psychology, Sociology & Literature",
        "suitable_interests": [
            "Law & Justice", "Politics & Public Policy", "Psychology & Human Behaviour",
            "Civil Services (UPSC)", "Journalism & Media", "Creative Writing", "History",
            "International Relations", "Social Work & Human Rights", "Fine Arts & Design"
        ],
        "main_subjects": ["History / Geography", "Political Science", "Psychology / Sociology", "English Literature", "Economics / Fine Arts / Legal Studies"],
        "future_courses": [
            "BA LLB (5-Year Integrated Law - CLAT pathway)",
            "BA (Honours) in Political Science / History / Psychology / Sociology",
            "BA in Journalism & Mass Communication (BJMC)",
            "Bachelor of Social Work (BSW)",
            "Bachelor of Design (B.Des - NID/UCEED)",
            "Bachelor of Fine Arts (BFA)",
            "BA in International Relations / Public Policy"
        ],
        "career_opportunities": [
            "Civil Servant / Diplomat (IAS, IPS, IFS via UPSC CSE)",
            "Advocate / Corporate Legal Counsel / Judicial Officer",
            "Clinical or Counselling Psychologist (post-PG)",
            "Investigative Journalist / Media Editor / Content Director",
            "Public Policy Analyst / Think-Tank Researcher",
            "Human Resources Specialist / Organizational Psychologist"
        ],
        "advantages": [
            "Fosters superior critical thinking, persuasive writing, cultural empathy, and rhetorical skills.",
            "Strongest academic syllabus alignment with the UPSC Civil Services Examination and Law entrance tests.",
            "Vast multidisciplinary scope spanning modern media, mental health, design, and international affairs."
        ],
        "subjects_needing_attention": [
            "Demands extensive long-form essay writing, critical reading, and analytical synthesis of historical/social debates.",
            "Requires proactive career structuring as career paths are broad rather than single-track."
        ],
        "academic_rigor": "Moderate to High",
        "board_notes": "Schools often offer diverse elective combinations including Legal Studies, Economics, Psychology, and Media Studies."
    }
]

# 40 Interest Categories for 12th-Pass Students
CLASS_12_CATEGORIES: List[Dict[str, Any]] = [
    {
        "id": 1,
        "category": "Computers & Programming",
        "domain": "Technology & Computing",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)", "Commerce with Math", "Any (for BCA)"],
        "courses": ["B.Tech Computer Science Engineering (CSE)", "B.Tech Information Technology (IT)", "BCA (Bachelor of Computer Applications)", "B.Sc Computer Science"],
        "careers": ["Software Developer", "Full Stack Web Developer", "Mobile App Developer", "Cloud Solutions Architect", "DevOps Engineer"],
        "important_subjects": ["Data Structures & Algorithms", "Operating Systems", "Object-Oriented Programming (Java/C++)", "Computer Networks", "Database Management Systems (DBMS)"],
        "duration": "4 Years (B.Tech) / 3 Years (BCA, B.Sc)",
        "eligibility": "For B.Tech: 10+2 with Physics & Mathematics (minimum 50-75% depending on institute). For BCA/B.Sc: 10+2 from any recognized board, math often preferred.",
        "entrance_exams": ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "CUET UG", "State CETs (MHT-CET, KCET, WBJEE)"],
        "salary_range": "₹4.5 LPA – ₹22 LPA (starting freshers; top tech campus offers can exceed ₹40+ LPA)",
        "salary_notes": "Starting salaries vary significantly by college tier, personal coding proficiency, and algorithmic problem-solving ability.",
        "further_study": ["M.Tech in CSE", "MS in Computer Science abroad", "MBA in Tech Management", "Ph.D. in Computer Science"],
        "why_match_keywords": ["coding", "software", "programming", "apps", "websites", "technology", "computers", "logic", "algorithms", "problem-solving"]
    },
    {
        "id": 2,
        "category": "Artificial Intelligence & Data Science",
        "domain": "Technology & Computing",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)", "Any with Math"],
        "courses": ["B.Tech AI & ML", "B.Tech CSE (Artificial Intelligence)", "B.Sc Artificial Intelligence", "B.Sc Data Science & Analytics"],
        "careers": ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "NLP Engineer", "Computer Vision Specialist"],
        "important_subjects": ["Machine Learning Algorithms", "Deep Learning & Neural Networks", "Linear Algebra & Statistics", "Natural Language Processing (NLP)", "Big Data Technologies"],
        "duration": "4 Years (B.Tech) / 3-4 Years (B.Sc)",
        "eligibility": "10+2 with Physics, Mathematics and Chemistry/Computer Science.",
        "entrance_exams": ["JEE Main", "JEE Advanced", "BITSAT", "CUET UG", "State CETs"],
        "salary_range": "₹6.0 LPA – ₹25 LPA (starting freshers; high demand field with rapid escalation)",
        "salary_notes": "Requires strong applied mathematics and programming foundation.",
        "further_study": ["MS in Artificial Intelligence / Data Science", "M.Tech AI", "Doctoral Research in Deep Learning"],
        "why_match_keywords": ["ai", "machine learning", "data", "deep learning", "neural networks", "automation", "predictive models", "math", "smart systems"]
    },
    {
        "id": 3,
        "category": "Cybersecurity & Ethical Hacking",
        "domain": "Technology & Computing",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)", "Any for BCA/B.Sc"],
        "courses": ["B.Tech Cybersecurity", "B.Tech CSE with Cyber Forensics", "BCA in Information Security", "B.Sc Cybersecurity"],
        "careers": ["Ethical Hacker / Penetration Tester", "Information Security Analyst", "SOC Analyst", "Cyber Forensics Investigator", "Cryptographer"],
        "important_subjects": ["Network Security & Firewalls", "Ethical Hacking & Penetration Testing", "Cryptography & PKI", "Cyber Laws & Incident Response", "Malware Analysis"],
        "duration": "4 Years (B.Tech) / 3 Years (BCA/B.Sc)",
        "eligibility": "10+2 with Physics & Mathematics for B.Tech; 10+2 in any stream for selected BCA/B.Sc programs.",
        "entrance_exams": ["JEE Main", "CUET UG", "BITSAT", "University Entrance Tests"],
        "salary_range": "₹5.0 LPA – ₹18 LPA (starting; high bonuses for bug bounty and certifications like CEH/OSCP)",
        "salary_notes": "Industry certifications (CEH, CompTIA Security+, OSCP) substantially boost starting packages.",
        "further_study": ["M.Tech Information Security", "MS in Cybersecurity", "Certifications: CISSP, CISM"],
        "why_match_keywords": ["cybersecurity", "hacking", "ethical hacking", "security", "networks", "defense", "forensics", "privacy", "protection"]
    },
    {
        "id": 4,
        "category": "Mathematics & Computing",
        "domain": "Pure Sciences & Analytics",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)", "Commerce with Math"],
        "courses": ["B.Sc Mathematics", "B.Sc Applied Mathematics", "B.Stat (Bachelor of Statistics - ISI)", "B.Tech Mathematics and Computing"],
        "careers": ["Mathematician", "Quantitative Financial Analyst (Quant)", "Data Analyst", "Cryptanalyst", "Actuarial Specialist"],
        "important_subjects": ["Real & Complex Analysis", "Abstract Algebra", "Probability & Stochastic Processes", "Differential Equations", "Numerical Computing"],
        "duration": "3-4 Years (B.Sc/B.Stat) / 4 Years (B.Tech)",
        "eligibility": "10+2 with high scores in Mathematics.",
        "entrance_exams": ["ISI Admission Test", "JEE Main / Advanced", "CUET UG", "CMI Entrance Exam"],
        "salary_range": "₹6.0 LPA – ₹28 LPA (top graduates from ISI/IITs command high financial packages)",
        "salary_notes": "Quantitative trading desks and risk analytics firms offer top tier compensations.",
        "further_study": ["M.Sc Mathematics / Statistics", "M.Tech Mathematics & Computing", "Ph.D. in Pure/Applied Mathematics"],
        "why_match_keywords": ["math", "mathematics", "calculus", "geometry", "equations", "numbers", "statistics", "puzzles", "logic"]
    },
    {
        "id": 5,
        "category": "Physics & Space Research",
        "domain": "Pure Sciences & Analytics",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Sc Physics", "Integrated M.Sc Physics (IISER/NISER)", "B.Tech Engineering Physics (IITs)"],
        "careers": ["Research Physicist", "Astrophysicist / Space Scientist (ISRO/DRDO)", "Optical / Laser Engineer", "Laboratory Scientist", "Academic Professor"],
        "important_subjects": ["Classical Mechanics", "Quantum Mechanics", "Electromagnetism", "Thermodynamics & Statistical Physics", "Nuclear & Particle Physics"],
        "duration": "3-4 Years (B.Sc) / 5 Years (Integrated M.Sc) / 4 Years (B.Tech)",
        "eligibility": "10+2 with Physics, Chemistry, and Mathematics (minimum 60%).",
        "entrance_exams": ["IAT (IISER Aptitude Test)", "NEST", "JEE Advanced", "CUET UG"],
        "salary_range": "₹4.5 LPA – ₹14 LPA (scientific government scales / private R&D labs; scales with Ph.D.)",
        "salary_notes": "Academic and national research laboratories offer government pay commissions with stable benefits.",
        "further_study": ["M.Sc Physics", "Ph.D. in Astrophysics / Quantum Computing / Nanotechnology"],
        "why_match_keywords": ["physics", "space", "astronomy", "universe", "planets", "quantum", "relativity", "experiments", "gravity"]
    },
    {
        "id": 6,
        "category": "Medical & Clinical Healthcare",
        "domain": "Medical & Healthcare",
        "suitable_for_streams": ["Science (PCB)", "Science (PCMB)"],
        "courses": ["MBBS (Bachelor of Medicine & Surgery)", "BDS (Dental Surgery)", "BAMS (Ayurveda)", "BHMS (Homeopathy)", "B.Sc Nursing"],
        "careers": ["Medical Doctor / Surgeon", "Dentist", "Physician", "Specialist Doctor (Cardiologist, Neurologist)", "Registered Clinical Nurse"],
        "important_subjects": ["Human Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology", "General Surgery & Medicine"],
        "duration": "5.5 Years including 1 Year Internship (MBBS/BDS/BAMS) / 4 Years (B.Sc Nursing)",
        "eligibility": "10+2 with Physics, Chemistry, Biology/Biotechnology and English with minimum 50% marks (40% for reserved categories). Minimum age 17.",
        "entrance_exams": ["NEET-UG (National Eligibility cum Entrance Test - Mandatory)"],
        "salary_range": "₹6.0 LPA – ₹16 LPA (Junior Resident / Medical Officer; rises substantially with MD/MS specialization)",
        "salary_notes": "Career compensation compounds significantly after PG specialization (MD/MS/DM) and senior residency.",
        "further_study": ["MD / MS / DNB (Postgraduate Medical Specializations)", "DM / M.Ch (Super-specialization)"],
        "why_match_keywords": ["doctor", "medicine", "biology", "hospital", "patient care", "surgery", "human body", "health", "saving lives"]
    },
    {
        "id": 7,
        "category": "Pharmacy & Medicines",
        "domain": "Medical & Healthcare",
        "suitable_for_streams": ["Science (PCB)", "Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Pharm (Bachelor of Pharmacy)", "Pharm.D (Doctor of Pharmacy)", "D.Pharm (Diploma in Pharmacy)"],
        "careers": ["Registered Pharmacist", "Drug Inspector (Government)", "Pharmaceutical Formulation Scientist", "Clinical Research Associate", "Medical Affairs Manager"],
        "important_subjects": ["Pharmaceutics", "Medicinal Chemistry", "Pharmacology & Toxicology", "Pharmacognosy", "Biopharmaceutics & Pharmacokinetics"],
        "duration": "4 Years (B.Pharm) / 6 Years (Pharm.D)",
        "eligibility": "10+2 with Physics and Chemistry along with Mathematics or Biology.",
        "entrance_exams": ["GPAT (for PG)", "State Pharmacy CETs (MHT-CET, WBJEE, KCET)", "CUET UG", "BITSAT"],
        "salary_range": "₹3.5 LPA – ₹9.5 LPA (starting in pharma production, formulation R&D, or QA/QC)",
        "salary_notes": "High opportunities in pharmaceutical manufacturing hubs and MNC drug discovery centers.",
        "further_study": ["M.Pharm (Pharmacology / Pharmaceutics)", "MBA in Pharma Management", "Ph.D. in Drug Design"],
        "why_match_keywords": ["pharmacy", "medicines", "drugs", "chemistry", "formulation", "medical science", "drug research", "clinical trials"]
    },
    {
        "id": 8,
        "category": "Biotechnology & Microbiology",
        "domain": "Medical & Healthcare",
        "suitable_for_streams": ["Science (PCB)", "Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Sc Biotechnology", "B.Tech Biotechnology", "B.Sc Microbiology", "B.Sc Genetics"],
        "careers": ["Biotechnologist", "Microbiologist", "Geneticist", "Immunology Researcher", "Quality Control Microbiologist"],
        "important_subjects": ["Molecular Biology", "Recombinant DNA Technology", "Microbial Physiology", "Bioinformatics", "Immunology & Fermentation"],
        "duration": "3 Years (B.Sc) / 4 Years (B.Tech)",
        "eligibility": "10+2 with Biology and/or Mathematics, Physics, Chemistry.",
        "entrance_exams": ["CUET UG", "JEE Main (for B.Tech Biotech)", "State CETs", "IISER IAT"],
        "salary_range": "₹4.0 LPA – ₹10 LPA (starting; high growth in vaccine, agriculture biotech, and genome sequencing firms)",
        "salary_notes": "Research scientists often attain highest compensation after Master's or Ph.D. qualifications.",
        "further_study": ["M.Sc / M.Tech Biotechnology", "Ph.D. in Molecular Biology / Genetics", "MS in Bioinformatics"],
        "why_match_keywords": ["biotechnology", "microbiology", "genes", "genetics", "dna", "cells", "biology", "vaccines", "lab research"]
    },
    {
        "id": 9,
        "category": "Business & Management",
        "domain": "Business & Management",
        "suitable_for_streams": ["Commerce", "Science (PCM/PCB)", "Arts / Humanities"],
        "courses": ["BBA (Bachelor of Business Administration)", "BMS (Bachelor of Management Studies)", "BBM", "Integrated BBA-MBA (5 Years)"],
        "careers": ["Business Development Manager", "Management Consultant", "Marketing Strategist", "Operations Executive", "Entrepreneur / Startup Founder"],
        "important_subjects": ["Principles of Management", "Marketing Management", "Organizational Behaviour", "Strategic Management", "Financial Accounting"],
        "duration": "3 Years (BBA/BMS) / 5 Years (Integrated IPM programs)",
        "eligibility": "10+2 in any stream from a recognized board with minimum 50% aggregate.",
        "entrance_exams": ["IPMAT (IIM Indore/Rohtak)", "JIPMAT", "CUET UG", "NPAT", "SET (Symbiosis)"],
        "salary_range": "₹4.0 LPA – ₹18 LPA (IIM IPM graduates command ₹16-24+ LPA starting)",
        "salary_notes": "Tier-1 institutes (IIMs, Shaheed Sukhdev DU) offer significantly higher initial compensation.",
        "further_study": ["MBA (CAT / GMAT / XAT)", "PGDM", "Specialized Masters in International Business"],
        "why_match_keywords": ["business", "management", "leadership", "entrepreneurship", "startups", "strategy", "marketing", "organizing"]
    },
    {
        "id": 10,
        "category": "Finance & Accounting",
        "domain": "Business & Management",
        "suitable_for_streams": ["Commerce", "Science with Math", "Arts with Economics"],
        "courses": ["B.Com (Honours)", "B.Com in Accounting and Finance (BAF)", "BBA Finance", "Chartered Accountancy (CA - ICAI pathway)"],
        "careers": ["Chartered Accountant (CA)", "Financial Analyst", "Corporate Auditor", "Tax Consultant", "Cost Accountant"],
        "important_subjects": ["Advanced Financial Accounting", "Cost & Management Accounting", "Auditing & Assurance", "Direct & Indirect Taxation", "Corporate Law"],
        "duration": "3-4 Years (B.Com) / CA takes ~4.5 to 5 years alongside degree",
        "eligibility": "10+2 from a recognized board; Mathematics or Accountancy preferred for B.Com (Hons).",
        "entrance_exams": ["CA Foundation", "CUET UG", "CMA Foundation", "University Merit"],
        "salary_range": "₹5.0 LPA – ₹14 LPA (Qualified fresh CAs average ₹8-12 LPA with big 4 accounting firms)",
        "salary_notes": "CA qualifiers joining Big 4 (Deloitte, PwC, EY, KPMG) or investment firms earn competitive packages.",
        "further_study": ["Chartered Accountancy (Final)", "CFA (Chartered Financial Analyst)", "M.Com", "MBA Finance"],
        "why_match_keywords": ["finance", "accounting", "ca", "taxes", "audit", "money", "balance sheet", "commerce", "ledgers"]
    },
    {
        "id": 11,
        "category": "Banking & Investments",
        "domain": "Business & Management",
        "suitable_for_streams": ["Commerce", "Science with Math", "Arts with Economics"],
        "courses": ["B.Com Banking and Insurance", "B.Sc Finance", "BA Economics (Honours)", "BBA in Financial Markets"],
        "careers": ["Investment Banker", "Equity Research Analyst", "Wealth / Portfolio Manager", "Commercial Bank Probationary Officer (PO)", "Risk Analyst"],
        "important_subjects": ["Micro & Macroeconomics", "Security Analysis & Portfolio Management", "Financial Derivatives", "Money & Banking Systems", "Econometrics"],
        "duration": "3-4 Years",
        "eligibility": "10+2 with Mathematics/Business Mathematics preferred.",
        "entrance_exams": ["CUET UG", "IPMAT", "NPAT", "RBI Grade B / IBPS PO (post-graduation)"],
        "salary_range": "₹5.5 LPA – ₹20 LPA (Global investment banking analyst programs pay top scale)",
        "salary_notes": "Investment banking front-office roles offer substantial performance-linked bonuses.",
        "further_study": ["CFA (Chartered Financial Analyst)", "MBA in Finance (IIMs/Global)", "MS in Quantitative Finance"],
        "why_match_keywords": ["banking", "investments", "stocks", "wall street", "economics", "equity", "wealth", "trading", "finance"]
    },
    {
        "id": 12,
        "category": "Designing & Creativity",
        "domain": "Arts & Design",
        "suitable_for_streams": ["Any Stream (Arts, Science, Commerce)"],
        "courses": ["B.Des (Bachelor of Design)", "BFA (Bachelor of Fine Arts)", "B.Sc Animation & Multimedia", "BA Graphic Design"],
        "careers": ["UI/UX Designer", "Product Designer", "Graphic Designer", "Illustrator & Concept Artist", "Brand Identity Specialist"],
        "important_subjects": ["Design Fundamentals & Typography", "User Interface & Experience (UI/UX)", "Visual Storytelling", "Design Thinking & Prototyping", "Digital Illustration"],
        "duration": "4 Years (B.Des/BFA) / 3 Years (B.Sc)",
        "eligibility": "10+2 in any stream with creative aptitude and portfolio.",
        "entrance_exams": ["UCEED (IIT Bombay)", "NID DAT (National Institute of Design)", "NIFT Entrance Exam", "CUET UG"],
        "salary_range": "₹4.5 LPA – ₹16 LPA (Tech UI/UX and product designers earn high salaries rapidly)",
        "salary_notes": "Portfolio quality, user research capability, and design tooling mastery drive compensation.",
        "further_study": ["M.Des (Master of Design)", "MFA", "Master in Human-Computer Interaction (HCI)"],
        "why_match_keywords": ["design", "ui/ux", "drawing", "creativity", "art", "graphic design", "illustrations", "visuals", "sketching"]
    },
    {
        "id": 13,
        "category": "Fashion & Clothing",
        "domain": "Arts & Design",
        "suitable_for_streams": ["Any Stream (Arts, Science, Commerce)"],
        "courses": ["B.Des Fashion Design", "B.Sc Fashion Technology", "B.Fashion Design & Merchandising"],
        "careers": ["Fashion Designer", "Fashion Stylist", "Apparel Merchandiser", "Textile Designer", "Fashion PR & Brand Consultant"],
        "important_subjects": ["Garment Construction & Draping", "Textile Science & Fiber Study", "Fashion Illustration & CAD", "Trend Forecasting", "Fashion Marketing"],
        "duration": "4 Years (B.Des) / 3 Years (B.Sc)",
        "eligibility": "10+2 from any recognized board. Creative assessment and portfolio required.",
        "entrance_exams": ["NIFT Entrance Exam (GAT & CAT)", "NID DAT", "FDDI AIST"],
        "salary_range": "₹3.5 LPA – ₹10 LPA (can reach much higher with luxury couture labels or independent brands)",
        "salary_notes": "Entrepreneurial success and couture design can scale to high commercial rewards.",
        "further_study": ["M.Des in Fashion Design", "Master in Fashion Management (MFM)", "Apparel Tech Masters"],
        "why_match_keywords": ["fashion", "clothing", "apparel", "styling", "textiles", "trends", "modelling", "garments"]
    },
    {
        "id": 14,
        "category": "Architecture & Buildings",
        "domain": "Engineering & Built Environment",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Arch (Bachelor of Architecture)", "B.Plan (Bachelor of Planning)", "B.Tech Civil Engineering"],
        "careers": ["Architect", "Urban & Regional Planner", "Interior Architect", "Landscape Architect", "Civil Infrastructure Engineer"],
        "important_subjects": ["Architectural Design Studio", "Building Construction & Materials", "Structural Analysis", "History of Architecture", "Computer Aided Design (CAD & BIM)"],
        "duration": "5 Years (B.Arch) / 4 Years (B.Plan / B.Tech)",
        "eligibility": "10+2 with Physics, Chemistry & Mathematics with at least 50% aggregate, plus mandatory NATA / JEE Paper 2 qualification.",
        "entrance_exams": ["NATA (National Aptitude Test in Architecture)", "JEE Main Paper 2 (B.Arch/B.Planning)", "State Architecture CETs"],
        "salary_range": "₹4.0 LPA – ₹12 LPA (Junior Architect; independent practice potential is very high)",
        "salary_notes": "Council of Architecture (CoA) registration allows setting up private architectural practice.",
        "further_study": ["M.Arch (Urban Design, Sustainable Architecture)", "Master of Urban Planning (M.Plan)"],
        "why_match_keywords": ["architecture", "buildings", "construction", "interior design", "urban planning", "structures", "drawing", "floor plans"]
    },
    {
        "id": 15,
        "category": "Mechanical Machines",
        "domain": "Engineering & Technology",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Tech Mechanical Engineering", "B.Tech Mechatronics", "B.Tech Manufacturing Engineering"],
        "careers": ["Mechanical Design Engineer", "Production & Manufacturing Engineer", "Thermal Systems Analyst", "HVAC Design Specialist", "CAD/CAM Specialist"],
        "important_subjects": ["Thermodynamics & Heat Transfer", "Mechanics of Materials", "Kinematics & Dynamics of Machinery", "Fluid Mechanics", "Computer-Aided Manufacturing"],
        "duration": "4 Years",
        "eligibility": "10+2 with Physics, Chemistry and Mathematics.",
        "entrance_exams": ["JEE Main", "JEE Advanced", "BITSAT", "State CETs"],
        "salary_range": "₹4.5 LPA – ₹14 LPA (Heavy machinery, defense PSU, and aerospace manufacturing roles)",
        "salary_notes": "Opportunities across PSUs (BHEL, IOCL, ONGC) via GATE examination.",
        "further_study": ["M.Tech Mechanical / Thermal / Design", "MS in Mechanical Engineering abroad", "MBA Operations"],
        "why_match_keywords": ["mechanical", "machines", "engines", "manufacturing", "physics", "tools", "gears", "hardware"]
    },
    {
        "id": 16,
        "category": "Automobiles & Mobility",
        "domain": "Engineering & Technology",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Tech Automobile Engineering", "B.Tech Mechanical Engineering with EV Specialization", "B.Tech Motorsport Engineering"],
        "careers": ["Automotive Design Engineer", "Electric Vehicle (EV) Powertrain Engineer", "Vehicle Dynamics Specialist", "Safety & Crash Test Analyst", "Motorsport Engineer"],
        "important_subjects": ["Internal Combustion & EV Powertrains", "Vehicle Dynamics & Suspension", "Automotive Aerodynamics", "Battery Management Systems (BMS)", "Automotive Electronics"],
        "duration": "4 Years",
        "eligibility": "10+2 with Physics, Chemistry, and Mathematics.",
        "entrance_exams": ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "State CETs"],
        "salary_range": "₹4.5 LPA – ₹15 LPA (EV sector and automotive OEMs like Tata, Mahindra, Tesla, Mercedes)",
        "salary_notes": "Rapidly expanding EV and autonomous vehicle startups offer strong salaries.",
        "further_study": ["M.Tech Automotive Engineering", "MS in E-Mobility & Powertrains in Germany/USA"],
        "why_match_keywords": ["cars", "automobiles", "vehicles", "racing", "ev", "electric vehicles", "engines", "mobility", "bikes"]
    },
    {
        "id": 17,
        "category": "Robotics & Automation",
        "domain": "Engineering & Technology",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Tech Robotics and Automation", "B.Tech Mechatronics", "B.Tech Instrumentation & Control"],
        "careers": ["Robotics Engineer", "Industrial Automation Specialist", "Kinematics & Motion Control Engineer", "Drone Systems Engineer", "PLC Programmer"],
        "important_subjects": ["Robot Kinematics & Dynamics", "Embedded Microcontrollers (Arduino/ROS)", "Sensors & Actuators", "Industrial Automation & PLC", "Computer Vision for Robots"],
        "duration": "4 Years",
        "eligibility": "10+2 with Physics, Chemistry and Mathematics.",
        "entrance_exams": ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE"],
        "salary_range": "₹5.5 LPA – ₹18 LPA (High demand in robotics, defense tech, and warehouse automation)",
        "salary_notes": "Combines mechanical, electronics, and software skills in a modern multidisciplinary package.",
        "further_study": ["MS in Robotics", "M.Tech in Mechatronics", "Ph.D. in Autonomous Systems"],
        "why_match_keywords": ["robotics", "robots", "automation", "mechatronics", "sensors", "drones", "hardware programming", "circuits and code"]
    },
    {
        "id": 18,
        "category": "Electronics & Circuits",
        "domain": "Engineering & Technology",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Tech Electronics & Communication Engineering (ECE)", "B.Tech Electronics & Electrical Engineering (EEE)", "B.Sc Electronics"],
        "careers": ["VLSI Design Engineer", "Embedded Systems Developer", "Telecom Engineer", "Hardware Verification Engineer", "RF Engineer"],
        "important_subjects": ["Digital Electronics & Microprocessors", "Analog Circuits", "VLSI Design & Verilog", "Signals and Systems", "Communication Engineering"],
        "duration": "4 Years (B.Tech) / 3 Years (B.Sc)",
        "eligibility": "10+2 with Physics, Mathematics, and Chemistry.",
        "entrance_exams": ["JEE Main", "JEE Advanced", "BITSAT", "State CETs"],
        "salary_range": "₹5.0 LPA – ₹20 LPA (Semiconductor design firms like Qualcomm, Intel, Texas Instruments pay top packages)",
        "salary_notes": "India Semiconductor Mission is expanding chip design and fabrication investments exponentially.",
        "further_study": ["M.Tech VLSI & Microelectronics", "MS in Embedded Systems", "Ph.D. in Nanoelectronics"],
        "why_match_keywords": ["electronics", "chips", "circuits", "semiconductors", "vlsi", "hardware", "microcontrollers", "telecom"]
    },
    {
        "id": 19,
        "category": "Electrical Systems & Energy",
        "domain": "Engineering & Technology",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Tech Electrical Engineering", "B.Tech Electrical & Electronics Engineering (EEE)", "B.Tech Renewable Energy Engineering"],
        "careers": ["Power Systems Engineer", "Renewable Energy Consultant (Solar/Wind)", "Electrical Design Engineer", "Grid Automation Engineer", "Substation Manager"],
        "important_subjects": ["Electrical Machines & Transformers", "Power Systems Analysis", "Control Systems", "Power Electronics", "Renewable Energy Integration"],
        "duration": "4 Years",
        "eligibility": "10+2 with Physics, Mathematics and Chemistry.",
        "entrance_exams": ["JEE Main", "JEE Advanced", "State CETs"],
        "salary_range": "₹4.5 LPA – ₹14 LPA (Power grid corporations, renewable energy conglomerates)",
        "salary_notes": "PSU recruitment via GATE (PowerGrid, NTPC, NHPC) offers secure gazetted roles.",
        "further_study": ["M.Tech Power Systems / Renewable Energy", "MS in Sustainable Power"],
        "why_match_keywords": ["electrical", "power", "grid", "solar", "energy", "renewable", "generators", "transformers", "current"]
    },
    {
        "id": 20,
        "category": "Law & Justice",
        "domain": "Law & Governance",
        "suitable_for_streams": ["Any Stream (Arts, Commerce, Science)"],
        "courses": ["BA LLB (5-Year Integrated)", "BBA LLB (5-Year Integrated)", "B.Com LLB (5-Year Integrated)"],
        "careers": ["Corporate Lawyer", "Litigation Advocate", "Legal Advisor / In-House Counsel", "Judicial Magistrate (after PCS-J)", "Arbitration Specialist"],
        "important_subjects": ["Constitutional Law", "Law of Torts & Contracts", "Criminal Law (IPC/BNS)", "Corporate & Mercantile Law", "Intellectual Property Rights (IPR)"],
        "duration": "5 Years (Integrated) or 3 Years (after graduation)",
        "eligibility": "10+2 in any stream from a recognized board with minimum 45% aggregate.",
        "entrance_exams": ["CLAT (Common Law Admission Test)", "AILET (NLU Delhi)", "SLAT (Symbiosis)", "LSAT India", "MHCET Law"],
        "salary_range": "₹6.0 LPA – ₹18 LPA (Top National Law Universities place into tier-1 corporate law firms at ₹14-20 LPA)",
        "salary_notes": "Tier-1 law firms (Cyril Amarchand, Shardul Amarchand, Trilegal) offer premier entry packages.",
        "further_study": ["LLM (Master of Laws)", "Judicial Services Examination", "Ph.D. in International Law"],
        "why_match_keywords": ["law", "lawyer", "justice", "court", "legal", "constitution", "advocate", "rights", "arguments", "debate"]
    },
    {
        "id": 21,
        "category": "Politics & Government",
        "domain": "Law & Governance",
        "suitable_for_streams": ["Any Stream (Arts/Humanities preferred)"],
        "courses": ["BA Political Science (Honours)", "BA Public Administration", "BA International Relations & Diplomacy"],
        "careers": ["Civil Servant (IAS/IPS/IFS via UPSC)", "Public Policy Analyst", "Diplomatic Aide / Foreign Affairs Specialist", "Political Consultant / Campaign Strategist", "Think Tank Fellow"],
        "important_subjects": ["Political Theory & Ideologies", "Comparative Politics", "Indian Foreign Policy", "Public Policy Formulation", "International Relations & Treaties"],
        "duration": "3-4 Years",
        "eligibility": "10+2 from any stream.",
        "entrance_exams": ["CUET UG (for Delhi University, JNU, etc.)", "University Entrance Exams"],
        "salary_range": "₹4.0 LPA – ₹12 LPA (Private policy consulting; civil services structured by Govt pay bands)",
        "salary_notes": "Civil services officers receive government pay scales, allowances, housing, and administrative prestige.",
        "further_study": ["MA in Political Science / Public Policy", "Master of Public Administration (MPA)", "UPSC CSE Preparation"],
        "why_match_keywords": ["politics", "government", "ias", "upsc", "civil services", "diplomacy", "international relations", "policy", "governance"]
    },
    {
        "id": 22,
        "category": "Psychology & Human Behaviour",
        "domain": "Social Sciences",
        "suitable_for_streams": ["Any Stream (Arts/Humanities, Science PCB/PCM, Commerce)"],
        "courses": ["BA Psychology (Honours)", "B.Sc Psychology", "BA Sociology", "B.Sc Cognitive Science"],
        "careers": ["Counselling Psychologist (with Master's)", "Clinical Psychologist (with M.Phil/Ph.D.)", "Human Resources Specialist", "User Researcher", "Child & Educational Counsellor"],
        "important_subjects": ["General Psychology & Cognitive Processes", "Developmental Psychology", "Abnormal & Clinical Psychology", "Social Psychology", "Psychological Testing & Statistics"],
        "duration": "3-4 Years",
        "eligibility": "10+2 in any stream from a recognized board.",
        "entrance_exams": ["CUET UG", "University Entrance Tests"],
        "salary_range": "₹3.5 LPA – ₹9.0 LPA (Starting; independent clinical practice and corporate HR scale much higher with experience)",
        "salary_notes": "RCI (Rehabilitation Council of India) licensing required for clinical practice; requires Master's/Psy.D.",
        "further_study": ["MA / M.Sc Psychology", "M.Phil / Psy.D Clinical Psychology", "Ph.D. in Neuroscience"],
        "why_match_keywords": ["psychology", "human behaviour", "mind", "counselling", "therapy", "mental health", "listening", "empathy", "emotions"]
    },
    {
        "id": 23,
        "category": "Journalism & Media",
        "domain": "Media & Communication",
        "suitable_for_streams": ["Any Stream (Arts, Commerce, Science)"],
        "courses": ["BA Journalism & Mass Communication (BJMC)", "BA Digital Media", "B.Sc Electronic Media"],
        "careers": ["News Reporter / Investigative Journalist", "Digital Content Producer", "Anchor / News Presenter", "Public Relations (PR) Specialist", "Social Media Strategist"],
        "important_subjects": ["Reporting & Feature Writing", "Media Law & Ethics", "Broadcast Journalism (TV/Radio)", "Digital Media & Web Journalism", "Public Relations & Advertising"],
        "duration": "3 Years",
        "eligibility": "10+2 in any discipline with strong verbal and written communication.",
        "entrance_exams": ["CUET UG", "IIMC Entrance", "IPU CET", "Symbiosis SET"],
        "salary_range": "₹3.5 LPA – ₹9.0 LPA (Digital media networks and top television channels offer competitive pathways)",
        "salary_notes": "High growth potential in digital content platforms, podcasts, and corporate communications.",
        "further_study": ["Master of Mass Communication (MMC)", "MA in Investigative Journalism", "MBA in Media Management"],
        "why_match_keywords": ["journalism", "news", "reporting", "media", "anchor", "interviews", "press", "current affairs", "broadcasting"]
    },
    {
        "id": 24,
        "category": "Film, Direction & Photography",
        "domain": "Media & Communication",
        "suitable_for_streams": ["Any Stream"],
        "courses": ["BA Film Studies & Direction", "B.Sc Photography", "B.Sc Animation & VFX", "Bachelor of Visual Arts (Film)"],
        "careers": ["Film Director / Assistant Director", "Cinematographer (Director of Photography)", "Video Editor & Colorist", "Commercial Photographer", "VFX & Motion Graphics Artist"],
        "important_subjects": ["Screenplay Writing & Storyboarding", "Cinematography & Lighting Techniques", "Sound Design & Audio Engineering", "Film Editing (Premiere, DaVinci)", "Direction Aesthetics"],
        "duration": "3-4 Years",
        "eligibility": "10+2 in any stream. Aptitude test and creative portfolio/interview.",
        "entrance_exams": ["FTII JET (Film & Television Institute of India)", "SRFTI Entrance", "Whistling Woods Entrance"],
        "salary_range": "₹3.5 LPA – ₹12 LPA (Highly project-based with limitless upside for acclaimed directors and cinematographers)",
        "salary_notes": "Freelance rates and production contracts determine earnings in the creative entertainment sector.",
        "further_study": ["PG Diploma in Film Direction (FTII / SRFTI)", "Master of Fine Arts (Cinematography)"],
        "why_match_keywords": ["film", "movies", "photography", "camera", "direction", "cinematography", "video editing", "visual storytelling"]
    },
    {
        "id": 25,
        "category": "Agriculture & Farming",
        "domain": "Nature & Sciences",
        "suitable_for_streams": ["Science (PCB)", "Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Sc (Honours) Agriculture", "B.Sc Horticulture", "B.Tech Agricultural Engineering", "B.Sc Forestry"],
        "careers": ["Agricultural Research Scientist", "Agronomist", "Farm & Plantation Manager", "Seed & Fertilizer Quality Controller", "Agricultural Officer in Banks/Govt"],
        "important_subjects": ["Agronomy & Crop Physiology", "Soil Science & Agricultural Chemistry", "Genetics & Plant Breeding", "Plant Pathology & Entomology", "Agricultural Economics"],
        "duration": "4 Years",
        "eligibility": "10+2 with Physics, Chemistry, Biology and/or Mathematics with minimum 50%.",
        "entrance_exams": ["CUET UG (ICAR AIEEA pathway)", "State Agriculture CETs (e.g. KEAM, AP EAPCET, MHT-CET)"],
        "salary_range": "₹4.0 LPA – ₹10 LPA (Agri-tech startups and corporate farming enterprises pay attractive scales)",
        "salary_notes": "IBPS Agriculture Field Officer (AFO) and state agriculture department jobs offer government security.",
        "further_study": ["M.Sc Agriculture", "MBA in Agribusiness Management (IIM Ahmedabad FABM)", "Ph.D. in Agronomy"],
        "why_match_keywords": ["agriculture", "farming", "crops", "plants", "soil", "horticulture", "agritech", "organic", "greenery"]
    },
    {
        "id": 26,
        "category": "Environment & Nature",
        "domain": "Nature & Sciences",
        "suitable_for_streams": ["Science (PCB)", "Science (PCMB)", "Science (PCM)"],
        "courses": ["B.Sc Environmental Science", "B.Sc Forestry", "B.Sc Wildlife Biology & Conservation"],
        "careers": ["Environmental Scientist", "Wildlife Conservationist", "Forest Officer (IFS)", "Sustainability Consultant", "Environmental Impact Assessor"],
        "important_subjects": ["Ecology & Biodiversity Conservation", "Environmental Impact Assessment (EIA)", "Pollution Control Technologies", "Climate Change Dynamics", "Environmental Laws"],
        "duration": "3-4 Years",
        "eligibility": "10+2 with Science stream (PCB / PCM).",
        "entrance_exams": ["CUET UG", "State University Entrances", "UPSC IFS (post-graduation)"],
        "salary_range": "₹3.8 LPA – ₹9.5 LPA (ESG and sustainability divisions in multinational corporations offer growing pay)",
        "salary_notes": "Corporate ESG (Environmental, Social, Governance) compliance has elevated private sector demand.",
        "further_study": ["M.Sc Environmental Science", "Indian Forest Service (IFS via UPSC)", "Ph.D. in Climate Studies"],
        "why_match_keywords": ["environment", "nature", "wildlife", "conservation", "climate change", "ecology", "trees", "sustainability", "forests"]
    },
    {
        "id": 27,
        "category": "Animals & Veterinary Science",
        "domain": "Nature & Sciences",
        "suitable_for_streams": ["Science (PCB)", "Science (PCMB)"],
        "courses": ["B.V.Sc & AH (Bachelor of Veterinary Science & Animal Husbandry)", "B.Sc Zoology", "B.Sc Animal Science"],
        "careers": ["Veterinary Doctor / Surgeon", "Zoo & Wildlife Veterinarian", "Livestock Production Officer", "Animal Welfare Scientist", "Pet Healthcare Specialist"],
        "important_subjects": ["Veterinary Anatomy & Physiology", "Veterinary Pharmacology & Surgery", "Animal Genetics & Breeding", "Livestock Production Management", "Veterinary Pathology"],
        "duration": "5.5 Years including 1 Year Internship (B.V.Sc & AH) / 3 Years (B.Sc)",
        "eligibility": "10+2 with Physics, Chemistry, Biology, and English with minimum 50% marks. NEET UG qualification.",
        "entrance_exams": ["NEET UG (Mandatory for veterinary quota admissions under VCI)", "State Veterinary Entrances"],
        "salary_range": "₹5.0 LPA – ₹12 LPA (Pet healthcare clinics in urban metros offer substantial income)",
        "salary_notes": "Private veterinary clinics and pet hospital chains in metro cities provide strong remuneration.",
        "further_study": ["M.V.Sc (Veterinary Surgery, Medicine)", "Ph.D. in Veterinary Sciences"],
        "why_match_keywords": ["animals", "veterinary", "pets", "dogs", "wildlife", "zoology", "animal healthcare", "vet", "fauna"]
    },
    {
        "id": 28,
        "category": "Hospitality & Hotels",
        "domain": "Services & Hospitality",
        "suitable_for_streams": ["Any Stream (Arts, Commerce, Science)"],
        "courses": ["BHM (Bachelor of Hotel Management)", "B.Sc Hospitality and Hotel Administration", "B.Sc Hotel Management"],
        "careers": ["Hotel General Manager", "Front Office Manager", "Food & Beverage Director", "Luxury Resort Operations Head", "Banquet & Event Manager"],
        "important_subjects": ["Food & Beverage Service", "Front Office Operations", "Housekeeping Management", "Hospitality Accounting", "Hotel Engineering & Maintenance"],
        "duration": "3-4 Years",
        "eligibility": "10+2 in any stream with English as a compulsory subject.",
        "entrance_exams": ["NCHMCT JEE (National Council for Hotel Management Joint Entrance Exam)"],
        "salary_range": "₹3.5 LPA – ₹9.0 LPA (Luxury 5-star hotel management trainee programs lead to rapid leadership)",
        "salary_notes": "Management Training (MT) programs in Taj, Marriott, Oberoi lead to accelerated managerial salaries.",
        "further_study": ["Master in Hospitality Management (MHM)", "MBA in Hospitality & Tourism"],
        "why_match_keywords": ["hospitality", "hotels", "resorts", "guest service", "front office", "luxury", "events", "tourism"]
    },
    {
        "id": 29,
        "category": "Tourism & Travelling",
        "domain": "Services & Hospitality",
        "suitable_for_streams": ["Any Stream"],
        "courses": ["BBA in Tourism and Travel Management", "BA Travel and Tourism", "Bachelor of Tourism Studies (BTS)"],
        "careers": ["Travel Consultant / Itinerary Planner", "Tourism Operations Manager", "Destination Marketing Head", "Tour Director / International Escort", "Adventure Tourism Specialist"],
        "important_subjects": ["Tourism Principles & Practices", "International Tourism Geography", "Ticketing & GDS Systems (Amadeus)", "Destination Marketing", "Eco-tourism & Sustainable Travel"],
        "duration": "3 Years",
        "eligibility": "10+2 from any recognized board.",
        "entrance_exams": ["CUET UG", "University Entrance Exams"],
        "salary_range": "₹3.2 LPA – ₹8.5 LPA (Global travel agencies, luxury cruise liners, and destination management companies)",
        "salary_notes": "International cruise lines and luxury outbound travel firms offer foreign currency earnings.",
        "further_study": ["Master of Tourism Administration (MTA)", "MBA in Tourism"],
        "why_match_keywords": ["travel", "tourism", "travelling", "exploring", "destinations", "vacations", "trips", "culture", "geography"]
    },
    {
        "id": 30,
        "category": "Sports & Fitness",
        "domain": "Sports & Physical Sciences",
        "suitable_for_streams": ["Any Stream"],
        "courses": ["B.P.Ed (Bachelor of Physical Education)", "B.Sc Sports Science", "BBA Sports Management"],
        "careers": ["Sports Coach / Athletic Trainer", "Fitness Director / Strength & Conditioning Coach", "Sports Event Manager", "Sports Analyst & Scout", "Physical Education Instructor"],
        "important_subjects": ["Anatomy & Exercise Physiology", "Kinesiology & Biomechanics", "Sports Psychology & Nutrition", "Sports Training Methodology", "Sports Management & Marketing"],
        "duration": "3-4 Years",
        "eligibility": "10+2 from any recognized board; physical fitness test may be conducted.",
        "entrance_exams": ["CUET UG", "Physical Fitness & Sports Trials", "University Entrances"],
        "salary_range": "₹3.5 LPA – ₹11 LPA (High income for elite fitness trainers, sports leagues like IPL/ISL managers)",
        "salary_notes": "Franchise sports leagues (cricket, football, kabaddi) have opened commercial management careers.",
        "further_study": ["M.P.Ed", "M.Sc Sports Science / Biomechanics", "MBA in Sports Management"],
        "why_match_keywords": ["sports", "fitness", "athletics", "gym", "games", "exercise", "coaching", "football", "cricket"]
    },
    {
        "id": 31,
        "category": "Defence & Military Services",
        "domain": "Defence & Public Safety",
        "suitable_for_streams": ["Science (PCM) for Air Force/Navy; Any Stream for Army"],
        "courses": ["National Defence Academy (NDA Pathway)", "BA / B.Sc / B.Tech Defence Studies via NDA", "Technical Entry Scheme (TES)"],
        "careers": ["Commissioned Officer in Indian Army (Lieutenant)", "Indian Navy Officer (Sub-Lieutenant)", "Indian Air Force Officer (Flying Officer)", "Defence Research Analyst"],
        "important_subjects": ["Military History & Strategy", "Tactical Leadership & Fieldcraft", "Physics & Ballistics", "Geopolitics & Military Law", "Combat Physical Training"],
        "duration": "3 Years NDA training + 1 Year IMA/INA/AFA specialized training",
        "eligibility": "Unmarried male & female candidates who passed 10+2. Age: 16.5 to 19.5 years. Physics & Math required for Air Force and Navy.",
        "entrance_exams": ["NDA Examination (conducted by UPSC twice a year) followed by SSB Interview"],
        "salary_range": "₹6.8 LPA – ₹18 LPA (Lieutenant starting basic pay in Level 10 + Military Service Pay + Allowances)",
        "salary_notes": "Includes free medical care, defense housing, canteen facilities, pensions, and high social honor.",
        "further_study": ["Defence Services Staff College (DSSC)", "National Defence College (NDC)", "M.Sc Defence & Strategic Studies"],
        "why_match_keywords": ["defence", "military", "army", "navy", "air force", "nda", "soldier", "patriotism", "officer", "combat", "discipline"]
    },
    {
        "id": 32,
        "category": "Aviation & Flying",
        "domain": "Aviation & Aerospace",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)"],
        "courses": ["Commercial Pilot License (CPL Training)", "B.Sc Aviation", "B.Tech Aeronautical Engineering", "BBA Airport Management"],
        "careers": ["Commercial Airline Pilot (First Officer)", "Flight Operations Manager", "Aeronautical Engineer", "Air Traffic Controller (ATC)", "Aircraft Maintenance Engineer (AME)"],
        "important_subjects": ["Air Navigation & Flight Planning", "Aviation Meteorology", "Air Regulations & Radiotelephony", "Aircraft Systems & Instruments", "Aerodynamics"],
        "duration": "1.5 – 2 Years (for CPL with 200 flying hours) / 3 Years (B.Sc Aviation) / 4 Years (B.Tech)",
        "eligibility": "10+2 with Physics and Mathematics (minimum 50%). Class 1 & 2 Medical Fitness clearance as per DGCA.",
        "entrance_exams": ["Cadet Pilot Program Entrances (IndiGo, Air India)", "DGCA Module Exams", "JEE Main (for B.Tech Aeronautical)"],
        "salary_range": "₹12 LPA – ₹36 LPA (Commercial airline first officers start around ₹12-18 LPA; Captains earn ₹35-60+ LPA)",
        "salary_notes": "Initial CPL flight training requires substantial capital investment (₹35-60 Lakhs) but yields high salaries.",
        "further_study": ["ATPL (Airline Transport Pilot License)", "Type Rating (Airbus A320 / Boeing 737)", "M.Sc Aviation Safety"],
        "why_match_keywords": ["aviation", "flying", "pilot", "aircraft", "aeroplane", "airports", "cockpit", "flights", "sky"]
    },
    {
        "id": 33,
        "category": "Teaching & Education",
        "domain": "Education & Social Sector",
        "suitable_for_streams": ["Any Stream"],
        "courses": ["B.El.Ed (Bachelor of Elementary Education - 4 Yrs)", "Integrated BA B.Ed / B.Sc B.Ed (4 Yrs)", "B.Ed (after completing graduation)"],
        "careers": ["School Teacher (PRT/TGT/PGT)", "Educational Content Creator / EdTech Curriculum Designer", "Academic Coordinator", "Special Educator", "School Administrator"],
        "important_subjects": ["Child Development & Educational Psychology", "Pedagogy of School Subjects", "Curriculum Design & Evaluation", "Inclusive Education", "Educational Technology & Classroom Management"],
        "duration": "4 Years (Integrated) / 2 Years (B.Ed post-degree)",
        "eligibility": "10+2 with minimum 50% for Integrated 4-year programs.",
        "entrance_exams": ["CUET UG (for integrated B.Ed)", "State B.Ed CETs", "CTET / State TET (for teaching eligibility)"],
        "salary_range": "₹3.5 LPA – ₹8.5 LPA (Central Government schools like KVS/NVS pay Level 7-8 scales ~₹6-9 LPA)",
        "salary_notes": "EdTech platforms and international IB/Cambridge curriculum schools offer high packages for subject matter experts.",
        "further_study": ["M.Ed (Master of Education)", "MA in Education", "Ph.D. in Educational Pedagogy"],
        "why_match_keywords": ["teaching", "education", "teacher", "pedagogy", "school", "kids", "curriculum", "explaining", "learning"]
    },
    {
        "id": 34,
        "category": "Food Technology & Nutrition",
        "domain": "Sciences & Healthcare",
        "suitable_for_streams": ["Science (PCB)", "Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Tech Food Technology", "B.Sc Nutrition & Dietetics", "B.Sc Food Science & Quality Control"],
        "careers": ["Food Technologist / Processing Scientist", "Clinical Dietitian / Nutritionist", "Food Safety & Quality Assurance Officer", "Product Development Specialist (FMCG)", "Sensory Scientist"],
        "important_subjects": ["Food Chemistry & Analysis", "Food Processing & Preservation", "Clinical Nutrition & Dietetics", "Food Microbiology & Safety", "FSSAI Regulations & Quality Audits"],
        "duration": "4 Years (B.Tech) / 3 Years (B.Sc)",
        "eligibility": "10+2 with Physics, Chemistry and Biology/Mathematics.",
        "entrance_exams": ["CUET UG", "State Engineering/Pharmacy CETs", "CFTRI Entrance (for PG)"],
        "salary_range": "₹3.8 LPA – ₹10 LPA (Multinational FMCG brands like Nestlé, ITC, Britannia, PepsiCo)",
        "salary_notes": "High demand in healthy lifestyle consulting, corporate wellness, and consumer packaged food innovation.",
        "further_study": ["M.Sc Food Science / Clinical Nutrition", "M.Tech Food Processing", "Registered Dietitian (RD) Licensure"],
        "why_match_keywords": ["food", "nutrition", "diet", "healthy", "food science", "dietitian", "processing", "nutrients", "organic food"]
    },
    {
        "id": 35,
        "category": "Cooking & Culinary Arts",
        "domain": "Services & Hospitality",
        "suitable_for_streams": ["Any Stream"],
        "courses": ["B.Sc Culinary Arts", "Bachelor of Hotel Management (Culinary Specialization)", "Diploma in Professional Culinary & Bakery Arts"],
        "careers": ["Executive Chef", "Pastry / Bakery Chef", "Sous Chef", "Food Stylist & Consultant", "Restaurateur / Cloud Kitchen Owner"],
        "important_subjects": ["Classical & Contemporary Cookery", "Baking & Confectionery", "Kitchen Operations & Kitchen Safety", "Gastronomy & Flavor Pairing", "Menu Engineering & Food Costing"],
        "duration": "3 Years",
        "eligibility": "10+2 in any stream from a recognized educational board.",
        "entrance_exams": ["NCHMCT JEE", "Culinary Institute Entrances (IHM Aurangabad, Culinary Academy of India)"],
        "salary_range": "₹3.5 LPA – ₹12 LPA (International 5-star hotels, luxury cruise ships, and celebrity restaurants)",
        "salary_notes": "International culinary careers and luxury cruise hospitality offer high tax-free packages.",
        "further_study": ["Post Graduate Diploma in Advanced Culinary Arts", "Master in International Hospitality"],
        "why_match_keywords": ["cooking", "culinary", "chef", "baking", "food preparation", "kitchen", "restaurant", "recipes", "pastry"]
    },
    {
        "id": 36,
        "category": "Skilled Trades, Mechatronics & Technical Repair",
        "domain": "Technical & Vocational",
        "suitable_for_streams": ["Any Stream (Class 10 or 12 pass)"],
        "courses": ["Diploma in Mechanical / Electrical / Automobile Engineering (Polytechnic)", "ITI Electrician / Fitter / Welder / Machinist", "Advanced Diploma in CNC Programming"],
        "careers": ["Senior Industrial Technician", "CNC Machine Operator & Programmer", "Precision Tool Maker", "Plant Maintenance Supervisor", "Automotive Diagnostic Technician"],
        "important_subjects": ["Engineering Drawing & Blueprints", "Workshop Technology & Machine Tools", "Electrical Circuit Repair & Wiring", "Industrial Safety Standards", "Preventive Maintenance"],
        "duration": "3 Years (Polytechnic Diploma) / 1-2 Years (ITI)",
        "eligibility": "10th or 12th pass from any recognized board.",
        "entrance_exams": ["State Polytechnic Joint Entrance Exams (JEECUP, POLYCET)", "Direct Merit Admission"],
        "salary_range": "₹2.8 LPA – ₹6.5 LPA (Can scale up through lateral entry into 2nd year B.Tech or overseas trades in Germany/Gulf)",
        "salary_notes": "Skilled technicians with high craftsmanship can migrate easily via global vocational schemes (e.g., German Dual VET).",
        "further_study": ["Lateral Entry into B.Tech (Direct 2nd Year)", "Advanced Industrial Certifications"],
        "why_match_keywords": ["repair", "machines", "tools", "hands-on", "technician", "electrician", "mechanic", "practical work", "fixing"]
    },
    {
        "id": 37,
        "category": "Statistics & Data Science",
        "domain": "Pure Sciences & Analytics",
        "suitable_for_streams": ["Science with Math", "Commerce with Math"],
        "courses": ["B.Stat (Bachelor of Statistics - ISI)", "B.Sc Statistics", "B.Sc Data Science", "B.Sc Applied Statistics and Analytics"],
        "careers": ["Statistical Analyst", "Business Intelligence (BI) Developer", "Market Research Analyst", "Actuary (with Actuarial exams)", "Risk Modeling Specialist"],
        "important_subjects": ["Probability & Theoretical Statistics", "Sample Surveys & Design of Experiments", "Statistical Quality Control", "Time Series Analysis & Forecasting", "R & Python for Data Analytics"],
        "duration": "3-4 Years",
        "eligibility": "10+2 with Mathematics or Statistics as a core subject.",
        "entrance_exams": ["Indian Statistical Institute (ISI) Admission Test", "CUET UG", "University Entrances"],
        "salary_range": "₹5.5 LPA – ₹20 LPA (ISI graduates receive premier placements in hedge funds and tech firms)",
        "salary_notes": "Actuaries who clear multiple Institute of Actuaries of India (IAI) papers earn high industry compensation.",
        "further_study": ["M.Stat (Master of Statistics)", "M.Sc Data Science", "Actuarial Science Fellowship"],
        "why_match_keywords": ["statistics", "data", "probabilities", "graphs", "trends", "analysis", "numbers", "predictions", "analytics"]
    },
    {
        "id": 38,
        "category": "Languages & Literature",
        "domain": "Humanities & Linguistics",
        "suitable_for_streams": ["Any Stream (Arts/Humanities, Commerce, Science)"],
        "courses": ["BA (Honours) English Literature", "BA Foreign Languages (German, French, Spanish, Japanese, Mandarin)", "BA Linguistics"],
        "careers": ["Foreign Language Specialist / Translator", "Bilingual Corporate Communications Lead", "Professional Copywriter & Editor", "Cross-Cultural Consultant", "Language Educator"],
        "important_subjects": ["Phonetics & Morphology", "History of World Literature & Literary Theory", "Advanced Syntax & Grammar", "Translation & Interpretation Techniques", "Cultural Studies"],
        "duration": "3-4 Years",
        "eligibility": "10+2 in any stream from a recognized board.",
        "entrance_exams": ["CUET UG (for Delhi University, JNU, EFLU)", "University Entrances"],
        "salary_range": "₹4.0 LPA – ₹14 LPA (Foreign language specialists in Japanese, German, or Mandarin command lucrative corporate pay)",
        "salary_notes": "MNCs, embassies, and tech translation operations pay premium retainers for certified foreign linguists (JLPT N2/N1, DELF B2/C1).",
        "further_study": ["MA in English / Foreign Linguistics", "Diplomas in Simultaneous Interpretation", "Ph.D. in Literary Studies"],
        "why_match_keywords": ["languages", "literature", "english", "writing", "reading", "books", "grammar", "foreign languages", "german", "french", "stories"]
    },
    {
        "id": 39,
        "category": "Social Work & Community Development",
        "domain": "Education & Social Sector",
        "suitable_for_streams": ["Any Stream"],
        "courses": ["BSW (Bachelor of Social Work)", "BA Sociology", "BA Rural Development & Governance"],
        "careers": ["NGO Program Coordinator", "Corporate Social Responsibility (CSR) Manager", "Community Development Officer", "Human Rights Campaigner", "Youth Welfare Worker"],
        "important_subjects": ["Social Work Philosophy & Methods", "Community Organization & Social Action", "Social Policy & Welfare Administration", "Human Rights & Social Legislation", "Fieldwork Practicum"],
        "duration": "3-4 Years",
        "eligibility": "10+2 from any recognized board.",
        "entrance_exams": ["CUET UG", "TISS BAT (Tata Institute of Social Sciences)"],
        "salary_range": "₹3.5 LPA – ₹8.5 LPA (Corporate CSR wings and international agencies like UN/UNICEF pay higher tiers)",
        "salary_notes": "Corporate CSR mandates in India have channeled significant funding and leadership roles into social development.",
        "further_study": ["MSW (Master of Social Work)", "MA in Development Studies (TISS, Azim Premji University)"],
        "why_match_keywords": ["social work", "helping", "ngo", "community", "society", "rural development", "charity", "human rights", "volunteering"]
    },
    {
        "id": 40,
        "category": "Geology & Earth Sciences",
        "domain": "Nature & Sciences",
        "suitable_for_streams": ["Science (PCM)", "Science (PCMB)"],
        "courses": ["B.Sc Geology", "B.Sc Earth Sciences", "Integrated M.Sc Applied Geology (IITs)"],
        "careers": ["Exploration Geologist (ONGC, Coal India, GSI)", "Hydrogeologist / Groundwater Specialist", "Mining Geologist", "Geotechnical Site Engineer", "Remote Sensing & GIS Analyst"],
        "important_subjects": ["Physical Geology & Geomorphology", "Mineralogy & Crystallography", "Structural Geology & Plate Tectonics", "Stratigraphy & Paleontology", "Economic Geology & Petrology"],
        "duration": "3-4 Years (B.Sc) / 5 Years (Integrated M.Sc)",
        "eligibility": "10+2 with Physics, Chemistry and Mathematics/Biology.",
        "entrance_exams": ["CUET UG", "IIT JEE Advanced (for Integrated Geology at IIT Kharagpur/ISM Dhanbad)", "State University Entrances"],
        "salary_range": "₹5.0 LPA – ₹15 LPA (Mining multinationals and PSU energy corporations like ONGC/GSI)",
        "salary_notes": "Geological Survey of India (GSI) recruitment via UPSC Combined Geo-Scientist Exam provides Class-1 gazetted ranks.",
        "further_study": ["M.Sc / M.Tech Applied Geology", "UPSC Geo-Scientist Exam", "Ph.D. in Geophysics"],
        "why_match_keywords": ["geology", "earth", "rocks", "minerals", "mining", "fossils", "mountains", "geography", "oil exploration", "groundwater"]
    }
]

def get_class_10_streams() -> List[Dict[str, Any]]:
    return CLASS_10_STREAMS

def get_class_12_categories() -> List[Dict[str, Any]]:
    return CLASS_12_CATEGORIES

def get_category_by_id(cat_id: int) -> Dict[str, Any]:
    for cat in CLASS_12_CATEGORIES:
        if cat["id"] == cat_id:
            return cat
    return None

def get_stream_by_id(stream_id: str) -> Dict[str, Any]:
    for stream in CLASS_10_STREAMS:
        if stream["id"] == stream_id:
            return stream
    return None
