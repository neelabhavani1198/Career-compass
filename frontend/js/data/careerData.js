/**
 * Career Compass Client-side Data Mirror
 * Allows immediate offline search, filtering, and inspection of all 40 categories & 5 streams.
 */

window.Career Compass_DATA = window.CAREER_COMPASS_DATA = {
  class10Streams: [
    {
      id: "science-pcm",
      name: "Science (PCM)",
      tagline: "Physics, Chemistry & Mathematics",
      domain: "Science & Engineering",
      suitable_interests: ["Technology", "Engineering", "Mathematics", "Coding", "Robotics", "Aviation", "Architecture", "Logical Problem Solving"],
      main_subjects: ["Physics", "Chemistry", "Mathematics", "English", "Informatics Practices / Computer Science"],
      future_courses: ["B.Tech / B.E", "B.Arch", "B.Sc Physics / Mathematics", "B.Sc Data Science & AI", "BCA", "Commercial Pilot Training", "NDA"],
      career_opportunities: ["Software Engineer", "Aerospace Engineer", "Mechanical / Civil Engineer", "Data Scientist", "Commercial Pilot", "Defence Officer"],
      advantages: [
        "Maximum career flexibility with open doors to all technical, scientific, and even commerce/arts careers later.",
        "Strong foundation in quantitative, logical, and analytical reasoning skills.",
        "High availability of premier engineering institutes (IITs, NITs, BITS) across India."
      ],
      subjects_needing_attention: [
        "Advanced Mathematics (Calculus, Coordinate Geometry, Vectors) requires daily practice.",
        "Physics requires deep conceptual comprehension rather than rote learning."
      ],
      academic_rigor: "High",
      board_notes: "Available across CBSE, ICSE, and all State Boards."
    },
    {
      id: "science-pcb",
      name: "Science (PCB)",
      tagline: "Physics, Chemistry & Biology",
      domain: "Healthcare & Life Sciences",
      suitable_interests: ["Medicine", "Healthcare", "Biology", "Human Anatomy", "Genetics", "Pharmaceuticals", "Dentistry", "Veterinary Care"],
      main_subjects: ["Physics", "Chemistry", "Biology (Botany & Zoology)", "English", "Biotechnology / Physical Education"],
      future_courses: ["MBBS", "BDS", "BAMS / BHMS", "B.Pharm / Pharm.D", "B.Sc Nursing", "B.V.Sc & AH", "B.Sc Biotechnology / Microbiology"],
      career_opportunities: ["Doctor / Specialized Surgeon", "Dentist", "Pharmacist / Clinical Researcher", "Biotechnologist", "Veterinary Doctor"],
      advantages: [
        "Direct pathway to noble, high-impact, and recession-resilient healthcare careers.",
        "Fascinating understanding of life processes, human physiology, and molecular biology.",
        "Expansive emerging research fields in genetics, immunotherapy, and bio-pharmaceuticals."
      ],
      subjects_needing_attention: [
        "Extensive memorization and retention of biological diagrams and biochemical pathways.",
        "Physics numerical problem-solving often proves challenging for biology enthusiasts and needs equal dedication."
      ],
      academic_rigor: "High",
      board_notes: "Compulsory for NEET-UG aspirants."
    },
    {
      id: "science-pcmb",
      name: "Science (PCMB)",
      tagline: "Physics, Chemistry, Mathematics & Biology",
      domain: "Dual Intersectional Sciences",
      suitable_interests: ["Dual Engineering & Medical interests", "Biomedical Engineering", "Biotechnology", "Bioinformatics", "Neuroscience"],
      main_subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
      future_courses: ["B.Tech Biomedical Engineering", "MBBS / BDS", "B.Tech Computer Science", "B.Sc Biophysics / Biochemistry", "IISER / NISER Programs"],
      career_opportunities: ["Biomedical Engineer", "Bioinformatics Scientist", "Healthcare AI Specialist", "Medical Doctor or Biotech Researcher"],
      advantages: [
        "Ultimate academic flexibility: eligible for both NEET and JEE entrance examinations.",
        "Ideal foundation for modern intersectional sciences (Nanotechnology, Neural Engineering, Genetic Algorithms).",
        "Never closes a door to either engineering or medical sciences."
      ],
      subjects_needing_attention: [
        "Significantly higher study workload and pressure managing both intensive Mathematics and detailed Biology.",
        "Demands disciplined time-management to avoid burnout."
      ],
      academic_rigor: "Very High",
      board_notes: "Not all schools offer PCMB; check with your school's elective options."
    },
    {
      id: "commerce",
      name: "Commerce (with/without Mathematics)",
      tagline: "Accountancy, Business Studies & Economics",
      domain: "Business & Finance",
      suitable_interests: ["Business", "Banking", "Finance", "Stock Markets", "Entrepreneurship", "Corporate Management", "Economics", "Investments"],
      main_subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics or Informatics Practices"],
      future_courses: ["B.Com (Honours)", "BBA / BMS", "Chartered Accountancy (CA)", "CS / CMA", "BA Economics (Honours)", "Integrated BBA-MBA (IPMAT)"],
      career_opportunities: ["Chartered Accountant (CA)", "Investment Banker", "Management Consultant", "Corporate Financial Analyst", "Fintech Entrepreneur"],
      advantages: [
        "Direct practical application to how corporations, markets, and global economies function.",
        "Prestigious professional credentials (CA, CFA, CMA) can be pursued concurrently or right after 12th.",
        "Excellent balance of conceptual theory, case studies, and quantitative skills."
      ],
      subjects_needing_attention: [
        "Accountancy requires high precision, ledger accuracy, and systematic posting principles.",
        "Economics requires grasp of mathematical models, graphs, and macroeconomic indicators."
      ],
      academic_rigor: "Moderate to High",
      board_notes: "Taking Mathematics or Applied Mathematics is strongly recommended for top colleges and finance majors."
    },
    {
      id: "arts-humanities",
      name: "Arts / Humanities",
      tagline: "History, Political Science, Psychology & Sociology",
      domain: "Humanities & Social Sciences",
      suitable_interests: ["Law & Justice", "Politics & Public Policy", "Psychology & Human Behaviour", "Civil Services (UPSC)", "Journalism & Media", "Creative Writing"],
      main_subjects: ["History / Geography", "Political Science", "Psychology / Sociology", "English Literature", "Legal Studies / Fine Arts"],
      future_courses: ["BA LLB (5-Year Law - CLAT)", "BA Honours in Political Science / Psychology", "BA Journalism & Mass Communication (BJMC)", "Bachelor of Design (B.Des)", "Bachelor of Social Work (BSW)"],
      career_opportunities: ["Civil Servant / Diplomat (IAS/IPS/IFS)", "Corporate Lawyer / Advocate", "Counselling / Clinical Psychologist", "Investigative Journalist / Media Director", "Public Policy Analyst"],
      advantages: [
        "Fosters superior critical thinking, persuasive writing, cultural empathy, and rhetorical skills.",
        "Strongest academic syllabus alignment with the UPSC Civil Services Examination and Law entrance tests.",
        "Vast multidisciplinary scope spanning modern media, mental health, design, and international affairs."
      ],
      subjects_needing_attention: [
        "Demands extensive long-form essay writing, critical reading, and analytical synthesis of historical/social debates.",
        "Requires proactive career structuring as career paths are broad."
      ],
      academic_rigor: "Moderate to High",
      board_notes: "Schools offer diverse elective combinations including Legal Studies, Psychology, and Media Studies."
    }
  ],

  class12Domains: [
    "All Domains",
    "Technology & Computing",
    "Medical & Healthcare",
    "Pure Sciences & Analytics",
    "Business & Management",
    "Engineering & Built Environment",
    "Arts & Design",
    "Law & Governance",
    "Media & Communication",
    "Nature & Sciences",
    "Services & Hospitality",
    "Defence & Aviation",
    "Education & Social Sector"
  ]
};
