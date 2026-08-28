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
      className="border-b border-line px-5 py-14 last:border-b-0 sm:px-10 sm:py-16 lg:px-16 lg:py-24"
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
