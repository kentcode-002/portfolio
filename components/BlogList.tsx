"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Blog {
  id: number;
  title: string;
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 mt-6"
    >
      {blogs.map((blog) => (
        <motion.div key={blog.id} variants={item}>
          <Link
            href={`/blog/${blog.id}`}
            className="block text-base lg:text-xl text-white font-bold border-b border-gray-100/30 pb-4 hover:text-[#cfcfcf] transition-colors"
          >
            <p>{blog.title}</p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
