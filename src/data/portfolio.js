/**
 * ===================================================================
 * CENTRAL PORTFOLIO DATA CONFIGURATION
 * ===================================================================
 * This is the SINGLE SOURCE OF TRUTH for all your personal information,
 * projects, skills, education, contact details, and achievements.
 * 
 * Edit this file to update your portfolio at any time.
 * ===================================================================
 */

// 1. BASIC PERSONAL INFORMATION
export const personalInfo = {
  // Your full name as displayed in Header, Hero, Footer, and Page Title
  name: "PRANAV RAJ SONI",

  // Your primary role and subtitle
  role: "AI/ML Student & Aspiring AI Automation Developer",

  // Badge displayed above the main hero headline
  heroBadge: "AI/ML Student • Python • Automation",

  // Main hero headline
  heroHeadline: "Building Intelligent Ideas Into Real-World Solutions.",

  // Professional short bio for the Hero section
  shortIntro:
    "AI/ML student focused on learning Python, machine learning, AI automation and modern web technologies. I enjoy building practical projects and exploring how AI can solve real-world problems.",

  // Expanded student bio for the About section
  aboutBio: [
    "I am a B.Tech student at Samrat Ashok Technological Institute, Vidisha, Bhopal, passionate about Artificial Intelligence, Machine Learning, Python programming, and intelligent workflow automation.",
    "Driven by curiosity and a commitment to practical problem solving, I enjoy connecting APIs, working with modern AI models, and building software utilities that streamline everyday workflows.",
    "As an undergraduate student, I focus on strong computer science foundations, consistent coding practice, and hands-on project experimentation."
  ],

  // College / University Name
  college: "Samrat Ashok Technological Institute, Vidisha, Bhopal",

  // City, State, Country
  city: "Vidisha, Bhopal, Madhya Pradesh, India",
  location: "Vidisha, Bhopal, Madhya Pradesh, India",

  // Contact Information
  email: "pranavsoni8765@gmail.com",
  phone: "9399117785",
  contactNo: "9399117785",

  // Social Links
  github: "https://github.com/pranavsoni8765-cpu",
  linkedin: "https://www.linkedin.com/in/pranav-soni-475518376/",

  socialLinks: {
    github: "https://github.com/pranavsoni8765-cpu",
    linkedin: "https://www.linkedin.com/in/pranav-soni-475518376/",
    emailMailto: "mailto:pranavsoni8765@gmail.com",
    phoneTel: "tel:+919399117785"
  },

  // Resume URL placeholder (replace with your Google Drive, Notion, or local /resume.pdf link)
  resume: "# Add your resume URL here",
  resumeUrl: "# Add your resume URL here",

  // Quick stat cards for About Section
  quickStats: [
    { label: "Education", value: "B.Tech Student", sub: "Samrat Ashok Technological Institute" },
    { label: "Current Focus", value: "AI & Automation", sub: "Python, ML & Workflow Pipelines" },
    { label: "Location", value: "Vidisha, Bhopal", sub: "Madhya Pradesh, India" },
    { label: "Core Mindset", value: "Problem Solving", sub: "Building Practical Solutions" }
  ]
};

// 2. EDUCATION TIMELINE
export const educationData = {
  degree: "B.Tech",
  college: "Samrat Ashok Technological Institute, Vidisha, Bhopal",
  duration: "2025 - Present",
  timeline: "2025 - Present",
  status: "Undergraduate Student",
  description:
    "Pursuing undergraduate engineering with an emphasis on core computer science foundations, data structures, algorithms, Python programming, and practical applications of machine learning.",
  keyHighlights: [
    "Core coursework in Computer Science Foundations, Algorithms & Mathematics",
    "Hands-on academic and self-driven project development",
    "Active participant in tech sessions, collaborative coding, and problem-solving"
  ]
};

