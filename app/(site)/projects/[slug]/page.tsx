// app/(site)/projects/[slug]/page.tsx

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
      <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
        <BackButton />
        <p className="text-muted">
          This project doesn&apos;t exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
      <BackButton />
      <ProjectCaseStudy project={project} />
    </div>
  );
};

export default page;
