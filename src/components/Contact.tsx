import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl scroll-mt-20 border-t border-black/10 px-6 py-16 dark:border-white/10"
    >
      <h2 className="text-xl font-bold tracking-tight">Contact</h2>
      <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
        편하게 메일 주시면 확인 후 회신드리겠습니다.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          이메일 보내기
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
        >
          GitHub
        </a>
      </div>
      <p className="mt-16 text-xs text-zinc-400">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </section>
  );
}
