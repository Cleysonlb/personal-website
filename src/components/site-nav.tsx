import type { Locale } from "@/i18n/config";
import { LanguageToggle } from "./language-toggle";

type SiteNavProps = {
  locale: Locale;
};

export function SiteNav({ locale }: SiteNavProps) {
  return (
    <header className="w-full px-6 py-8">
      <div className="mx-auto flex w-full max-w-3xl justify-end">
        <LanguageToggle locale={locale} />
      </div>
    </header>
  );
}
