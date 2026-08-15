import BackButton from "@/components/BackButton";
import { client } from "@/sanity/lib/client";
import ProjectsGrid from "@/components/ProjectsGrid";

export const revalidate = 60;

const page = async () => {
  const projects = await client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      subtitle,
      link,
      githubLink,
      image,
      techStack,
      "slug": slug.current
    }
  `);

  return (
    <div className="bg-black w-full min-h-screen">
      <div className="py-10 px-4 lg:px-80">
        <BackButton />

        <h1 className="font-extrabold text-3xl lg:text-4xl text-white">
          Projects
        </h1>
        <p className="text-[gray] mt-2 max-w-lg">
          A selection of things I&apos;ve built — click a project to see the
          full case study, or jump straight to the live site.
        </p>

        <ProjectsGrid projects={projects ?? []} />
      </div>
    </div>
  );
};

export default page;
