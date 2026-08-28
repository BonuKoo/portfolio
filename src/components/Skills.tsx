import { Section } from "@/components/Section";
import { skillGroups, type Skill } from "@/data/skills";

function badgeUrl(skill: Skill): string {
  const label = encodeURIComponent(skill.label.replace(/-/g, "--"));
  const params = new URLSearchParams();
  if (skill.logo) {
    params.set("logo", skill.logo);
    params.set("logoColor", skill.logoColor ?? "white");
  }
  const query = params.toString();
  return `https://img.shields.io/badge/-${label}-${skill.color}${query ? `?${query}` : ""}`;
}

export function Skills() {
  return (
    <Section id="skillset" title="SkillSet">
      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-bold tracking-wide text-muted">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item.label}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- shields.io 배지는 외부 SVG라 next/image 최적화 대상이 아님 */}
                  <img src={badgeUrl(item)} alt={item.label} height={28} className="h-7" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
