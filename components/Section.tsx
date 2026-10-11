import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export default function Section({ id, title, action, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}
