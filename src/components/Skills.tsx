import { Section } from "@/components/Section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skillset" title="SkillSet">
      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-bold tracking-wide text-muted">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-line bg-white px-3 py-1.5 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
