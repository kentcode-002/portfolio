import type { Metadata } from "next";
import { satoshi } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kent Dela Cruz | Full-Stack Web Developer",
  description:
    "Portfolio of Kent Robert Dela Cruz, a full-stack web developer specializing in Next.js, React, TypeScript, and Laravel. Built the CLSU Office of Admissions portal and ShopCore e-commerce platform.",
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
    title: "Kent Dela Cruz | Full-Stack Web Developer",
    description:
      "Full-stack web developer specializing in Next.js, React, TypeScript, and Laravel.",
    url: "https://kent-dev.vercel.app",
    siteName: "Kent Dela Cruz Portfolio",
    images: [
      {
        url: "/images/photo.png",
        width: 1200,
        height: 630
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kent Dela Cruz | Full-Stack Web Developer",
    description:
      "Full-stack web developer specializing in Next.js, React, TypeScript, and Laravel."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
