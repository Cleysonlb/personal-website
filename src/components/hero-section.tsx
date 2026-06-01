import Image from "next/image";
import profilePhoto from "@/assets/cleyson-leal.jpg";
import type { Dictionary } from "@/i18n/types";

export function HeroSection({ dictionary }: { dictionary: Dictionary }) {
  const { hero, footer, links, meta } = dictionary;

  return (
    <section
      className="mx-auto w-full max-w-3xl px-6 pb-16"
      aria-labelledby="hero-heading"
    >
      <p className="mb-12 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {hero.tagline}
      </p>
      <h1 id="hero-heading" className="sr-only">
        {meta.seoHeading}
      </h1>

      <div className="flex flex-col gap-10 sm:flex-row sm:items-start">
        <Image
          src={profilePhoto}
          alt="Cleyson Leal"
          width={112}
          height={112}
          className="h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-white/10"
          priority
          sizes="112px"
        />

        <div className="min-w-0 flex-1">
          <p className="text-base leading-relaxed text-muted sm:text-[17px]">
            <strong className="font-semibold text-foreground">
              {hero.greeting}
            </strong>
            {". "}
            {hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <a
              href={links.resume}
              download="curriculo.pdf"
              className="text-muted transition-colors hover:text-foreground"
            >
              {hero.downloadResume}
            </a>
            <span className="text-muted" aria-hidden>
              •
            </span>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              {hero.linkedin}
            </a>
            <span className="text-muted" aria-hidden>
              •
            </span>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              {footer.github}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
