export const siteConfig = {
  name: "Priyanshu Gupta",
  role: "AI Engineer | Full Stack Developer | Multi-Agent Systems Builder",
  headline: "Building AI Systems That Think, Reason, and Scale",
  subheadline:
    "AI Engineer focused on Multi-Agent Systems, RAG Pipelines, Full Stack AI Applications, and Intelligent Automation.",
  email: "mailto:priyanshug26005@gmail.com",
  github: "https://github.com/priy-anshugupta",
  linkedin: "https://www.linkedin.com/in/priyanshu-gupta-039810328/",
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
    id: "finbuddy",
    title: "FinBuddy",
    description:
      "AI finance coach with orchestrated LangChain agents, OCR transaction capture, tax comparison, portfolio analysis, and ChromaDB memory.",
    tech: ["FastAPI", "Next.js", "LangChain", "GPT-5.1", "ChromaDB"],
    highlight: "Agentic AI / FinTech",
    category: "Agentic AI / FinTech",
    agents: "13 agents",
    longDescription:
      "FinBuddy is an agentic personal finance assistant that turns raw financial activity into guided decisions. It uses a coordinated agent architecture for transaction extraction, recurring payment detection, tax comparison, portfolio review, and contextual advice.",
    highlights: [
      "3-orchestrator, 13-agent LangChain architecture for finance workflows.",
      "OCR extraction from receipts and SMS-like financial records.",
      "ChromaDB memory layer for contextual, user-aware financial recommendations.",
    ],
    repoUrl: "https://github.com/priy-anshugupta/Finbuddy_AI_Based_Financial_Assistant",
  },
  {
    id: "ai-support-agent",
    title: "AI Support Agent",
    description:
      "Multi-company support system with RAG pipeline, hallucination reduction, and grounded responses. Built for hackathon deployment.",
    tech: ["Python", "LangChain", "RAG", "FastAPI", "Vector DB"],
    highlight: "Hackathon Project",
    category: "AI Systems",
    agents: "",
    longDescription:
      "Multi-company support system with a RAG pipeline, hallucination reduction, and grounded responses. Built for a hackathon deployment with production-ready retrieval flows.",
    highlights: [
      "RAG pipeline tuned for accurate, grounded responses.",
      "Multi-tenant support flows for multiple companies.",
      "FastAPI backend for rapid deployment.",
    ],
    repoUrl: "https://github.com/priy-anshugupta/rag-support-agent",
  },
  {
    id: "sports-booking",
    title: "SportsDeck",
    description:
      "Django platform for college sports ground reservations with slot booking, conflict control, and admin-first operations.",
    tech: ["Django", "PostgreSQL", "HTML/CSS", "Python"],
    highlight: "Web Development",
    category: "Web Development",
    agents: "Slots",
    longDescription:
      "SportsDeck is a Django platform for college sports ground reservations. It handles slot booking, conflict control, and admin-first operations to keep sports infrastructure scheduling simple and reliable.",
    highlights: [
      "Ground booking slot workflow with conflict prevention.",
      "Admin-oriented reservation management for college operations.",
      "Django and PostgreSQL stack focused on practical scheduling needs.",
    ],
    repoUrl: "https://github.com/Aashutosh-Mahajan/Ground-Booking-System",
  },
  {
    id: "bluequant",
    title: "BlueQuant",
    description:
      "Decentralized blue-carbon MRV platform that estimates biomass, converts CO2 equivalents, and mints ERC-20 credits on Ethereum.",
    tech: ["Django", "Solidity", "Web3.py", "Flutter", "Scikit-learn", "PostgreSQL"],
    highlight: "Climate Tech / Blockchain",
    category: "Climate Tech / Blockchain",
    agents: "SIH Top 45",
    longDescription:
      "BlueQuant is a decentralized MRV platform for blue-carbon ecosystems such as mangroves and coastal restoration projects. It estimates biomass from satellite or drone evidence, converts it into CO2 equivalents, and connects the result to tokenized carbon credits.",
    highlights: [
      "ML-assisted biomass estimation for blue-carbon reporting.",
      "ERC-20 carbon credit minting through Solidity, Hardhat, Sepolia, and Web3.py.",
      "Role-based workflows for NGO, field officer, admin, and corporate users.",
    ],
    repoUrl: "https://github.com/Aashutosh-Mahajan/BlueQuant",
  },
  {
    id: "code-mri",
    title: "Code MRI",
    description:
      "Static repo health scanner for maintainability, complexity, documentation quality, security posture, and RAG-powered repo chat.",
    tech: ["FastAPI", "Next.js", "Gemini", "FAISS", "LangChain", "Radon"],
    highlight: "Developer Tools / AI",
    category: "Developer Tools / AI",
    agents: "<30 sec",
    longDescription:
      "Code MRI is a collaborative developer tool that performs static analysis on public GitHub repositories without executing code. It examines complexity, maintainability, documentation quality, and security posture, then supports repo chat through a RAG layer.",
    highlights: [
      "Static repo analysis using Radon and AI-generated explanations.",
      'LangChain and FAISS powered conversational "chat with repo" experience.',
      "Multi-branch analysis, secret scanning, and per-file complexity color coding.",
    ],
    repoUrl: "https://github.com/priy-anshugupta/Code-MRI",
  },
  {
    id: "plexus",
    title: "Plexus",
    description:
      "AI-powered DevEx and security intelligence platform using GraphRAG, knowledge graphs, and multi-agent audit workflows.",
    tech: [
      "FastAPI",
      "Next.js 15",
      "TypeScript",
      "LangGraph",
      "Neo4j",
      "Qdrant",
      "Tree-sitter",
      "Semgrep",
      "Docker",
    ],
    highlight: "AI DevEx / Security",
    category: "AI DevEx / Security",
    agents: "GraphRAG",
    longDescription:
      "Plexus is an enterprise-grade Developer Experience and Security Posture Management platform powered by Multi-Agent AI and GraphRAG. It analyzes software systems through knowledge graphs, parallel auditing agents, blast-radius intelligence, and role-based generative dashboards.",
    highlights: [
      "Graph-based code understanding engine mapping files, functions, APIs, dependencies, and services.",
      "Parallel Security, Backend, Frontend, Database, DevOps, and Dependency agents orchestrated with LangGraph.",
      "Blast Radius Visualization for vulnerability propagation across services, APIs, and system components.",
      "Semantic Time-Travel for natural language exploration of Git history, bug origins, and code evolution.",
      "Autonomous remediation workflows that generate context-aware fix recommendations and pull requests.",
      "Cloud, VPC, and on-premise deployment design with SOC2 and ISO 27001 readiness.",
    ],
    repoUrl: "https://github.com/priy-anshugupta/Plexus",
  },
  {
    id: "cinematic-portfolio",
    title: "Cinematic AI Portfolio",
    description:
      "Immersive UI/UX with cinematic frontend animations, fake 3D transitions, and premium motion design.",
    tech: ["Next.js", "Framer Motion", "GSAP", "Lenis"],
    highlight: "Frontend",
    category: "Frontend Experience",
    agents: "",
    longDescription:
      "Immersive UI/UX with cinematic frontend animations, fake 3D transitions, and premium motion design tailored for a high-end portfolio.",
    highlights: [
      "Cinematic motion system using Framer Motion and GSAP.",
      "Smooth scroll orchestration with Lenis.",
      "Premium UX focused on storytelling.",
    ],
    repoUrl: "https://github.com/priy-anshugupta/portfolio2.0",
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
