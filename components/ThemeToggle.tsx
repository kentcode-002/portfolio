"use client";

import { Moon, Sun } from "lucide-react";

/*
  The theme lives on <html data-theme>. The toggle reads and writes it directly,
  and the icon swap is done in CSS (see globals.css), so there is no React state
  that could disagree with what the server rendered.
*/
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private mode); the theme still switches for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:text-fg"
    >
      <Sun className="theme-icon-sun h-[18px] w-[18px]" aria-hidden="true" />
      <Moon className="theme-icon-moon h-[18px] w-[18px]" aria-hidden="true" />
    </button>
  );
}
