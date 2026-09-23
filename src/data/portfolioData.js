/**
 * Portfolio Data Configuration for Prashanth Thammali
 * Updated with exact details from Prashanth's official resume
 */

export const personalInfo = {
  name: "Prashanth Thammali",
  shortName: "Prashanth",
  tagline: "CSE (AI & ML) Student & Aspiring Software Engineer",
  roles: [
    "CSE (AI & ML) Undergraduate",
    "AI & Machine Learning Developer",
    "Full-Stack Web Developer",
    "Generative AI & LLM Enthusiast",
  ],
  bio: "Enthusiastic Computer Science and Engineering (AI & ML) student with a strong interest in Full Stack Development and Artificial Intelligence. Passionate about creating responsive, user-friendly websites and developing freelance web solutions for individuals and businesses. Seeking opportunities to apply my skills in frontend and backend development, databases, and AI/ML while gaining practical experience and contributing to real-world projects.",
  location: "Hyderabad, India",
  email: "thammaliprashant295@gmail.com",
  phone: "+91 6301235420",
  resumePath: "/resume.pdf",
  expectedGraduation: "2027",
  cgpa: "7.84 / 10",
  socialLinks: {
    github: "https://github.com/Thammaliprashanth18",
    linkedin: "https://www.linkedin.com/in/prashanth-thammali-a178b735b",
    email: "mailto:thammaliprashant295@gmail.com",
    phone: "tel:+916301235420",
    leetcode: "https://leetcode.com/Prashanth%20Thammali",
    gfg: "https://geeksforgeeks.org/profile/Prashant%20Thammali",
  },
  status: "Actively seeking Internship & Placement opportunities in AI/ML & Software Engineering",
};

export const aboutData = {
  title: "About Me",
  subtitle: "Computer Science & Engineering (AI & ML) • Expected Graduation: 2027",
  objective:
    "Enthusiastic Computer Science and Engineering (AI & ML) student with a strong interest in Full Stack Development and Artificial Intelligence. Passionate about creating responsive, user-friendly websites and developing freelance web solutions for individuals and businesses. Seeking opportunities to apply my skills in frontend and backend development, databases, and AI/ML while gaining practical experience and contributing to real-world projects.",
  paragraphs: [
    "I am an undergraduate in Computer Science and Engineering specializing in Artificial Intelligence and Machine Learning at DRK Institute of Science and Technology, Hyderabad, with an expected graduation in 2027. My technical journey combines deep algorithmic foundations with practical engineering across intelligent machine learning pipelines and modern full-stack web applications.",
    "My hands-on experience covers designing end-to-end AI systems utilizing PyTorch, Hugging Face Transformers, Whisper, KeyBERT, and OpenCV, as well as developing resilient full-stack architectures using React.js, Node.js, FastAPI, and MySQL.",
    "Beyond software engineering, I possess a strong grasp of Data Structures and Algorithms, object-oriented principles, and continuous technical learning. I am eager to collaborate with engineering teams to build performant, user-centric, and scalable solutions.",
  ],
  coreInterests: [
    {
      title: "Artificial Intelligence & ML",
      description: "PyTorch deep neural nets, Hugging Face models, Whisper audio transcription, and KeyBERT concept extraction.",
      icon: "FaBrain",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Generative AI & LLMs",
      description: "Transformer architectures, DistilBART abstractive summarization, prompt design, and multimodal pipelines.",
      icon: "FaMicrochip",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "Full-Stack Development",
      description: "Modern, responsive, user-centric web applications built with React.js, Node.js, Tailwind CSS, and REST APIs.",
      icon: "FaLayerGroup",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Computer Vision & OCR",
      description: "Visual feature extraction, optical character recognition with Tesseract OCR, and image analysis with OpenCV.",
      icon: "FaRobot",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Algorithmic problem-solving, time-complexity optimization, and continuous practice on LeetCode and GeeksforGeeks.",
      icon: "FaCode",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      title: "Database Architecture",
      description: "Relational database schema modeling, indexing, and high-performance querying in MySQL.",
      icon: "FaChartLine",
      gradient: "from-rose-500 to-pink-600",
    },
  ],
  quickStats: [
    { label: "Degree & Specialization", value: "B.Tech CSE (AI & ML)" },
    { label: "Expected Graduation", value: "2027" },
    { label: "Current B.Tech CGPA", value: "7.84 / 10.0" },
    { label: "Intermediate (MPC)", value: "94.6%" },
    { label: "Secondary School (X)", value: "100% (10.0)" },
    { label: "Primary Tech Stack", value: "PyTorch & React" },
  ],
  strengths: [
    "Hardworking, self-motivated individual with strong problem-solving abilities and effective teamwork skills.",
    "Strong understanding of Data Structures and Algorithms with clean code practices.",
    "Good communication skills with the ability to work effectively in cross-functional team environments.",
    "Demonstrated ability in building AI-based applications and full-stack web solutions from scratch.",
    "Keen interest in sports (cricket) and actively engaged with emerging technologies and developer communities.",
  ],
};

