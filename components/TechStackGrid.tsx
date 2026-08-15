"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const }
  }
};

const pill = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const }
  }
};

export default function TechStackGrid({
  categories
}: {
  categories: SkillCategory[];
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8"
    >
      {categories.map((category) => (
        <motion.div
          key={category.title}
          variants={card}
          whileHover={{ y: -4 }}
          className="rounded-xl border border-[#2e2e2e] bg-[#1e1e1e] text-white p-6 transition-colors hover:border-[gray]"
        >
          <p className="text-lg font-bold">{category.title}</p>

          <motion.div
            variants={container}
            className="flex flex-row flex-wrap gap-2 mt-4"
          >
            {category.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={pill}
                className="border border-[#3a3a3a] rounded-sm text-xs px-2.5 py-1.5 text-[#cfcfcf]"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
