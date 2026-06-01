import Link from "next/link";
import type { Dictionary } from "@/i18n/types";
import { IntroText } from "./intro-text";

export function RecommendationsSection({
  dictionary,
}: {
  dictionary: Dictionary;
}) {
  const { recommendations } = dictionary;

  return (
    <section className="mx-auto w-full max-w-3xl border-t border-border px-6 py-16">
      <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-muted">
        {recommendations.title}
      </h2>

      <ul className="space-y-10">
        {recommendations.items.map((item) => (
          <li key={`${item.name}-${item.role ?? ""}`}>
            <blockquote className="space-y-4 border-l-2 border-emerald-500/40 pl-6 text-base leading-relaxed text-foreground/90 sm:text-[17px]">
              {item.quote.split("\n\n").map((paragraph, index, paragraphs) => (
                <p key={paragraph.slice(0, 32)}>
                  {index === 0 ? "\u201C" : null}
                  <IntroText text={paragraph} />
                  {index === paragraphs.length - 1 ? "\u201D" : null}
                </p>
              ))}
            </blockquote>
            <footer className="mt-4 pl-6 text-sm">
              {item.linkedinUrl ? (
                <Link
                  href={item.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground transition-colors hover:text-emerald-400/90"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="font-medium text-foreground">{item.name}</span>
              )}
              {item.role ? (
                <span className="text-muted"> · {item.role}</span>
              ) : null}
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
