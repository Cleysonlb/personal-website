# Cleyson Leal — Personal Website

A minimal about page inspired by [zenorocha.com/about](https://zenorocha.com/about), populated from [LinkedIn profile](https://www.linkedin.com/in/cleyson-dev/).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/pt-BR` or `/en` based on your browser language and saved preference.

## Internationalization (i18n)

- **Locales:** `en`, `pt-BR` (default: `pt-BR`)
- **URLs:** `/en`, `/pt-BR`
- **Toggle:** EN | PT in the top navigation
- **Dictionaries:** `src/i18n/dictionaries/en.ts`, `src/i18n/dictionaries/pt-BR.ts`

## Resume (PDF)

Generate an ATS-friendly tech resume from LinkedIn content:

```bash
npm run resume:pdf
```

Output: `public/Cleyson-Leal-Resume.pdf`

Edit `src/resume/resume-data.ts` to update bullets, skills, and experience.

## Customize

Edit `src/i18n/dictionaries/` to update copy, career history, and links. Replace the `CL` avatar in `src/components/hero-section.tsx` with a real headshot when you have one.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
