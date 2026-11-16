const projects = [
  {
    number: "01",
    title: "CloudMesh",
    subtitle: "Distributed File Storage System",
    description:
      "A distributed storage system designed to upload, split, replicate, and retrieve files across multiple storage nodes with metadata management and fault-tolerant communication.",
    tags: ["Node.js", "MongoDB", "REST APIs", "Distributed Systems"],
    github: "#",
    demo: "https://cloud-mesh-cyan.vercel.app/",
    featured: true,
  },

  {
    number: "02",
    title: "CodeCompass",
    subtitle: "AI-Powered GitHub Repository Assistant",
    description:
      "An AI-powered platform that analyzes GitHub repositories and answers codebase questions using RAG, hybrid semantic and keyword search, and grounded responses with file paths and line-level citations. Features repository indexing, authenticated access, and streaming chat with conversation history.",
    tags: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "RAG",
      "Hybrid Search",
      "Groq"
    ],
    github: "https://github.com/Ashusf90/CodeCompass",
    demo: "#",
    featured: true,
  },
  {
    number: "03",
    title: "WorldForge AI",
    subtitle: "AI-Powered Fantasy Adventure Game",
    description:
      "An interactive fantasy adventure game powered by Google Gemini, combining RAG-based world knowledge retrieval, AI agents, intelligent planning, and persistent player memory. Players explore a dynamic world with interactive combat, inventory, health, XP, and rewards.",
    tags: ["Python",
      "Google Gemini",
      "Agentic AI",
      "RAG",
      "ChromaDB",
      "Streamlit",
      "Sentence Transformers",
      "Pydantic"],
    github: "https://github.com/Ashusf90/WorldForge-AI",
    demo: "https://worldforge-aigit-jizr5xg2yj7twljrzb3nat.streamlit.app",
    featured: true,
  },

  
{
  number: "04",
  title: "Doomscroll Detector",
  subtitle: "AI-Powered Phone Usage Monitoring",
  description:
    "A computer vision application that monitors phone usage through a webcam using YOLO and OpenCV. Detects phone usage in real time and tracks detection duration through an interactive Streamlit dashboard, helping users become more aware of their screen-time habits.",
  tags: [
    "Python",
    "YOLO",
    "OpenCV",
    "Computer Vision",
    "Streamlit"
  ],
  github: "https://github.com/Ashusf90/Doomscroll-Detector",
  demo: "#",
  featured: true,
},


  {
    number: "05",
    title: "AI-Powered UI Generator",
    subtitle: "Prompt → AI → UI",
    description:
      "A system that converts plain-text UI descriptions into structured, renderable React components using a Planner Agent, Explainer Agent, and Renderer architecture.",
    tags: ["Next.js", "TypeScript", "AI Agents", "React"],
    github: "#",
    demo: "https://ai-powered-ui-generator.vercel.app/",
    featured: true,
  },

  

  {
    number: "06",
    title: "AI PDF Summarizer",
    subtitle: "Documents → AI-generated insights",
    description:
      "An AI-powered web application that extracts text from PDF files and generates concise summaries through a simple responsive interface.",
    tags: ["Python", "Flask", "Gemini API", "pdfplumber"],
    github: "#",
    demo: "https://ai-pdf-summary-1yyy.onrender.com",
    featured: true,
  },

  {
    number: "07",
    title: "AI Interview Copilot",
    subtitle: "AI-powered interview preparation",
    description:
      "An AI-focused interview preparation application designed around structured AI interactions and personalized interview workflows.",
    tags: ["React", "FastAPI", "LLMs", "GenAI"],
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    number: "08",
    title: "NexusLearn",
    subtitle: "Futuristic Learning Dashboard",
    description:
      "A modern learning dashboard featuring live Supabase data, responsive Bento Grid layouts, animated progress tracking, skeleton loading, and polished interactions.",
    tags: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
    github: "#",
    demo: "https://nexuslearn-dashboard-o7xm.vercel.app/",
    featured: true,
  },

  {
    number: "09",
    title: "Cling Homepage Redesign",
    subtitle: "Modern IT company homepage",
    description:
      "A modern redesign focused on visual hierarchy, responsiveness, dark premium UI, and a technology-first brand experience.",
    tags: ["React", "Vite", "Tailwind CSS", "Lucide React"],
    github: "https://github.com/Ashusf90/cling-homepage",
    demo: "https://cling-homepage.vercel.app",
    featured: false,
  },

  {
    number: "10",
    title: "Task Management REST API",
    subtitle: "Tested backend service",
    description:
      "A Node.js REST API with task management, assignment functionality, validation, pagination, automated tests, and high test coverage.",
    tags: ["Node.js", "Express", "Jest", "Supertest"],
    github: "https://github.com/Ashusf90/Take-Home-Assignment-The-Untested-API",
    demo: "https://take-home-assignment-the-untested-api-4730.onrender.com",
    featured: false,
  },

  {
    number: "11",
    title: "Pizza Delivery Application",
    subtitle: "Full-stack ordering platform",
    description:
      "A full-stack pizza ordering application with authentication, order management, REST APIs, MongoDB integration, and responsive UI.",
    tags: ["Node.js", "Express", "MongoDB", "JavaScript"],
    github: "#",
    demo: "https://pizza-delivery-application-silk.vercel.app/login",
    featured: false,
  },

  {
    number: "12",
    title: "Blogging Application",
    subtitle: "Full-stack blogging platform",
    description:
      "A responsive blogging platform with authentication, CRUD operations, REST APIs, dynamic content, and frontend-backend integration.",
    tags: ["Node.js", "Express", "MongoDB", "REST APIs"],
    github: "#",
    demo: "#",
    featured: false,
  },

  {
    number: "13",
    title: "URL Shortener",
    subtitle: "Simple link management service",
    description:
      "A backend-focused application for generating and managing shortened URLs through a clean API-driven architecture.",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "#",
    demo: "#",
    featured: false,
  },

  {
    number: "14",
    title: "QR Code Generator",
    subtitle: "Utility application",
    description:
      "A simple application for generating QR codes from user-provided content.",
    tags: ["Python", "GUI"],
    github: "#",
    demo: "#",
    featured: false,
  },
]

export default projects
