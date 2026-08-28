"use client";

import { useEffect, useState } from "react";
import { profile, sections } from "@/data/profile";

export function Sidebar() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    // 화면 상단에서 40% 지점에 걸린 섹션을 현재 섹션으로 본다.
    // 마지막 섹션은 그 지점까지 올라오지 못한 채 문서가 끝나므로, 바닥에 닿으면 무조건 활성화한다.
    let frame = 0;
    const compute = () => {
      frame = 0;
      const doc = document.documentElement;
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 4) {
        setActive(sections[sections.length - 1].id);
        return;
      }
      const line = window.scrollY + window.innerHeight * 0.4;
      let current: string = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= line) current = s.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(compute);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    compute();

    return () => {
      if (frame !== 0) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-y-0 left-0 z-50 flex w-40 flex-col overflow-y-auto bg-navy text-navy-mute sm:w-56 md:w-64 lg:w-[19rem]">
      <div className="px-4 pt-8 sm:px-6 lg:px-8 lg:pt-14">
        <a href="#top" className="block">
          <span className="font-display block text-lg leading-tight font-black tracking-tight text-white sm:text-2xl lg:text-3xl">
            {profile.name}
          </span>
          <span className="mt-1 block text-[10px] tracking-[0.2em] text-navy-mute uppercase sm:text-xs">
            {profile.role}
          </span>
        </a>
      </div>

      <nav className="mt-8 lg:mt-10">
        <ul className="flex flex-col text-sm">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`font-display block border-l-2 px-4 py-3 transition-colors sm:px-6 lg:px-8 ${
                    isActive
                      ? "border-navy bg-ivory font-bold text-navy"
                      : "border-transparent text-navy-mute hover:bg-navy-soft/60 hover:text-white"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto px-4 pt-10 pb-8 text-[11px] leading-6 sm:px-6 lg:px-8 lg:pb-10 lg:text-xs">
        <a href={`mailto:${profile.email}`} className="block break-all hover:text-white">
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block break-all hover:text-white"
        >
          {profile.githubHandle}
        </a>
      </div>
    </header>
  );
}