export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      description: "Core languages for algorithmic logic and robust software development",
      skills: [
        { name: "Python", level: "Advanced", icon: "SiPython", color: "#3776AB" },
        { name: "C", level: "Intermediate", icon: "SiC", color: "#A8B9CC" },
        { name: "JavaScript", level: "Advanced", icon: "SiJavascript", color: "#F7DF1E" },
      ],
    },
    {
      name: "AI & Machine Learning",
      description: "Neural modeling, multimodal NLP, computer vision, and transformers",
      skills: [
        { name: "PyTorch", level: "Advanced", icon: "SiPytorch", color: "#EE4C2C" },
        { name: "Hugging Face", level: "Advanced", icon: "SiHuggingface", color: "#FFD21E" },
        { name: "Whisper", level: "Advanced", icon: "TbSparkles", color: "#10A37F" },
        { name: "DistilBART", level: "Advanced", icon: "FaRobot", color: "#6366F1" },
        { name: "KeyBERT", level: "Advanced", icon: "FaBrain", color: "#8B5CF6" },
        { name: "OpenCV", level: "Intermediate", icon: "SiOpencv", color: "#5C3EE8" },
        { name: "Tesseract OCR", level: "Intermediate", icon: "FaLanguage", color: "#06B6D4" },
      ],
    },
    {
      name: "Front-End",
      description: "Crafting responsive, user-friendly, and accessible web experiences",
      skills: [
        { name: "React.js", level: "Advanced", icon: "SiReact", color: "#61DAFB" },
        { name: "Tailwind CSS", level: "Advanced", icon: "SiTailwindcss", color: "#06B6D4" },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "SiJavascript", color: "#F7DF1E" },
        { name: "HTML5", level: "Advanced", icon: "SiHtml5", color: "#E34F26" },
        { name: "CSS3", level: "Advanced", icon: "SiCss", color: "#1572B6" },
      ],
    },
    {
      name: "Back-End & Databases",
      description: "Server-side logic, API development, and relational databases",
      skills: [
        { name: "Node.js", level: "Intermediate", icon: "SiNodedotjs", color: "#339933" },
        { name: "FastAPI", level: "Intermediate", icon: "SiFastapi", color: "#009688" },
        { name: "Flask", level: "Intermediate", icon: "SiFlask", color: "#000000" },
        { name: "MySQL", level: "Advanced", icon: "SiMysql", color: "#4479A1" },
      ],
    },
    {
      name: "Core Concepts & Tools",
      description: "Foundational CS pillars, version control, and developer workflows",
      skills: [
        { name: "DSA", level: "Advanced", icon: "FaCode", color: "#EC4899" },
        { name: "OOP", level: "Advanced", icon: "FaLayerGroup", color: "#3B82F6" },
        { name: "Git", level: "Advanced", icon: "SiGit", color: "#F05032" },
        { name: "GitHub", level: "Advanced", icon: "SiGithub", color: "#181717" },
        { name: "VS Code", level: "Advanced", icon: "VscCode", color: "#007ACC" },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "AI Based Intelligent Notes Summarizer And Recommendation System",
    category: "AI / ML",
    badge: "Flagship Project",
    description:
      "A privacy-first intelligent application designed to transcribe and summarize multimedia content while extracting core concepts to identify knowledge gaps and recommend relevant learning resources.",
    longDescription:
      "Engineered an end-to-end privacy-first ML pipeline using PyTorch and Hugging Face transformer models (Whisper for audio transcription, DistilBART for abstractive text summarization). Built a concept extraction engine leveraging KeyBERT embeddings and cosine similarity to map knowledge graphs and recommend curated learning material. Utilized OpenCV and Tesseract OCR for text extraction from imagery and PDF notes.",
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Whisper",
      "DistilBART",
      "KeyBERT",
      "OpenCV",
      "Tesseract OCR",
      "React.js",
      "Node.js",
      "MySQL",
    ],
    highlights: [
      "Developed a privacy-first ML pipeline using PyTorch and Hugging Face models (Whisper, DistilBART) to transcribe and summarize multimedia content.",
      "Built a concept extraction engine using KeyBERT embeddings and cosine similarity to identify knowledge gaps and recommend relevant learning resources.",
      "Integrated OCR parsing with Tesseract & OpenCV and persistent relational storage in MySQL.",
    ],
    githubUrl: "https://github.com/Thammaliprashanth18/AI-based-multimodal-summarization-and-recommendation-system.git",
    liveDemoUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "AI Career Copilot",
    category: "AI / ML",
    badge: "AI Powered",
    description:
      "An AI-powered career assistant platform delivering automated resume parsing, skill-gap analysis, and personalized career roadmaps.",
    longDescription:
      "Designed an intelligent applicant advisor combining NLP parsing with embedding scoring algorithms to evaluate resume alignment against modern job descriptions, identify critical skill gaps, and provide actionable milestones.",
    technologies: ["React.js", "FastAPI", "Python", "PyTorch", "Pandas", "Tailwind CSS"],
    highlights: [
      "Semantic similarity scoring between candidate resumes and job requirements",
      "Automated extraction of technical competencies and skill-gap visualization",
      "Clean, modern responsive interface built with React and Tailwind CSS",
    ],
    githubUrl: "https://github.com/Thammaliprashanth18/AI-career-copilot.git",
    liveDemoUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Inventory Management System",
    category: "Full-Stack",
    badge: "Full-Stack",
    description:
      "A secure, web-based inventory management platform for managing products, suppliers, customers, and stock operations with real-time analytics.",
    longDescription:
      "Constructed a full-featured relational inventory tracking web solution featuring role-based authentication, low-stock threshold alerts, supplier transaction logs, automated invoices, and interactive sales reporting dashboards.",
    technologies: ["Python", "Flask", "MySQL", "JavaScript", "HTML5", "CSS3"],
    highlights: [
      "Complete inventory operations lifecycle with relational schema integrity",
      "Real-time analytics and automated low-stock warnings",
      "Secure backend with session management and parameterized SQL queries",
    ],
    githubUrl: "https://github.com/Thammaliprashanth18",
    liveDemoUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Academia–Industry Collaboration Portal",
    category: "Full-Stack",
    badge: "Web Platform",
    description:
      "A collaboration platform connecting educational institutions and industry partners for skill mapping, internships, and placement management.",
    longDescription:
      "Engineered a multi-role portal facilitating university-corporate partnerships through automated student skill verification, direct internship postings, mentor assignment, and collaborative research tracking.",
    technologies: ["React.js", "Node.js", "MySQL", "Express", "Tailwind CSS"],
    highlights: [
      "Role-based dashboards for students, recruiters, and university mentors",
      "Structured student skill mapping and internship placement workflows",
      "RESTful API architecture with MySQL data persistence",
    ],
    githubUrl: "https://github.com/Thammaliprashanth18",
    liveDemoUrl: "#",
    featured: true,
  },
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering – Artificial Intelligence and Machine Learning",
    institution: "DRK Institute Of Science And Technology",
    location: "Hyderabad, Telangana",
    startYear: "2023",
    endYear: "2027",
    status: "In Progress • Expected Graduation: 2027",
    cgpa: "7.84 / 10",
    description:
      "Rigorous core curriculum in Computer Science and Engineering combined with focused specialization in Artificial Intelligence and Machine Learning. Coursework includes Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Machine Learning, Deep Learning, and Database Management.",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Expected Graduation: 2027 with consistent academic performance (Current CGPA: 7.84 / 10)",
      "Active participant in technical coding challenges, hackathons, and software projects",
    ],
  },
  {
    degree: "Senior Secondary Education (Class XII - Intermediate)",
    branch: "Mathematics, Physics, Chemistry (MPC)",
    institution: "NRI Junior College",
    location: "Hyderabad, Telangana",
    startYear: "2021",
    endYear: "May 2023",
    status: "Completed",
    cgpa: "94.6%",
    description:
      "Intensive foundation in advanced mathematics (calculus, linear algebra, trigonometry), physics, and chemistry, cultivating analytical thinking and quantitative reasoning.",
    highlights: [
      "Achieved outstanding score of 94.6%",
      "Solid mathematical groundwork for machine learning and algorithmic problem-solving",
    ],
  },
  {
    degree: "Secondary School Certificate (Class X)",
    branch: "General Science & Mathematics",
    institution: "Genius Grammar High School",
    location: "Shadnagar, Telangana",
    startYear: "2020",
    endYear: "March 2021",
    status: "Completed",
    cgpa: "100% (10.0 / 10.0 GPA)",
    description:
      "Comprehensive school education with perfect marks across mathematics, sciences, and languages.",
    highlights: [
      "Perfect score: 100% / 10.0 GPA distinction",
      "Consistent academic topper and active participation in school science events",
    ],
  },
];

