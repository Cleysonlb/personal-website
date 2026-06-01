import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/i18n/config";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  return buildPageMetadata(localeParam as Locale);
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return children;
}
