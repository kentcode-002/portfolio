import type { Metadata } from "next";
import { satoshi } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kent-dev.vercel.app"),
  title: {
    default: "Kent Dela Cruz | Full-Stack Developer",
    template: "%s | Kent Dela Cruz"
  },
  description:
    "Portfolio of Kent Robert Dela Cruz, a full-stack developer in the Philippines who builds with Next.js, React, TypeScript and Laravel. Former web developer intern at the CLSU Office of Admissions.",
  keywords: [
    "Kent Dela Cruz",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Laravel Developer",
    "Web Developer Philippines"
  ],
  authors: [{ name: "Kent Robert Dela Cruz" }],
  openGraph: {
    title: "Kent Dela Cruz | Full-Stack Developer",
    description:
      "Full-stack developer building with Next.js, React, TypeScript and Laravel.",
    url: "https://kent-dev.vercel.app",
    siteName: "Kent Dela Cruz",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kent Dela Cruz | Full-Stack Developer",
    description:
      "Full-stack developer building with Next.js, React, TypeScript and Laravel."
  }
};

/*
  Runs before the first paint so a saved light theme or accent color is applied
  immediately. The server always renders the dark default, and this script only
  changes attributes on <html>, which is why <html> has suppressHydrationWarning.
*/
const themeInit = `(function(){try{var d=document.documentElement;var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){d.setAttribute("data-theme",t);}var a=localStorage.getItem("accent-color");if(a){d.style.setProperty("--accent",a);}}catch(e){}})();`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={satoshi.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