// 3. SKILLS DATA
// Categorized and marked with honest developmental stages:
// "Learning", "Practicing", "Building", "Exploring"
export const skillsData = {
  categories: [
    {
      id: "programming",
      name: "Programming Languages",
      description: "Core coding languages I write and practice with",
      skills: [
        { name: "Python", status: "Practicing", icon: "Code2", note: "Scripting, Logic, AI/ML tools" },
        { name: "C", status: "Learning", icon: "Terminal", note: "Algorithms & Low-level concepts" },
        { name: "JavaScript", status: "Learning", icon: "FileCode", note: "Web logic & interactive apps" }
      ]
    },
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      description: "Core interest area - studying theory and practical application",
      skills: [
        { name: "Machine Learning", status: "Learning", icon: "Cpu", note: "Foundational models & evaluation" },
        { name: "Artificial Intelligence", status: "Exploring", icon: "Sparkles", note: "LLMs, heuristics & search" }
      ]
    },
    {
      id: "automation",
      name: "Automation & Workflows",
      description: "Tools I use to connect APIs and build smart automations",
      skills: [
        { name: "AI Automation", status: "Building", icon: "Bot", note: "Agentic flows & AI-driven actions" },
        { name: "Google Apps Script", status: "Building", icon: "Workflow", note: "Automating Docs, Sheets & Forms" },
        { name: "Make", status: "Learning", icon: "Share2", note: "Visual multi-step scenario builders" },
        { name: "n8n", status: "Exploring", icon: "Layers", note: "Self-hosted workflow automations" }
      ]
    },
    {
      id: "web-tools",
      name: "Web & Developer Tools",
      description: "Tools for deploying interfaces and maintaining version control",
      skills: [
        { name: "React", status: "Learning", icon: "Component", note: "Modern component-based UIs" },
        { name: "Git", status: "Practicing", icon: "GitBranch", note: "Version control & collaboration" },
        { name: "GitHub", status: "Practicing", icon: "Github", note: "Repositories, releases & showcase" }
      ]
    }
  ]
};

// Flattened list of all skills with direct statuses
export const allSkillsList = [
  { name: "Python", status: "Practicing", category: "Programming" },
  { name: "C", status: "Learning", category: "Programming" },
  { name: "JavaScript", status: "Learning", category: "Programming" },
  { name: "React", status: "Learning", category: "Web" },
  { name: "Machine Learning", status: "Learning", category: "AI/ML" },
  { name: "Artificial Intelligence", status: "Exploring", category: "AI/ML" },
  { name: "AI Automation", status: "Building", category: "Automation" },
  { name: "Google Apps Script", status: "Building", category: "Automation" },
  { name: "Make", status: "Learning", category: "Automation" },
  { name: "n8n", status: "Exploring", category: "Automation" },
  { name: "Git", status: "Practicing", category: "Tools" },
  { name: "GitHub", status: "Practicing", category: "Tools" }
];

// 4. FEATURED PROJECT (Flagship Showcase)
export const featuredProject = {
  id: "featured-ai-support",
  title: "AI Customer Support Automation",
  tagline: "Intelligent multi-channel ticket resolution using LLMs & webhook triggers",
  badge: "Featured Flagship Project",
  problem:
    "Customer support queues suffer from high latency when handling repetitive queries, causing slow response times and inefficient human resource allocation.",
  solution:
    "Engineered an automated pipeline that intercepts customer queries via webhooks, processes the request using an AI model with contextual prompts, and returns instant structured responses with human fallback.",
  technologies: ["Python", "AI APIs", "Webhooks", "n8n / Make", "Google Apps Script"],
  keyFeatures: [
    "Context-aware automated query classification",
    "Intelligent fallback to human representative for edge cases",
    "Automated logging and audit trail in spreadsheets / databases",
    "Configurable prompt templates for customized brand tone"
  ],
  githubUrl: "https://github.com/pranavsoni8765-cpu/ai-customer-support-automation",
  liveDemoUrl: null, // "Live Demo — Coming Soon"
  architectureSteps: [
    { step: "01", name: "Inbound Hook", desc: "User submits query via form or webhook endpoint" },
    { step: "02", name: "Prompt & Context", desc: "System enriches payload with knowledge base parameters" },
    { step: "03", name: "AI Processing", desc: "LLM evaluates intent and generates structured answer" },
    { step: "04", name: "Dispatch & Log", desc: "Sends response to customer and records ticket state" }
  ]
};

