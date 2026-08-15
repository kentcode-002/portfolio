"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MoveUpRight, Github, Expand } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";
import Lightbox from "@/components/LightBox";

interface Project {
  title: string;
  subtitle?: string;
  description?: string;
  role?: string;
  image?: SanityImageSource;
  gallery?: SanityImageSource[];
  techStack?: string[];
  link?: string;
  githubLink?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay }
  })
};

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const fullImages: string[] = [
    ...(project.image
      ? [urlFor(project.image).width(1920).fit("max").url()]
      : []),
    ...(project.gallery ?? []).map((img) =>
      urlFor(img).width(1920).fit("max").url()
    )
  ];

  return (
    <div>
      {project.image && (
        <motion.button
          type="button"
          onClick={() => setLightboxIndex(0)}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="group relative w-full rounded-2xl overflow-hidden aspect-video bg-[#141414] cursor-zoom-in block"
        >
          <Image
            src={urlFor(project.image).width(1600).height(900).fit("max").url()}
            fill
            alt={project.title}
            priority
            className="object-contain"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <Expand
              className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
              height={28}
              width={28}
            />
          </div>
        </motion.button>
      )}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.1}
        className="text-white"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mt-6">
          <div>
            <p className="font-extrabold text-xl sm:text-2xl">
              {project.title}
            </p>
            {project.subtitle && (
              <p className="font-medium mt-1 text-sm sm:text-md text-[#b5b5b5]">
                {project.subtitle}
              </p>
            )}
          </div>

          <div className="flex gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold bg-white text-black px-3 py-2 rounded hover:bg-[#e0e0e0] transition-colors inline-flex items-center gap-1"
              >
                Visit live site <MoveUpRight height={13} width={13} />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold border border-[#3a3a3a] px-3 py-2 rounded hover:border-[gray] transition-colors inline-flex items-center gap-1"
              >
                <Github height={13} width={13} /> View code
              </a>
            )}
          </div>
        </div>

        {project.role && (
          <p className="mt-4 inline-block text-xs font-semibold border border-[#3a3a3a] rounded-sm px-2 py-1 text-[#cfcfcf]">
            Role: {project.role}
          </p>
        )}

        {project.description && (
          <p className="font-light text-sm sm:text-md mt-6 text-justify leading-relaxed">
            {project.description}
          </p>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <>
            <p className="text-lg sm:text-xl font-bold mt-8">Tech Stack</p>
            <div className="flex flex-row flex-wrap gap-2 mt-3">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="border border-[#3a3a3a] rounded-sm text-xs px-2 py-1 text-[#cfcfcf]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}
      </motion.div>

      {project.gallery && project.gallery.length > 0 && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="mt-10"
        >
          <p className="text-lg sm:text-xl font-bold text-white mb-4">
            Gallery
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.map((img, i) => {
              const lightboxTarget = project.image ? i + 1 : i;
              return (
                <motion.button
                  type="button"
                  key={i}
                  onClick={() => setLightboxIndex(lightboxTarget)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group relative w-full aspect-video rounded-xl overflow-hidden border border-[#3a3a3a] bg-[#141414] cursor-zoom-in block"
                >
                  <Image
                    src={urlFor(img).width(1600).height(900).fit("max").url()}
                    fill
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <Expand
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      height={24}
                      width={24}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={fullImages}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={(next) => setLightboxIndex(next)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
