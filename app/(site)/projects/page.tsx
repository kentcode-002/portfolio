import BackButton from "@/components/BackButton";
import ProjectsGrid from "@/components/ProjectsGrid";
import { getProjects } from "@/lib/projects";

export const revalidate = 60;

export const metadata = {
  title: "Projects",
  description:
    "Web applications built by Kent Dela Cruz, including the CLSU admissions website, ShopCore, Smart Inventory Tracker and DocQuery."
};

const page = async () => {
  const projects = await getProjects();

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
      <BackButton />

      <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
        Projects
      </h1>
      <p className="mt-2 max-w-[56ch] text-muted">
        Open a project to see the full case study, or go straight to the live
        site.
      </p>

      <div className="mt-10">
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
};

export default page;
