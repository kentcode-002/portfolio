import BackButton from "@/components/BackButton";
import TechStackGrid from "@/components/TechStackGrid";

export const metadata = {
  title: "Tech Stack | Kent Dela Cruz",
  description:
    "Languages, frameworks, databases, and tools Kent Robert Dela Cruz works with as a full-stack web developer."
};

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"]
  },
  {
    title: "Backend",
    skills: ["Laravel", "Node.js", "Django", "PHP", "Python"]
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"]
  },
  {
    title: "AI",
    skills: ["Claude Code", "Codex", "ChatGPT", "AutoGPT", "Gemini"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Prisma", "Vercel", "Google Workspace"]
  }
];

const page = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      <div className="py-10 px-4 lg:px-80">
        <BackButton />

        <h1 className="font-extrabold text-3xl lg:text-4xl text-white">
          Tech Stack
        </h1>
        <p className="text-[gray] mt-2 max-w-lg">
          Languages, frameworks, and tools I use to build full-stack web
          applications.
        </p>

        <TechStackGrid categories={skillCategories} />
      </div>
    </div>
  );
};

export default page;
