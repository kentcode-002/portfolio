"use client";

import { motion } from "framer-motion";

export default function BlogPost({
  title,
  body
}: {
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
    >
      <p className="text-white font-bold text-lg lg:text-2xl">{title}</p>
      <p className="text-white text-xl font-light mt-4">{body}</p>
    </motion.div>
  );
}
