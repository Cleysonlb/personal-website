import Link from "next/link";
import type { Dictionary } from "@/i18n/types";

export function SiteFooter({ dictionary }: { dictionary: Dictionary }) {
  const { footer, links } = dictionary;

  const footerLinks = [
    { label: footer.linkedin, href: links.linkedin },
    { label: footer.github, href: links.github },
  ];

  return (
    <footer className="mx-auto mt-auto w-full max-w-3xl border-t border-border px-6 py-10">
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
