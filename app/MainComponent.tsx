"use client";

import {
  Github,
  Linkedin,
  MoveUpRight,
  Facebook,
  Instagram,
  FileText,
  Download,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CurrentTime from "@/components/CurrentTime";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const }
  }
};

export default function MainComponent() {
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("accent-color");
    if (saved) setColor(saved);
  }, []);

  const [hovered, setHovered] = useState<number | null>(null);
  const [iconColor, setIconColor] = useState<number | null>(null);
  const box = `relative border border-[gray] rounded bg-[#1e1e1e] text-white overflow-hidden`;

  //color handler that also saves the selected color to localStorage
  const handleSetColor = (newColor: string) => {
    setColor(newColor);
    localStorage.setItem("accent-color", newColor);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-start lg:items-center bg-black py-4 px-3 lg:p-0 lg:w-screen lg:h-screen">
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className={`max-w-6xl w-full m-auto p-2 md:px-6 relative grid gap-3
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4 lg:grid-rows-7 lg:gap-4`}
      >
        {/* ── Hero ── */}
        <motion.div
          variants={item}
          whileHover={{ y: -3 }}
          style={{ borderColor: hovered === 1 ? color : "gray" }}
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          className={`${box} flex flex-col justify-between p-4
            col-span-1 sm:col-span-2
            lg:col-span-3 lg:row-span-4`}
        >
          <Image
            src="/images/photo.png"
            width={320}
            height={320}
            alt="Avatar"
            className="hidden lg:block absolute bottom-0 right-0 pointer-events-none"
          />
          <div className="max-w-xs sm:max-w-sm lg:max-w-xl w-full mt-4 flex flex-col gap-4">
            <span className="text-[gray]">Welcome!</span>
            <span className="text-md">
              Hi, I&apos;m{" "}
              <span className="font-extrabold">Kent Robert Dela Cruz</span>, a
              full-stack web developer with a strong focus on user experience
              and functionality.
            </span>
            <span className="block text-md">
              Feel free to reach out to me if you have any projects in mind or
              just to say hello.
            </span>
          </div>
          <div className="flex flex-row flex-wrap gap-4 w-full mt-4">
            <a href="https://github.com/kentcode-002" target="_blank">
              <button
                style={{
                  boxShadow: color
                    ? `1px 1px 0 2px ${color}`
                    : `1px 1px 0 2px gray`
                }}
                className="group w-fit text-center py-2 px-4 rounded-sm cursor-pointer"
                onMouseEnter={() => setIconColor(1)}
                onMouseLeave={() => setIconColor(null)}
              >
                <Github
                  style={{ color: iconColor === 1 ? color : "#f0f0f0" }}
                  className="transition-colors"
                />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/kent-robert-dela-cruz-511473387/"
              target="_blank"
            >
              <button
                style={{
                  boxShadow: color
                    ? `1px 1px 0 2px ${color}`
                    : `1px 1px 0 2px gray`
                }}
                onMouseEnter={() => setIconColor(2)}
                onMouseLeave={() => setIconColor(null)}
                className="w-fit text-center py-2 px-4 rounded-sm cursor-pointer"
              >
                <Linkedin
                  style={{ color: iconColor === 2 ? color : "#f0f0f0" }}
                  className="transition-colors"
                />
              </button>
            </a>
            <a
              href="https://www.facebook.com/kentrobert.delacruz/"
              target="_blank"
            >
              <button
                style={{
                  boxShadow: color
                    ? `1px 1px 0 2px ${color}`
                    : `1px 1px 0 2px gray`
                }}
                onMouseEnter={() => setIconColor(3)}
                onMouseLeave={() => setIconColor(null)}
                className="w-fit text-center py-2 px-4 rounded-sm cursor-pointer"
              >
                <Facebook
                  style={{ color: iconColor === 3 ? color : "#f0f0f0" }}
                  className="transition-colors"
                />
              </button>
            </a>
            <a href="https://www.instagram.com/002_ken/" target="_blank">
              <button
                style={{
                  boxShadow: color
                    ? `1px 1px 0 2px ${color}`
                    : `1px 1px 0 2px gray`
                }}
                onMouseEnter={() => setIconColor(4)}
                onMouseLeave={() => setIconColor(null)}
                className="w-fit text-center py-2 px-4 rounded-sm cursor-pointer"
              >
                <Instagram
                  style={{ color: iconColor === 4 ? color : "#f0f0f0" }}
                  className="transition-colors"
                />
              </button>
            </a>

            {/* ── Resume: view in new tab ── */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  boxShadow: color
                    ? `1px 1px 0 2px ${color}`
                    : `1px 1px 0 2px gray`
                }}
                onMouseEnter={() => setIconColor(5)}
                onMouseLeave={() => setIconColor(null)}
                className="group w-fit text-center py-2 px-4 rounded-sm cursor-pointer flex items-center gap-2"
              >
                <FileText
                  style={{ color: iconColor === 5 ? color : "#f0f0f0" }}
                  className="transition-colors"
                  height={20}
                  width={20}
                />
                <span
                  style={{ color: iconColor === 5 ? color : "#f0f0f0" }}
                  className="transition-colors text-sm hidden sm:inline"
                >
                  Resume
                </span>
              </button>
            </a>

            {/* ── Resume: direct download ── */}
            <a href="/resume.pdf" download="Kent-Dela-Cruz-Resume.pdf">
              <button
                style={{
                  boxShadow: color
                    ? `1px 1px 0 2px ${color}`
                    : `1px 1px 0 2px gray`
                }}
                onMouseEnter={() => setIconColor(6)}
                onMouseLeave={() => setIconColor(null)}
                className="w-fit text-center py-2 px-4 rounded-sm cursor-pointer"
                aria-label="Download resume"
              >
                <Download
                  style={{ color: iconColor === 6 ? color : "#f0f0f0" }}
                  className="transition-colors"
                  height={20}
                  width={20}
                />
              </button>
            </a>
          </div>
        </motion.div>

        {/* ── About Me ── */}
        <motion.div
          variants={item}
          whileHover={{ y: -3 }}
          style={{ borderColor: hovered === 2 ? color : "gray" }}
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          className={`${box} p-4
            col-span-1
            lg:col-span-1 lg:row-span-5`}
        >
          <div>
            <p className="mt-4 text-xl font-bold">About me</p>
            <span className="block mt-2 text-sm font-light">
              Hi, I&apos;m <span className="font-bold">Kent Dela Cruz</span>, I
              enjoy creating useful and easy-to-use digital experiences.
              I&apos;m motivated by turning ideas into real applications that
              help people solve problems.
            </span>
          </div>
          <div>
            <span className="block mt-8 text-sm font-light">
              Beyond coding, I focus on learning additional tools that I can use
              and integrate on my projects.
            </span>
            <span className="block mt-2 text-sm font-light">
              I also enjoy exploring new design trends and experimenting with
              creative ways to improve user experiences.
            </span>
          </div>
        </motion.div>

        {/* ── Tech Stack ── */}
        <motion.div
          variants={item}
          whileHover={{ y: -3 }}
          style={{ borderColor: hovered === 3 ? color : "gray" }}
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
          className={`${box} p-4
            col-span-1 sm:col-span-2
            lg:col-span-2 lg:row-span-3`}
        >
          <div>
            <div className="flex items-center justify-between">
              <p className="text-xl">Tech Stack</p>
              <Link
                href="tech-stack"
                className="flex justify-between text-md text-[gray] hover:text-white transition-colors"
              >
                <span>View all</span>
                <ChevronRight />
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-sm">Frontend</p>
              <div className="flex flex-row flex-wrap gap-2 mt-2">
                <span className="border rounded-sm text-xs px-2 py-1">
                  JavaScript
                </span>
                <span className="border rounded-sm text-xs px-2 py-1">
                  TypeScript
                </span>
                <span className="border rounded-sm text-xs px-2 py-1">
                  React
                </span>
                <span className="border rounded-sm text-xs px-2 py-1">
                  Next.js
                </span>
                <span className="border rounded-sm text-xs px-2 py-1">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm">Backend</p>
              <div className="flex flex-row flex-wrap gap-2 mt-2">
                <span className="border rounded-sm text-xs px-2 py-1">
                  Laravel
                </span>
                <span className="border rounded-sm text-xs px-2 py-1">PHP</span>
                <span className="border rounded-sm text-xs px-2 py-1">
                  Node.js
                </span>
                <span className="border rounded-sm text-xs px-2 py-1">
                  MongoDB
                </span>
                <span className="border rounded-sm text-xs px-2 py-1">
                  Supabase
                </span>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: color ? color : "gray" }}
            className="w-full h-px mt-12"
          />
        </motion.div>

        {/* ── Projects ── */}
        <motion.div
          variants={item}
          whileHover={{ y: -3 }}
          style={{ borderColor: hovered === 4 ? color : "gray" }}
          onMouseEnter={() => setHovered(4)}
          onMouseLeave={() => setHovered(null)}
          className={`${box} flex items-center col-span-1 lg:row-span-1`}
        >
          <Link
            href="projects"
            className="group w-full h-full flex justify-between items-center p-4"
          >
            <span className="text-xl">Projects</span>
            <MoveUpRight height={15} width={15} />
          </Link>
        </motion.div>

        {/* ── Blogs ── */}
        <motion.div
          variants={item}
          whileHover={{ y: -3 }}
          style={{ borderColor: hovered === 5 ? color : "gray" }}
          onMouseEnter={() => setHovered(5)}
          onMouseLeave={() => setHovered(null)}
          className={`${box} flex items-center col-span-1 lg:row-span-1`}
        >
          <Link
            href="blog"
            className="w-full h-full flex justify-between items-center p-4"
          >
            <span className="text-xl">Blogs</span>
            <MoveUpRight height={15} width={15} />
          </Link>
        </motion.div>

        {/* ── Current Time ── */}
        <motion.div
          variants={item}
          whileHover={{ y: -3 }}
          className="col-span-1 lg:row-span-1"
        >
          <CurrentTime
            style={{ borderColor: hovered === 6 ? color : "gray" }}
            onMouseEnter={() => setHovered(6)}
            onMouseLeave={() => setHovered(null)}
            className={`${box} flex justify-center items-center text-2xl w-full h-full min-h-16`}
          />
        </motion.div>

        {/* ── Color Picker ── */}
        <motion.div
          variants={item}
          whileHover={{ y: -3 }}
          style={{ borderColor: hovered === 7 ? color : "gray" }}
          onMouseEnter={() => setHovered(7)}
          onMouseLeave={() => setHovered(null)}
          className={`${box} flex gap-2 items-center p-4 col-span-1 lg:row-span-1`}
        >
          <button
            onClick={(e) => handleSetColor(e.currentTarget.value)}
            value={"red"}
            className="w-10 h-10 rounded-[50%] bg-[red] cursor-pointer"
          />
          <button
            onClick={(e) => handleSetColor(e.currentTarget.value)}
            value={"#23c55e"}
            className="w-10 h-10 rounded-[50%] bg-[#23c55e] cursor-pointer"
          />
          <button
            onClick={(e) => handleSetColor(e.currentTarget.value)}
            value={"#a655f7"}
            className="w-10 h-10 rounded-[50%] bg-[#a655f7] cursor-pointer"
          />
          <button
            onClick={(e) => handleSetColor(e.currentTarget.value)}
            value={"#3a82f6"}
            className="w-10 h-10 rounded-[50%] bg-[#3a82f6] cursor-pointer"
          />
          <button
            onClick={(e) => handleSetColor(e.currentTarget.value)}
            value={"#e9b308"}
            className="w-10 h-10 rounded-[50%] bg-[#e9b308] cursor-pointer"
          />
        </motion.div>

        {/* ── Footer ── */}
        <motion.div
          variants={item}
          whileHover={{ y: -3 }}
          style={{ borderColor: hovered === 8 ? color : "gray" }}
          onMouseEnter={() => setHovered(8)}
          onMouseLeave={() => setHovered(null)}
          className={`${box} col-span-1 lg:row-span-1 p-4`}
        >
          <span className="text-sm">
            &copy; {new Date().getFullYear()} Kent Dela Cruz. All rights
            reserved.
          </span>
        </motion.div>
      </motion.main>
    </div>
  );
}
