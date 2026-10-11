import { client } from "@/sanity/lib/client";
import { projects as fallbackProjects } from "@/data/data";
import type { Project } from "@/components/ProjectsGrid";

const FIELDS = `
  _id,
  title,
  subtitle,
  link,
  githubLink,
  image,
  techStack,
  "slug": slug.current
`;

/*
  Projects come from Sanity. If Sanity can't be reached, or has no projects yet,
  the static list in data/data.ts is used so the page is never empty.
*/
export async function getProjects(limit?: number): Promise<Project[]> {
  const range = limit ? `[0...${Math.floor(limit)}]` : "";
  try {
    const result = await client.fetch<Project[]>(
      `*[_type == "project"] | order(_createdAt desc)${range} { ${FIELDS} }`
    );
    if (result && result.length > 0) return result;
  } catch {
    // Fall through to the static list.
  }

  const fallback: Project[] = fallbackProjects.map((project) => ({
    _id: String(project.id),
    title: project.title,
    subtitle: project.subtitle,
    link: project.link || undefined,
    githubLink: project.githubLink || undefined,
    imageUrl: project.image || undefined,
    techStack: project.techStack
  }));
  return limit ? fallback.slice(0, limit) : fallback;
}
