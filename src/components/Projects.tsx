import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="portfolio" title="Portfolio">
      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded border border-line bg-white p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-navy">{project.title}</h3>
            <p className="font-display mt-1 text-sm tracking-wide text-muted">
              {project.period}
            </p>
            <p className="mt-4 leading-7 text-muted">{project.summary}</p>

            <ul className="mt-5 space-y-2">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-4 leading-7 text-ink">
                  <span aria-hidden className="absolute left-0 text-navy">
                    &middot;
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="font-display rounded-full bg-navy/5 px-3 py-1 text-xs tracking-wide text-navy"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {project.links.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-4 border-t border-line pt-4 text-sm">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-bold text-navy underline underline-offset-4 hover:text-navy-soft"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
