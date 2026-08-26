"use client";

import { sections } from "@/data/profile";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/80">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm">
        <a href="#top" className="font-semibold tracking-tight">
          Portfolio
        </a>
        <ul className="flex gap-5">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