export const certificationsData = [
  {
    title: "Generative AI Fundamentals",
    issuer: "Industry Accredited",
    date: "2024",
    skillsCovered: ["LLMs", "Prompt Engineering", "Transformer Architectures", "GenAI Principles"],
    credentialId: "GENAI-FUND-PR",
    verificationUrl: "https://www.linkedin.com/in/prashanth-thammali-a178b735b",
  },
  {
    title: "Reinforcement Learning and Deep Learning Essentials",
    issuer: "Specialized Deep Learning Program",
    date: "2024",
    skillsCovered: ["Deep Neural Networks", "Reinforcement Learning", "PyTorch", "Model Optimization"],
    credentialId: "RL-DL-ESSENTIALS-PR",
    verificationUrl: "https://www.linkedin.com/in/prashanth-thammali-a178b735b",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    issuer: "Coursera / DeepLearning.AI / Stanford Online",
    date: "2024",
    skillsCovered: ["Supervised Learning", "Neural Networks", "Model Tuning", "Scikit-Learn"],
    credentialId: "AIML-CERT-2024-PR",
    verificationUrl: "https://coursera.org/verify",
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp / Udemy",
    date: "2023",
    skillsCovered: ["React.js", "Node.js", "REST APIs", "Modern CSS", "Database Design"],
    credentialId: "FSWD-CERT-2023-PR",
    verificationUrl: "https://freecodecamp.org/certification",
  },
  {
    title: "Python Programming Specialization",
    issuer: "University of Michigan / Coursera",
    date: "2023",
    skillsCovered: ["Data Structures", "OOP in Python", "API Integration", "Algorithms"],
    credentialId: "PYTH-CERT-2023-PR",
    verificationUrl: "https://coursera.org/verify",
  },
];

