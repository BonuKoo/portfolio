"use client";

import { useEffect, useState } from "react";
import { profile, sections } from "@/data/profile";

export function Sidebar() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-navy text-navy-mute lg:fixed lg:inset-y-0 lg:left-0 lg:z-auto lg:flex lg:w-[19rem] lg:flex-col lg:overflow-y-auto">
      <div className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:block lg:px-8 lg:pt-14 lg:pb-0">
        <a href="#top" className="block">
          <span className="font-display text-xl font-black tracking-tight text-white lg:text-3xl">
            {profile.name}
          </span>
          <span className="mt-1 hidden text-xs tracking-[0.2em] text-navy-mute uppercase lg:block">
            {profile.role}
          </span>
        </a>

        <nav className="lg:mt-10">
          <ul className="-mx-3 flex gap-1 overflow-x-auto px-3 text-sm lg:-mx-8 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`font-display block rounded px-3 py-2 whitespace-nowrap transition-colors lg:rounded-none lg:border-l-2 lg:px-8 lg:py-3 ${
                      isActive
                        ? "bg-navy-soft text-white lg:border-white"
                        : "text-navy-mute hover:text-white lg:border-transparent lg:hover:bg-navy-soft/60"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-auto hidden px-8 pb-10 text-xs leading-6 lg:block">
        <a href={`mailto:${profile.email}`} className="block break-all hover:text-white">
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-white"
        >
          {profile.githubHandle}
        </a>
      </div>
    </header>
  );
}
