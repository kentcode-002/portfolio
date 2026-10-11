"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Facebook,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail
} from "lucide-react";
import CurrentTime from "@/components/CurrentTime";
import { profile } from "@/data/profile";

// The one orchestrated moment on the page: the hero builds in once on load.
const sequence = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } }
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const }
  }
};

const socials = [
  { label: "GitHub", href: profile.socials.github, Icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: Linkedin },
  { label: "Facebook", href: profile.socials.facebook, Icon: Facebook },
  { label: "Instagram", href: profile.socials.instagram, Icon: Instagram }
];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pt-12 sm:pt-20">
      <motion.div
        variants={sequence}
        initial="hidden"
        animate="show"
        className="border-b-2 border-accent"
      >
        <div className="pb-10 sm:pb-14">
          <motion.p
            variants={rise}
            className="flex items-center gap-2.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="status-ping absolute inline-flex h-full w-full rounded-full bg-[#23c55e]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#23c55e]" />
            </span>
            {profile.availability}
          </motion.p>

          <motion.h1
            variants={rise}
            className="mt-5 text-[clamp(2.75rem,9vw,5.75rem)] font-black leading-[0.95] tracking-tight"
          >
            <span className="block">Kent Robert</span>
            <span className="block">Dela Cruz</span>
          </motion.h1>

          <motion.p variants={rise} className="mt-4 text-xl text-fg-soft">
            {profile.role}
          </motion.p>

          <motion.p
            variants={rise}
            className="mt-5 max-w-[56ch] text-[1.0625rem] leading-relaxed text-muted"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href={`mailto:${profile.email}`}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              View resume
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Kent-Dela-Cruz-Resume.pdf"
              aria-label="Download resume as PDF"
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-md border border-line transition-colors hover:border-accent"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.ul
            variants={rise}
            className="mt-6 flex items-center gap-4 text-muted"
          >
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="block transition-colors hover:text-fg"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={rise}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted"
          >
            <span>{profile.location}</span>
            <CurrentTime className="tabular-nums" />
          </motion.div>
        </div>

        <motion.div
          variants={rise}
          className="mx-auto w-56 sm:w-64 md:mx-0 md:w-80"
        >
          {/* <Image
            src="/images/photo.png"
            width={640}
            height={689}
            alt={`Portrait of ${profile.name}`}
            priority
            sizes="(min-width: 768px) 320px, 256px"
            className="h-auto w-full"
          /> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
