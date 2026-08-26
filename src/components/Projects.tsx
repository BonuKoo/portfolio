import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-3xl scroll-mt-20 border-t border-black/10 px-6 py-16 dark:border-white/10"
    >
      <h2 className="text-xl font-bold tracking-tight">Projects</h2>
      <div className="mt-8 flex flex-col gap-10">
        {projects.map((project) => (
          <article key={project.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="text-sm text-zinc-500">{project.period}</span>
            </div>
            <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">
              {project.summary}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.links.length > 0 && (
              <div className="mt-3 flex gap-4 text-sm">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-900 hover:underline dark:text-zinc-100"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
