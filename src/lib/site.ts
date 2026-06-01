import { defaultLocale, locales, type Locale } from "@/i18n/config";

export const siteConfig = {
  name: "Cleyson Leal",
  locales,
  defaultLocale,
  person: {
    linkedin: "https://www.linkedin.com/in/cleyson-dev/",
    github: "https://github.com/Cleysonlb",
    email: "cleysonwebdev@gmail.com",
    imagePath: "/cleyson-leal.jpg",
    locality: "Rio de Janeiro",
    country: "BR",
  },
} as const;

export function getSiteUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL ?? "";

  if (!configured) {
    return "http://localhost:3000";
  }

  return configured.startsWith("http") ? configured : `https://${configured}`;
}

export function localePath(locale: Locale, pathname = ""): string {
  const suffix = pathname.startsWith("/") ? pathname : pathname ? `/${pathname}` : "";
  return `/${locale}${suffix}`;
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
