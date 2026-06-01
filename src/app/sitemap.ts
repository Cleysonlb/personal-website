import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/i18n/config";
import { absoluteUrl, localePath } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const languageAlternates = Object.fromEntries(
    locales.map((locale) => [locale, absoluteUrl(localePath(locale))]),
  );

  return locales.map((locale: Locale) => ({
    url: absoluteUrl(localePath(locale)),
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "pt-BR" ? 1 : 0.9,
    alternates: {
      languages: languageAlternates,
    },
  }));
}
