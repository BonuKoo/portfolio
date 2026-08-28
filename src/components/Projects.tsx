import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="portfolio" title="Project">
      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="grid grid-cols-1 gap-6 rounded border border-line bg-white p-6 sm:grid-cols-[200px_1fr] sm:p-8"
          >
            <div>
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element -- 정적 스크린샷, next/image 최적화 대상이 아님
                <img
                  src={project.image}
                  alt={`${project.title} 스크린샷`}
                  className="aspect-square w-full rounded border border-line object-cover"
                />
              ) : (
                <div className="flex aspect-square w-full items-center justify-center rounded border border-dashed border-line text-xs text-muted">
                  사진 준비 중
                </div>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display mt-3 block text-center text-sm font-bold text-navy underline underline-offset-4 hover:text-navy-soft"
                >
                  GitHub
                </a>
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">{project.title}</h3>
              <p className="mt-3 leading-7 text-muted">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
