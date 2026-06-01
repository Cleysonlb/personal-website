import Link from "next/link";
import type { ReactNode } from "react";

function parseInlineMarkdown(text: string) {
  const parts: ReactNode[] = [];
  const regex =
    /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      parts.push(
        <strong key={match.index} className="font-semibold text-foreground">
          {match[1]}
        </strong>,
      );
    } else if (match[2]) {
      parts.push(
        <em key={match.index} className="italic text-foreground/95">
          {match[2]}
        </em>,
      );
    } else if (match[3] && match[4]) {
      parts.push(
        <Link
          key={match.index}
          href={match[4]}
          className="text-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/50"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[3]}
        </Link>,
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function IntroText({ text }: { text: string }) {
  return <>{parseInlineMarkdown(text)}</>;
}
