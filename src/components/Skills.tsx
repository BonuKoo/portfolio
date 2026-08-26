import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-3xl scroll-mt-20 border-t border-black/10 px-6 py-16 dark:border-white/10"
    >
      <h2 className="text-xl font-bold tracking-tight">Skills</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-zinc-500">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm text-zinc-700 dark:border-white/10 dark:text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
