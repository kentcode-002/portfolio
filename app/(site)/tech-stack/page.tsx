import BackButton from "@/components/BackButton";
import TechStackGrid from "@/components/TechStackGrid";
import { skillCategories } from "@/data/profile";

export const metadata = {
  title: "Tech Stack",
  description:
    "Languages, frameworks, databases, and tools Kent Robert Dela Cruz works with as a full-stack web developer."
};

const page = () => {
  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
      <BackButton />

      <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
        Tech Stack
      </h1>
      <p className="mt-2 max-w-[56ch] text-muted">
        Languages, frameworks, and tools I use to build full-stack web
        applications.
      </p>

      <TechStackGrid categories={skillCategories} />
    </div>
  );
};

export default page;
