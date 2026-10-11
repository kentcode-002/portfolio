/*
  Static fallback content.
  The live site reads projects from Sanity. If Sanity can't be reached, or has no
  projects yet, the homepage shows this list instead so it is never empty.
*/

export const projects = [
  {
    id: 1,
    title: "CLSU Office of Admissions Website",
    subtitle:
      "Rebuilt the frontend of CLSU's live admissions website during my internship.",
    description:
      "Rebuilt the admissions website frontend alongside OAD staff, with multi-step application forms, real-time client-side validation and conditional navigation.",
    techStack: ["Laravel", "PHP", "JavaScript", "MySQL", "Tailwind", "Bootstrap"],
    link: "https://oad.clsu.edu.ph/",
    githubLink: "",
    image: "/projects-images/clsu.jpg"
  },
  {
    id: 2,
    title: "ShopCore",
    subtitle:
      "A responsive e-commerce app built with Next.js, TypeScript and MongoDB.",
    description:
      "Product catalog and product details come from the Fake Store API, and MongoDB handles application data. The interface is built from reusable Tailwind CSS components.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    link: "https://shop-core-kohl.vercel.app/",
    githubLink: "https://github.com/kentcode-002/ShopCore",
    image: "/projects-images/shopcore.png"
  },
  {
    id: 3,
    title: "Smart Inventory Tracker",
    subtitle:
      "A full-stack inventory system with role-based access and low-stock alerts.",
    description:
      "Authentication and protected routes with Supabase Auth and Next.js middleware, a normalized PostgreSQL schema with Prisma, and an analytics dashboard with CSV export.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    link: "",
    githubLink: "https://github.com/kentcode-002/smart-inventory",
    image: ""
  },
  {
    id: 4,
    title: "DocQuery",
    subtitle: "Ask questions about a PDF and get answers grounded in its text.",
    description:
      "A retrieval-augmented generation pipeline: PDFs are embedded, relevant passages are found with semantic vector search, and an LLM writes the answer from those passages.",
    techStack: ["RAG", "Embeddings", "Vector search", "LLM API"],
    link: "https://rag-doc-query.vercel.app/",
    githubLink: "https://github.com/kentcode-002/rag-doc-query",
    image: ""
  }
];

export const blogs = [
  {
    id: 1,
    title: "How did I start learning Laravel",
    body: "I started learning Laravel during my internship at CLSU. It was the framework used for the development of the Office of Admissions website.",
    list: [""]
  }
];
