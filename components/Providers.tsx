"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Turns off Framer Motion animations for visitors who have "reduce motion" enabled.
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
