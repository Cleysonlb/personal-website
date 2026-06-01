export type CareerRole = {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  duration: string;
  bullets?: string[];
};

export type Recommendation = {
  name: string;
  role?: string;
  linkedinUrl?: string;
  quote: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    jobTitle: string;
    seoHeading: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    tagline: string;
    greeting: string;
    summary: string;
    downloadResume: string;
    linkedin: string;
  };
  career: {
    title: string;
    roles: CareerRole[];
  };
  recommendations: {
    title: string;
    items: Recommendation[];
  };
  education: {
    title: string;
    degree: string;
    school: string;
    period: string;
    highlights: string[];
  };
  footer: {
    linkedin: string;
    github: string;
  };
  links: {
    linkedin: string;
    github: string;
    resume: string;
  };
};
