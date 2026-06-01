"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeCookie, localeLabels, locales, type Locale } from "@/i18n/config";

function setLocaleCookie(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  function hrefFor(target: Locale) {
    const segments = pathname.split("/").filter(Boolean);
    const rest =
      segments.length > 0 && locales.includes(segments[0] as Locale)
        ? segments.slice(1)
        : segments;
    const suffix = rest.length > 0 ? `/${rest.join("/")}` : "";
    return `/${target}${suffix}`;
  }

  function handleClick(target: Locale) {
    setLocaleCookie(target);
  }

  return (
    <div
      className="ml-auto flex items-center rounded-full border border-border bg-surface p-0.5 text-xs font-medium"
      role="group"
      aria-label={locale === "pt-BR" ? "Idioma" : "Language"}
    >
      {locales.map((target) => {
        const isActive = locale === target;
        return (
          <Link
            key={target}
            href={hrefFor(target)}
            onClick={() => handleClick(target)}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              isActive
                ? "bg-white/10 text-foreground"
                : "text-muted hover:text-foreground"
            }`}
            aria-current={isActive ? "true" : undefined}
          >
            {localeLabels[target]}
          </Link>
        );
      })}
    </div>
  );
}
