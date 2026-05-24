export const siteConfig = {
  name: "Priyanshu Gupta",
  role: "AI Engineer | Full Stack Developer | Multi-Agent Systems Builder",
  headline: "Building AI Systems That Think, Reason, and Scale",
  subheadline:
    "AI Engineer focused on Multi-Agent Systems, RAG Pipelines, Full Stack AI Applications, and Intelligent Automation.",
  email: "mailto:priyanshu@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const aboutContent = {
  tagline: "Creating Systems That Think.",
  intro:
    "I'm Priyanshu Gupta, an Information Technology undergraduate at Vidyalankar Institute of Technology with a strong focus on Artificial Intelligence, Machine Learning, AI Agents, and scalable backend systems.",
  body:
    "I build intelligent real-world applications that combine AI with practical engineering. My work revolves around AI agents, RAG systems, automation workflows, backend architectures, and full stack AI products designed for performance and usability.",
  achievement:
    "I ranked #125 globally in HackerRank Orchestrate May 2026, competing with developers from 48 countries in a 24-hour AI agent engineering challenge.",
  focusAreas: [
    "AI Agents",
    "RAG Systems",
    "Backend Architecture",
    "Automation Workflows",
    "Full Stack AI",
    "System Design",
  ],
  closing:
    "I enjoy turning complex ideas into functional, production-oriented software that creates measurable impact.",
};

export const skillCategories = [
  {
    title: "AI / AI Agents",
    skills: [
      "Python",
      "Large Language Models (LLMs)",
      "AI Agents",
      "Multi-Agent Systems",
      "Retrieval Augmented Generation (RAG)",
      "LangChain",
      "LangGraph",
      "Vector Databases",
      "Pinecone",
      "ChromaDB",
      "Agentic Workflows",
    ],
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "pandas", "numpy"],
  },
  {
    title: "Backend Systems",
    skills: ["FastAPI", "Django", "Flask", "REST APIs", "OAuth", "API Integration", "PostgreSQL"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Three.js", "Framer Motion", "Vite"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Leadership",
      "Communication",
      "Team Collaboration",
      "Critical Thinking",
      "Fast Learning",
      "Project Management",
      "Public Speaking",
    ],
  },
];

export const allSkills = skillCategories.flatMap((category) => category.skills);

export const education = {
  institute: "Vidyalankar Institute of Technology",
  location: "Mumbai, India - Mumbai University",
  degree: "B.Tech - Information Technology",
  duration: "2024 - 2028",
  cgpa: "9.83",
  summary:
    "Strong academic performer building an engineering foundation with a focused interest in AI/ML.",
  focus: "Focus: AI/ML",
};

export const projects = [
  {
    id: "ai-support-agent",
    title: "AI Support Agent",
    description:
      "Multi-company support system with RAG pipeline, hallucination reduction, and grounded responses. Built for hackathon deployment.",
    tech: ["Python", "LangChain", "RAG", "FastAPI", "Vector DB"],
    highlight: "Hackathon Project",
  },
  {
    id: "sports-booking",
    title: "College Sports Booking Platform",
    description:
      "Real-time slot booking with timetable validation, smart scheduling, and lecture conflict prevention.",
    tech: ["Next.js", "PostgreSQL", "TypeScript", "Firebase"],
    highlight: "Full Stack",
  },
  {
    id: "robotics-sim",
    title: "Robotics Pick-and-Place Simulator",
    description:
      "OpenCV object detection with robotic arm simulation, coordinate transformations, and conveyor automation.",
    tech: ["Python", "OpenCV", "Robotics", "Simulation"],
    highlight: "Robotics",
  },
  {
    id: "cinematic-portfolio",
    title: "Cinematic AI Portfolio",
    description:
      "Immersive UI/UX with cinematic frontend animations, fake 3D transitions, and premium motion design.",
    tech: ["Next.js", "Framer Motion", "GSAP", "Lenis"],
    highlight: "Frontend",
  },
];

export const timeline = [
  {
    year: "2022",
    title: "Foundations in Full Stack",
    description:
      "Built core web development skills across React, TypeScript, and modern backend APIs.",
  },
  {
    year: "2023",
    title: "Learning AI Systems",
    description:
      "Explored LLMs, RAG pipelines, and intelligent automation workflows.",
  },
  {
    year: "2024",
    title: "Hackathon & Multi-Agent Work",
    description:
      "Developed AI support agents and multi-company RAG systems in competitive environments.",
  },
  {
    year: "2024",
    title: "Robotics & Computer Vision",
    description:
      "Built pick-and-place simulators with OpenCV detection and coordinate transformations.",
  },
  {
    year: "2025",
    title: "Cinematic Portfolio Engineering",
    description:
      "Crafted premium interactive experiences merging AI engineering with elite frontend motion.",
  },
];

export const achievements = [
  {
    title: "HackerRank Orchestrate May 2026",
    position: "#125 Global",
    meta: "1,349 participants - 48 countries",
    description:
      "Ranked #125 out of 1,349 participants globally after building a real AI agent from scratch in a 24-hour competitive engineering challenge.",
  },
  {
    title: "TECHSPRINT 2026 - Code MRI",
    position: "Runner-Up",
    meta: "AI repository analysis platform",
    description:
      "Built an AI-powered repository analysis and code health platform designed for fast, explainable engineering reviews and technical decision-making.",
  },
  {
    title: "HACKAXIOS - BlueQuant",
    position: "#19 National",
    meta: "Blue-carbon MRV and blockchain credits",
    description:
      "Developed a blue-carbon MRV and blockchain credit system recognized in a national-level competitive field for sustainability-focused software innovation.",
  },
  {
    title: "INVASION HACK THE GHOST",
    position: "Top 25",
    meta: "Competitive hackathon execution",
    description:
      "Recognized for quick product thinking, collaboration, and execution under high-pressure hackathon conditions.",
  },
  {
    title: "CODE-A-THON - FinBuddy",
    position: "Top 14",
    meta: "Agentic finance assistant",
    description:
      "Built an agentic finance assistant with OCR, portfolio intelligence, and personalized financial planning workflows.",
  },
];