// 5. PROJECTS LIST
// Realistic student/beginner projects with placeholders
export const projectsList = [
  {
    id: "proj-1",
    title: "AI Customer Support Automation",
    category: "AI Automation",
    description:
      "An automation workflow that receives incoming customer questions, processes them with AI, classifies sentiment, and generates instant intelligent responses.",
    technologies: ["Python", "AI APIs", "Webhooks", "n8n / Make"],
    githubUrl: "https://github.com/pranavsoni8765-cpu/ai-customer-support-automation",
    liveDemoUrl: null,
    status: "Completed Prototype",
    highlights: ["Reduces repetitive ticket load", "Sentiment analysis", "Webhook triggers"]
  },
  {
    id: "proj-2",
    title: "AI Portfolio / Personal Website",
    category: "Web Development",
    description:
      "A modern, responsive personal developer portfolio engineered with React, Tailwind CSS, and smooth micro-interactions to showcase my tech journey.",
    technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    githubUrl: "https://github.com/pranavsoni8765-cpu/portfolio-website",
    liveDemoUrl: null,
    status: "Active & Maintained",
    highlights: ["100% Responsive", "Accessible Dark Theme", "Smooth Performance"]
  },
  {
    id: "proj-3",
    title: "Python ATM / Banking System",
    category: "Python Development",
    description:
      "A beginner Python project demonstrating conditions, loops, functions, basic transaction logic, and simulated persistent account balances.",
    technologies: ["Python 3", "File I/O", "OOP", "CLI Interface"],
    githubUrl: "https://github.com/pranavsoni8765-cpu/python-atm-banking-system",
    liveDemoUrl: null,
    status: "Completed Project",
    highlights: ["PIN authentication", "Transaction history", "Deposit & Withdrawal logic"]
  },
  {
    id: "proj-4",
    title: "AI Question Answering Automation",
    category: "AI Automation",
    description:
      "A workflow connecting Google Forms, Google Sheets, Google Apps Script, and AI APIs to evaluate questions and automate intelligent email responses.",
    technologies: ["Google Apps Script", "Gemini API", "Google Sheets", "Make"],
    githubUrl: "https://github.com/pranavsoni8765-cpu/ai-qa-automation",
    liveDemoUrl: null,
    status: "Functional Workflow",
    highlights: ["Zero-server maintenance", "Automated email dispatcher", "Spreadsheet logging"]
  },
  {
    id: "proj-5",
    title: "Student Productivity Automation",
    category: "Automation Tools",
    description:
      "An automation concept for organizing student tasks, parsing deadlines, and structuring academic schedules using AI and workflow tools.",
    technologies: ["Python", "Automation", "Calendar API", "Task Sync"],
    githubUrl: "https://github.com/pranavsoni8765-cpu/student-productivity-automation",
    liveDemoUrl: null,
    status: "Concept & Prototype",
    highlights: ["Task parsing", "Calendar integration", "Smart prioritization"]
  }
];

