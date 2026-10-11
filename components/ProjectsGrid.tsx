"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, MoveUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

export interface Project {
  _id: string;
  title: string;
  subtitle?: string;
  link?: string;
  githubLink?: string;
  /** Image object from Sanity. */
  image?: SanityImageSource | null;
  /** Plain image path, used only by the static fallback list. */
  imageUrl?: string;
  techStack?: string[];
  slug?: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const }
  }
};

function coverSrc(project: Project): string {
  if (project.imageUrl) return project.imageUrl;
  if (project.image) {
    return urlFor(project.image).width(900).height(560).fit("max").url();
  }
  return "";
}

// Opens the case-study page when the project has one, otherwise the live site.
function ProjectLink({
  project,
  className,
  children
}: {
  project: Project;
  className?: string;
  children: ReactNode;
}) {
  if (project.slug) {
    return (
      <Link href={`/projects/${project.slug}`} className={className}>
        {children}
      </Link>
    );
  }
  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return <div className={className}>{children}</div>;
}

const textLink =
  "inline-flex items-center gap-1 underline decoration-line underline-offset-4 transition-colors hover:decoration-accent";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return <p className="text-muted">No projects to show yet.</p>;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2"
    >
      {projects.map((project) => {
        const src = coverSrc(project);
        return (
          <motion.article key={project._id} variants={item} className="group">
            <ProjectLink project={project} className="block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface-2 transition-colors group-hover:border-accent">
                {src ? (
                  <Image
                    src={src}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 640px) 440px, 100vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-full items-center justify-center text-5xl font-black text-line"
                  >
                    {project.title.slice(0, 2)}
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug">
                {project.title}
              </h3>
            </ProjectLink>

            {project.subtitle && (
              <p className="mt-1.5 line-clamp-2 leading-relaxed text-muted">
                {project.subtitle}
              </p>
            )}

            {project.techStack && project.techStack.length > 0 && (
              <p className="mt-3 text-sm text-fg-soft">
                {project.techStack.slice(0, 5).join(", ")}
              </p>
            )}

            {(project.link || project.githubLink) && (
              <div className="mt-3 flex items-center gap-5 text-sm">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={textLink}
                  >
                    Live site
                    <MoveUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={textLink}
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    Code
                  </a>
                )}
              </div>
            )}
          </motion.article>
        );
      })}
    </motion.div>
  );
}
