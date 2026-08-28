import Link from "next/link";
import { notFound } from "next/navigation";
import { profile } from "@/data/profile";
import { projects, type DetailGroup, type DetailItem, type DetailSection } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata(props: PageProps<"/projects/[id]">) {
  const { id } = await props.params;
  const project = projects.find((p) => p.id === id);
  return { title: project ? `${project.title} — ${profile.name}` : "Project" };
}

// 백틱으로 감싼 구간(`Role` 등)을 코드 스타일로 렌더링
function withInlineCode(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith("`") && part.endsWith("`") ? (
      <code key={i} className="rounded bg-navy/5 px-1 py-0.5 text-[0.9em] text-navy">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    ),
  );
}

function DetailItemLine({ item }: { item: DetailItem }) {
  if (typeof item === "string") {
    return <li className="leading-7 text-ink">{withInlineCode(item)}</li>;
  }
  return (
    <li className="leading-7 text-ink">
      {withInlineCode(item.text)}
      <ul className="mt-1.5 ml-5 list-disc space-y-1">
        {item.sub.map((s) => (
          <li key={s} className="leading-6 text-muted">
            {withInlineCode(s)}
          </li>
        ))}
      </ul>
    </li>
  );
}

function DetailItemList({ items }: { items: DetailItem[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5">
      {items.map((item, i) => (
        <DetailItemLine key={i} item={item} />
      ))}
    </ul>
  );
}

function DetailGroupBlock({ group }: { group: DetailGroup }) {
  return (
    <div className="mt-5">
      <h3 className="text-sm font-bold text-navy">{group.label}</h3>
      <DetailItemList items={group.items} />
    </div>
  );
}

function DetailSectionBlock({ section }: { section: DetailSection }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-lg font-bold text-navy">{section.heading}</h2>

      {section.items && <DetailItemList items={section.items} />}

      {section.groups && (
        <div className="mt-1 border-l-2 border-line pl-5">
          {section.groups.map((group) => (
            <DetailGroupBlock key={group.label} group={group} />
          ))}
        </div>
      )}

      {section.images && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {section.images.map((img) => (
            <figure key={img.src}>
              {/* eslint-disable-next-line @next/next/no-img-element -- 정적 스크린샷, next/image 최적화 대상이 아님 */}
              <img
                src={img.src}
                alt={img.caption}
                className="aspect-video w-full rounded border border-line object-cover object-top"
              />
              <figcaption className="mt-1 text-xs text-muted">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[id]">) {
  const { id } = await props.params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-14 sm:px-10 sm:py-20">
      <Link
        href="/#portfolio"
        className="font-display text-sm font-bold text-navy underline underline-offset-4 hover:text-navy-soft"
      >
        ← Project 목록으로
      </Link>

      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element -- 정적 스크린샷, next/image 최적화 대상이 아님
        <img
          src={project.image}
          alt={`${project.title} 스크린샷`}
          className="mt-6 aspect-video w-full rounded border border-line object-cover object-top"
        />
      ) : (
        <div className="mt-6 flex aspect-video w-full items-center justify-center rounded border border-dashed border-line text-sm text-muted">
          사진 준비 중
        </div>
      )}

      <h1 className="font-display mt-8 text-3xl font-black tracking-tight text-navy sm:text-4xl">
        {project.title}
      </h1>

      <dl className="mt-5 space-y-1.5 text-sm">
        {project.period && (
          <div className="flex gap-3">
            <dt className="w-16 shrink-0 text-muted">제작 기간</dt>
            <dd className="text-ink">
              {project.period.map((p) => (
                <div key={p}>{p}</div>
              ))}
            </dd>
          </div>
        )}
        {project.headcount && (
          <div className="flex gap-3">
            <dt className="w-16 shrink-0 text-muted">제작 인원</dt>
            <dd className="text-ink">{project.headcount}</dd>
          </div>
        )}
      </dl>

      {project.detail ? (
        <>
          <p className="mt-8 leading-8 text-ink">{project.detail.overview}</p>
          {project.detail.note && (
            <p className="mt-3 rounded border border-line bg-navy/5 px-4 py-3 text-sm text-muted">
              {project.detail.note}
            </p>
          )}
          {project.detail.sections.map((section) => (
            <DetailSectionBlock key={section.heading} section={section} />
          ))}
        </>
      ) : (
        <>
          <p className="mt-8 leading-8 text-ink">{project.summary}</p>
          <p className="mt-4 text-sm text-muted">자세한 설명은 정리되는 대로 추가할 예정입니다.</p>
        </>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display mt-10 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-bold text-navy hover:border-navy"
        >
          <svg aria-hidden viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          GitHub
        </a>
      )}
    </main>
  );
}