// 6. CURRENT FOCUS ("What I'm Building & Learning")
export const currentFocusAreas = [
  {
    title: "Artificial Intelligence",
    status: "Exploring",
    statusColor: "violet",
    description: "Studying foundational concepts of AI, heuristics, search algorithms, and modern LLM capabilities.",
    topics: ["Core AI Concepts", "Transformer Basics", "LLM Interaction", "Heuristic Search"]
  },
  {
    title: "Machine Learning",
    status: "Learning",
    statusColor: "indigo",
    description: "Studying foundational ML algorithms, supervised models, evaluation metrics, and data pre-processing.",
    topics: ["Linear Regression", "Classification", "Model Evaluation", "NumPy & Pandas"]
  },
  {
    title: "AI Automation",
    status: "Building",
    statusColor: "cyan",
    description: "Building automated workflows connecting webhooks, LLMs, and real-time triggers to eliminate repetitive tasks.",
    topics: ["Webhook Triggers", "Agentic Pipelines", "Prompt Chaining", "JSON Payloads"]
  },
  {
    title: "Python Development",
    status: "Practicing",
    statusColor: "emerald",
    description: "Writing cleaner, idiomatic Python code with type hints, modular structures, and robust exception handling.",
    topics: ["Object-Oriented Design", "CLI Applications", "File Systems", "API Consumption"]
  },
  {
    title: "Web Development",
    status: "Learning",
    statusColor: "blue",
    description: "Learning modern frontend concepts with React and Tailwind CSS to build clean user interfaces for projects.",
    topics: ["React Components", "Tailwind CSS", "Modern JavaScript", "Responsive Design"]
  },
  {
    title: "Automation Tools",
    status: "Building",
    statusColor: "amber",
    description: "Automating workflows with Google Apps Script, Make, and exploring self-hosted tools like n8n.",
    topics: ["Google Apps Script", "Make Scenarios", "n8n Workflows", "API Integrations"]
  },
  {
    title: "Building Practical Projects",
    status: "Practicing",
    statusColor: "rose",
    description: "Turning theoretical concepts into functional software prototypes that solve genuine everyday problems.",
    topics: ["End-to-End Prototypes", "Git Version Control", "Documentation", "Problem Solving"]
  }
];

// 7. ACHIEVEMENTS / CERTIFICATIONS
// Editable placeholder cards - replace with your actual credentials when earned!
export const achievementsList = [
  {
    id: "achieve-1",
    category: "Certifications",
    title: "YOUR CERTIFICATION — Add certification details here",
    issuer: "Coursera / DeepLearning.AI / Platform Name",
    date: "Month Year",
    description:
      "Placeholder card for your technical certification or completed online course. Update this card once you complete your target certification.",
    badge: "Certification",
    linkText: "View Certificate",
    linkUrl: "#",
    isPlaceholder: true
  },
  {
    id: "achieve-2",
    category: "Hackathons",
    title: "YOUR HACKATHON — Add achievement here",
    issuer: "College / Online Hackathon",
    date: "Month Year",
    description:
      "Placeholder for college or virtual hackathon participations where you collaborated in a team to build an MVP within 24-48 hours.",
    badge: "Hackathon",
    linkText: "Project Submission",
    linkUrl: "#",
    isPlaceholder: true
  },
  {
    id: "achieve-3",
    category: "Courses",
    title: "Python & Machine Learning Coursework",
    issuer: "Self-Study & Academic Coursework",
    date: "2025 - Present",
    description:
      "Completed structured coursework and problem sets covering Python syntax, data structures, and foundational AI principles.",
    badge: "Coursework",
    linkText: "Curriculum Details",
    linkUrl: "#",
    isPlaceholder: true
  },
  {
    id: "achieve-4",
    category: "Coding Practice",
    title: "Algorithmic Problem Solving Practice",
    issuer: "LeetCode / HackerRank / CodeChef",
    date: "Ongoing",
    description:
      "Regularly practicing data structures, arrays, loops, and algorithmic problem-solving to strengthen computer science fundamentals.",
    badge: "Coding Practice",
    linkText: "View Profile",
    linkUrl: "https://github.com/pranavsoni8765-cpu",
    isPlaceholder: true
  },
  {
    id: "achieve-5",
    category: "Achievements",
    title: "YOUR ACHIEVEMENT — Add details here",
    issuer: "Campus / Community / Academic",
    date: "Month Year",
    description:
      "Placeholder for future academic honors, coding competitions, or technical workshop recognitions.",
    badge: "Achievement",
    linkText: "Details",
    linkUrl: "#",
    isPlaceholder: true
  }
];

// 8. NAVIGATION LINKS
export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Focus", href: "#focus" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];
