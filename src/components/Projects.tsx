import Link from "next/link";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="portfolio" title="Project">
      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="grid grid-cols-1 gap-6 rounded border border-line bg-white p-6 sm:grid-cols-2 sm:p-8"
          >
            <div>
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element -- 정적 스크린샷, next/image 최적화 대상이 아님
                <img
                  src={project.image}
                  alt={`${project.title} 스크린샷`}
                  className="aspect-video w-full rounded border border-line object-cover"
                />
              ) : (
                <div className="flex aspect-video w-full items-center justify-center rounded border border-dashed border-line text-xs text-muted">
                  사진 준비 중
                </div>
              )}
              <Link
                href={`/projects/${project.id}`}
                className="font-display mt-3 block text-center text-sm font-bold text-navy underline underline-offset-4 hover:text-navy-soft"
              >
                Project Detail
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy">{project.title}</h3>

              <dl className="mt-4 space-y-1.5 text-sm">
                {project.period && (
                  <div className="flex gap-3">
                    <dt className="w-16 shrink-0 text-muted">제작 기간</dt>
                    <dd className="text-ink">{project.period}</dd>
                  </div>
                )}
                {project.headcount && (
                  <div className="flex gap-3">
                    <dt className="w-16 shrink-0 text-muted">제작 인원</dt>
                    <dd className="text-ink">{project.headcount}</dd>
                  </div>
                )}
              </dl>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display mt-5 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-bold text-navy hover:border-navy"
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
