/*
  Everything shown on the homepage that isn't a Sanity project lives here.
  Edit this file to update your bio, experience, skills and links.
  Source: your latest resume.
*/

export const profile = {
  name: "Kent Robert Dela Cruz",
  role: "Full-stack developer",
  location: "Nueva Ecija, Philippines",
  email: "kent.code.delacruz@gmail.com",
  availability: "Open to full-stack developer roles",
  bio: "I build full-stack web applications with React, Next.js and Laravel. During my internship I helped rebuild a live university admissions website, and on my own I've designed full-stack systems from the database schema to the interface, including a RAG-based tool that answers questions about uploaded PDFs.",
  socials: {
    github: "https://github.com/kentcode-002",
    linkedin:
      "https://www.linkedin.com/in/kent-robet-dela-cruz-511473387/?isSelfProfile=true",
    facebook: "https://www.facebook.com/kentrobert.delacruz/",
    instagram: "https://www.instagram.com/002_ken/"
  }
};

export const experience = [
  {
    id: "clsu-oad",
    period: "Feb 2025 to Jun 2025",
    location: "Science City of Muñoz, Nueva Ecija",
    role: "Web Developer Intern",
    org: "Central Luzon State University, Office of Admissions",
    orgUrl: "https://oad.clsu.edu.ph/",
    bullets: [
      "Rebuilt the admissions website frontend, aligning the interface with CLSU's design standards to improve usability and accessibility for prospective applicants.",
      "Built dynamic, multi-step application forms with real-time client-side validation and conditional navigation, reducing friction and submission errors in the application flow.",
      "Owned feature delivery from requirements through release, working directly with OAD staff to ship all assigned functionality on schedule within a fixed internship timeline."
    ]
  },
  {
    id: "clsu-bsit",
    period: "Aug 2020 to Jul 2025",
    location: "Science City of Muñoz, Nueva Ecija",
    role: "Bachelor of Science in Information Technology",
    org: "Central Luzon State University",
    orgUrl: "",
    bullets: [] as string[]
  }
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "PHP", "Python", "C#"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Laravel", "Node.js", "Django", "Supabase"]
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma"]
  },
  {
    title: "AI engineering",
    skills: ["RAG pipelines", "Vector search", "LLM APIs"]
  },
  {
    title: "AI tools",
    skills: ["Claude Code", "Codex", "ChatGPT", "AutoGPT", "Gemini"]
  },
  {
    title: "Tools and DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Zapier",
      "WordPress",
      "Vercel",
      "Google Workspace"
    ]
  }
];
