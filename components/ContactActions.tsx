"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, FileText, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const secondary =
  "inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent";

export default function ContactActions() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked; open the mail app instead.
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <motion.a
        href={`mailto:${profile.email}`}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        {profile.email}
      </motion.a>

      <motion.button
        type="button"
        onClick={copyEmail}
        whileTap={{ scale: 0.97 }}
        className={secondary}
        aria-live="polite"
      >
        {copied ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        {copied ? "Copied" : "Copy email"}
      </motion.button>

      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.97 }}
        className={secondary}
      >
        <FileText className="h-4 w-4" aria-hidden="true" />
        View resume
      </motion.a>

      <motion.a
        href={profile.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.97 }}
        className={secondary}
      >
        <Linkedin className="h-4 w-4" aria-hidden="true" />
        LinkedIn
      </motion.a>
    </div>
  );
}
