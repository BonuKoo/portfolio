import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-20">
      <p className="text-sm font-medium text-zinc-500">Hello, I&apos;m</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg text-zinc-700 dark:text-zinc-300">
        {profile.headline}
      </p>
      <p className="mt-6 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
        {profile.intro}
      </p>
      <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-zinc-500">
        <div className="flex gap-2">
          <dt className="font-medium text-zinc-700 dark:text-zinc-300">위치</dt>
          <dd>{profile.location}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium text-zinc-700 dark:text-zinc-300">이메일</dt>
          <dd>
            <a href={`mailto:${profile.email}`} className="hover:underline">
              {profile.email}
            </a>
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium text-zinc-700 dark:text-zinc-300">GitHub</dt>
          <dd>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {profile.githubHandle}
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
