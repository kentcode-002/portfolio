"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveUpRight, Github } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

interface Project {
  _id: string;
  title: string;
  subtitle?: string;
  link?: string;
  githubLink?: string;
  image?: SanityImageSource;
  techStack?: string[];
  slug?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return <p className="text-white mt-6">No projects found</p>;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full grid grid-cols-1 gap-5 lg:grid-cols-2 mt-8"
    >
      {projects.map((project) => (
        <motion.div
          key={project._id}
          variants={item}
          whileHover={{ y: -4 }}
          className="group relative rounded-xl bg-[#1e1e1e] border border-[#2e2e2e] text-white overflow-hidden transition-colors hover:border-[gray]"
        >
          <Link
            href={project.slug ? `/projects/${project.slug}` : "#"}
            className="block"
          >
            {project.image && (
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={urlFor(project.image).width(900).height(506).url()}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <p className="font-bold text-xl">{project.title}</p>
                <MoveUpRight
                  height={16}
                  width={16}
                  className="shrink-0 mt-1 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              {project.subtitle && (
                <p className="font-light text-sm mt-2 text-[#b5b5b5]">
                  {project.subtitle}
                </p>
              )}

              {project.techStack && project.techStack.length > 0 && (
                <div className="flex flex-row flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-[#3a3a3a] rounded-sm text-xs px-2 py-1 text-[#cfcfcf]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>

          <div className="flex items-center gap-3 px-6 pb-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-semibold bg-white text-black px-3 py-1.5 rounded hover:bg-[#e0e0e0] transition-colors inline-flex items-center gap-1"
              >
                Visit live site <MoveUpRight height={12} width={12} />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-semibold border border-[#3a3a3a] px-3 py-1.5 rounded hover:border-[gray] transition-colors inline-flex items-center gap-1"
              >
                <Github height={12} width={12} /> Code
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
