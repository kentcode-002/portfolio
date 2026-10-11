import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionLink from "@/components/SectionLink";
import ContactActions from "@/components/ContactActions";
import ProjectsGrid from "@/components/ProjectsGrid";
import { getProjects } from "@/lib/projects";
import { blogs } from "@/data/data";
import { experience, skillCategories } from "@/data/profile";

export const revalidate = 60;

const textLink =
  "underline decoration-line underline-offset-4 transition-colors hover:decoration-accent";

export default async function Home() {
  const projects = await getProjects(4);

  return (
    <>
      <Hero />

      <Section
        id="projects"
        title="Projects"
        action={<SectionLink href="/projects">All projects</SectionLink>}
      >
        <ProjectsGrid projects={projects} />
      </Section>

      <Section id="experience" title="Experience and education">
        <div className="space-y-12">
          {experience.map((entry) => (
            <article
              key={entry.id}
              className="grid gap-2 sm:grid-cols-[12rem_1fr] sm:gap-8"
            >
              <div className="text-sm text-muted">
                <p>{entry.period}</p>
                <p className="mt-1">{entry.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-snug">{entry.role}</h3>
                <p className="mt-0.5 text-fg-soft">
                  {entry.orgUrl ? (
                    <a
                      href={entry.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={textLink}
                    >
                      {entry.org}
                    </a>
                  ) : (
                    entry.org
                  )}
                </p>
                {entry.bullets.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2.5 pl-5 leading-relaxed text-muted marker:text-muted">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        title="Skills"
        action={<SectionLink href="/tech-stack">Full tech stack</SectionLink>}
      >
        <dl className="divide-y divide-line border-y border-line">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-8"
            >
              <dt className="text-sm text-muted">{category.title}</dt>
              <dd>{category.skills.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        id="blog"
        title="Blog"
        action={<SectionLink href="/blog">All posts</SectionLink>}
      >
        <ul className="divide-y divide-line border-y border-line">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`/blog/${blog.id}`}
                className="group block py-5 transition-colors"
              >
                <h3 className="text-lg font-bold leading-snug underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-accent">
                  {blog.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 max-w-[64ch] leading-relaxed text-muted">
                  {blog.body}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Get in touch">
        <p className="max-w-[54ch] text-lg leading-relaxed text-fg-soft">
          I&apos;m looking for a full-stack developer role. If you&apos;re
          hiring, or have a project you&apos;d like help with, send me an
          email.
        </p>
        <ContactActions />
      </Section>
    </>
  );
}