export const codingPlatforms = [
  {
    platform: "LeetCode",
    handle: "Prashanth Thammali",
    url: "https://leetcode.com/Prashanth%20Thammali",
    description: "Practicing Data Structures, Algorithms, Dynamic Programming, and Graph theory.",
    badge: "Problem Solving",
  },
  {
    platform: "GeeksforGeeks",
    handle: "Prashant Thammali",
    url: "https://geeksforgeeks.org/profile/Prashant%20Thammali",
    description: "Core computer science concepts, algorithmic challenges, and standard DSA practice.",
    badge: "DSA & Core CS",
  },
];

export const experienceData = {
  statusBanner: "Currently building projects and gaining practical experience",
  statusSubtext:
    "Actively applying computer science theory to production-grade personal projects, contributing to open-source codebases, and preparing for full-time & internship engineering roles.",
  experiences: [
    {
      title: "Open-Source Contributor & Independent Developer",
      role: "AI/ML & Full-Stack Projects",
      period: "2023 - Present",
      type: "Self-Directed / Practical Engineering",
      description:
        "Building production-ready software solutions solving practical problems using machine learning, Python backends, and React interfaces. Publishing reproducible code and documentation on GitHub.",
      achievements: [
        "Engineered end-to-end multimodal AI pipelines integrating Whisper, OCR, and transformers",
        "Constructed modular REST APIs using Node.js & FastAPI with asynchronous handling and MySQL integration",
        "Practiced clean Git version control workflows, semantic commits, and responsive UI architecture",
      ],
    },
  ],
};

export const achievementsData = [
  {
    title: "Strong Understanding of Data Structures and Algorithms",
    category: "Technical Competencies",
    organization: "Competitive Coding & Practice",
    date: "2023 - Present",
    description:
      "Demonstrated proficiency in algorithmic problem solving, array manipulation, graph traversal, and complexity optimization on LeetCode and GeeksforGeeks.",
  },
  {
    title: "Hackathon Finalist / Competitor",
    category: "Hackathons",
    organization: "National Level Student Hackathon",
    date: "2024",
    description:
      "Conceptualized and developed an AI-assisted application within 36 hours, demoing automated document processing to an industry evaluation panel.",
  },
  {
    title: "Academic Excellence Distinction (100% in Class X & 94.6% in XII)",
    category: "Academic Achievements",
    organization: "State Education Board",
    date: "2021 & 2023",
    description:
      "Consistent academic top-tier performance with 10.0 GPA in Secondary School and 94.6% in Senior Secondary MPC.",
  },
  {
    title: "Published Project Portfolio & Open Source Work",
    category: "Project Achievements",
    organization: "GitHub Community",
    date: "2024",
    description:
      "Authored multiple end-to-end applications with comprehensive README documentation, live demos, and modular codebases.",
  },
];
