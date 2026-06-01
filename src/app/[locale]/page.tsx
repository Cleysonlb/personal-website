import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { CareerSection } from "@/components/career-section";
import { EducationSection } from "@/components/education-section";
import { HeroSection } from "@/components/hero-section";
import { RecommendationsSection } from "@/components/recommendations-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt-BR" }];
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <JsonLd locale={locale} dictionary={dictionary} />
      <SiteNav locale={locale} />
      <main id="main-content">
        <HeroSection dictionary={dictionary} />
        <CareerSection dictionary={dictionary} />
        <RecommendationsSection dictionary={dictionary} />
        <EducationSection dictionary={dictionary} />
      </main>
      <SiteFooter dictionary={dictionary} />
    </>
  );
}
