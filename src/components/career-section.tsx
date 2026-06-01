import Link from "next/link";
import type { Dictionary } from "@/i18n/types";

export function CareerSection({ dictionary }: { dictionary: Dictionary }) {
  const { career } = dictionary;

  return (
    <section className="mx-auto w-full max-w-3xl border-t border-border px-6 py-16">
      <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-muted">
        {career.title}
      </h2>

      <ul className="space-y-10">
        {career.roles.map((role) => (
          <li key={`${role.company}-${role.period}`}>
            <h3 className="text-lg font-semibold text-foreground">
              {role.title}
            </h3>
            <p className="mt-1 text-base text-muted">
              {role.companyUrl ? (
                <Link
                  href={role.companyUrl}
                  className="text-foreground/90 underline decoration-white/10 underline-offset-4 transition-colors hover:decoration-white/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {role.company}
                </Link>
              ) : (
                <span className="text-foreground/90">{role.company}</span>
              )}
              <span className="text-muted"> • {role.location}</span>
            </p>
            <p className="mt-1 font-mono text-sm text-muted">
              {role.period} • {role.duration}
            </p>
            {role.bullets && role.bullets.length > 0 && (
              <ul className="mt-4 space-y-2 text-base text-muted">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="text-emerald-500/80" aria-hidden>
                      •
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
