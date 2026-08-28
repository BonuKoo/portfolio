import { Section } from "@/components/Section";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <dl className="space-y-4 text-lg">
        <div className="flex flex-wrap gap-x-4">
          <dt className="font-display w-24 font-bold text-navy">Phone</dt>
          <dd className="text-ink">{profile.phone}</dd>
        </div>
        <div className="flex flex-wrap gap-x-4">
          <dt className="font-display w-24 font-bold text-navy">Email</dt>
          <dd>
            <a
              href={`mailto:${profile.email}`}
              className="text-ink underline underline-offset-4 hover:text-navy"
            >
              {profile.email}
            </a>
          </dd>
        </div>
        <div className="flex flex-wrap gap-x-4">
          <dt className="font-display w-24 font-bold text-navy">GitHub</dt>
          <dd>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-4 hover:text-navy"
            >
              {profile.githubHandle}
            </a>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
