import type { Dictionary } from "@/i18n/types";

export function EducationSection({ dictionary }: { dictionary: Dictionary }) {
  const { education } = dictionary;

  return (
    <section className="mx-auto w-full max-w-3xl border-t border-border px-6 py-16">
      <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-muted">
        {education.title}
      </h2>

      <div className="mb-10">
        <h3 className="text-lg font-semibold text-foreground">
          {education.degree}
        </h3>
        <p className="mt-1 text-base text-muted">
          <span className="text-foreground/90">{education.school}</span>
          <span className="text-muted"> • {education.period}</span>
        </p>
      </div>

      <ul className="space-y-3 text-base text-muted">
        {education.highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-emerald-500/80" aria-hidden>
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
