import type { Metadata } from "next";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { absoluteUrl, getSiteUrl, localePath, siteConfig } from "@/lib/site";

export function buildPageMetadata(locale: Locale): Metadata {
  const dictionary = getDictionary(locale);
  const { meta } = dictionary;
  const canonical = absoluteUrl(localePath(locale));
  const imageUrl = absoluteUrl(siteConfig.person.imagePath);

  const alternateLanguages = Object.fromEntries(
    siteConfig.locales.map((target) => [target, absoluteUrl(localePath(target))]),
  );
  alternateLanguages["x-default"] = absoluteUrl(
    localePath(siteConfig.defaultLocale),
  );

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: meta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.person.linkedin }],
    creator: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical,
      languages: alternateLanguages,
    },
    openGraph: {
      type: "profile",
      locale: locale === "pt-BR" ? "pt_BR" : "en_US",
      alternateLocale: locale === "pt-BR" ? ["en_US"] : ["pt_BR"],
      url: canonical,
      siteName: siteConfig.name,
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [
        {
          url: imageUrl,
          width: 576,
          height: 576,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [imageUrl],
    },
    category: "technology",
  };
}

export function buildPersonJsonLd(locale: Locale, dictionary: Dictionary) {
  const { meta, links } = dictionary;
  const pageUrl = absoluteUrl(localePath(locale));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${pageUrl}#person`,
        name: siteConfig.name,
        url: pageUrl,
        image: absoluteUrl(siteConfig.person.imagePath),
        email: siteConfig.person.email,
        jobTitle: meta.jobTitle,
        description: meta.description,
        knowsLanguage: ["pt-BR", "en"],
        knowsAbout: meta.keywords,
        sameAs: [links.linkedin, links.github],
        worksFor: {
          "@type": "Organization",
          name: "Tropiko",
          url: "https://www.tropiko.earth",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.person.locality,
          addressCountry: siteConfig.person.country,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${pageUrl}#website`,
        url: pageUrl,
        name: meta.title,
        description: meta.description,
        inLanguage: locale === "pt-BR" ? "pt-BR" : "en",
        author: { "@id": `${pageUrl}#person` },
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: meta.title,
        description: meta.description,
        isPartOf: { "@id": `${pageUrl}#website` },
        about: { "@id": `${pageUrl}#person` },
        inLanguage: locale === "pt-BR" ? "pt-BR" : "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}#services`,
        name:
          locale === "pt-BR"
            ? "Desenvolvimento frontend e liderança técnica"
            : "Frontend development and technical leadership",
        provider: { "@id": `${pageUrl}#person` },
        areaServed: "Worldwide",
        serviceType: [
          locale === "pt-BR" ? "Engenharia de software" : "Software engineering",
          locale === "pt-BR" ? "Desenvolvimento web" : "Web development",
          locale === "pt-BR"
            ? "Arquitetura frontend"
            : "Frontend architecture",
        ],
      },
    ],
  };
}
