import { Section } from "@/components/Section";
import { experiences, profile } from "@/data/profile";

export function Introduction() {
  return (
    <Section id="introduction" title="Introduction">
      <h1 className="text-2xl leading-relaxed font-bold text-ink sm:text-3xl">
        {profile.greeting}
      </h1>
      <p className="mt-6 leading-8 text-muted">{profile.intro}</p>

      <blockquote className="mt-10 border-l-2 border-navy pl-6 text-lg leading-relaxed font-bold text-navy">
        &ldquo;{profile.motto}&rdquo;
      </blockquote>

      <h3 className="font-display mt-16 text-2xl font-black tracking-tight text-navy">
        Overall Experiences
      </h3>
      <ol className="mt-8 border-l border-line">
        {experiences.map((exp) => (
          <li key={exp.title} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden
              className="absolute top-2 -left-[4.5px] size-2 rounded-full bg-navy"
            />
            <h4 className="text-lg font-bold text-ink">{exp.title}</h4>
            <p className="font-display mt-1 text-sm tracking-wide text-muted">{exp.period}</p>
            <p className="mt-3 leading-7 text-muted">{exp.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
