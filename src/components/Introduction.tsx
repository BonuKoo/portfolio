import { Section } from "@/components/Section";
import { profile } from "@/data/profile";

export function Introduction() {
  return (
    <Section id="introduction" title="Introduction">
      <h1 className="text-2xl leading-relaxed font-bold whitespace-pre-line text-ink sm:text-3xl">
        {profile.greeting}
      </h1>
      <p className="mt-6 leading-8 whitespace-pre-line text-muted">{profile.intro}</p>

      <blockquote className="mt-10 border-l-2 border-navy pl-6 text-lg leading-relaxed font-bold text-navy">
        &ldquo;{profile.motto}&rdquo;
      </blockquote>
    </Section>
  );
}
