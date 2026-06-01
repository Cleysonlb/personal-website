import { buildPersonJsonLd } from "@/lib/seo";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

type JsonLdProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function JsonLd({ locale, dictionary }: JsonLdProps) {
  const data = buildPersonJsonLd(locale, dictionary);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
