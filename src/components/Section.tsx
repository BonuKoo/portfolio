import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-line px-6 py-16 last:border-b-0 sm:px-10 lg:scroll-mt-0 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-4xl font-black tracking-tight text-navy sm:text-5xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
