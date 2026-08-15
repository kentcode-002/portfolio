// app/projects/[slug]/page.tsx

import BackButton from "@/components/BackButton";
import { client } from "@/sanity/lib/client";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export const revalidate = 60;

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      title,
      subtitle,
      description,
      role,
      image,
      gallery,
      techStack,
      link,
      githubLink
    }`,
    { slug }
  );

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#1e1e1e] text-white p-10">
        <p>Project not found.</p>
        <BackButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 bg-[#1e1e1e]">
      <div className="max-w-5xl mx-auto md:px-10">
        <BackButton />
        <ProjectCaseStudy project={project} />
      </div>
    </div>
  );
};

export default page;
