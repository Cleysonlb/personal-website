/**
 * ATS-friendly resume content sourced from LinkedIn profile.
 * Standard tech industry sections: Summary, Skills, Experience, Education, Certifications.
 */

export const resume = {
  name: "Cleyson Leal",
  headline: "Tech Manager · Frontend Engineering Leader",
  contact: {
    location: "Rio de Janeiro, Brazil",
    linkedin: "linkedin.com/in/cleyson-dev",
    linkedinUrl: "https://www.linkedin.com/in/cleyson-dev/",
    github: "github.com/Cleysonlb",
    githubUrl: "https://github.com/Cleysonlb",
  },
  summary:
    "Software Engineer with more than 10 years of experience across sectors such as agtech, e-commerce, travel, and digital products. Strong expertise in frontend architecture, performance, and engineering quality, collaborating with product and design teams to build sustainable, scalable solutions oriented toward business impact, as well as experience with AI-assisted workflows for development acceleration and architectural standardization.",
  skills: {
    leadership: [
      "Engineering management",
      "Technical leadership",
      "Stakeholder communication",
      "Cross-functional collaboration",
      "Team mentoring",
      "Agile delivery",
    ],
    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "AngularJS",
      "Design systems",
      "UX collaboration",
      "Responsive UI",
      "Prototyping",
    ],
    backend: [
      "Node.js",
      "Ruby on Rails",
      "REST APIs",
      "GraphQL",
      "Full-stack development",
    ],
    practices: [
      "Unit testing (RSpec)",
      "Code review",
      "Best practices",
      "Software quality",
      "Maintainability",
      "Web3 / dApps",
    ],
  },
  experience: [
    {
      title: "Technology Manager",
      company: "Tropiko",
      location: "Brazil (Remote)",
      period: "Jun 2025 – Jun 2026",
      bullets: [
        "Led technical direction for a B2B platform focused on sustainable supply chains, ESG traceability, and predictive analytics.",
        "Drove integration and alignment across product, design, and engineering teams.",
        "Guided platform evolution with a focus on scalability, quality, and continuous delivery.",
      ],
    },
    {
      title: "Frontend Lead",
      company: "Tropiko",
      location: "Brazil (Remote)",
      period: "Apr 2024 – Jun 2025",
      bullets: [
        "Led frontend architecture with a focus on scalability, performance, and maintainability.",
        "Implemented AI-assisted development workflows to accelerate delivery, automate code reviews, and ensure adherence to platform architectural standards.",
      ],
    },
    {
      title: "Senior Frontend Engineer",
      company: "EstrelaBet",
      location: "Brazil (Remote)",
      period: "Aug 2023 – Sep 2024",
      bullets: [
        "Developed high-traffic consumer-facing web applications for an entertainment and gaming platform.",
        "Drove frontend architecture improvements focused on scalability, reliability, performance, and code quality using modern patterns and automated testing.",
      ],
    },
    {
      title: "Senior Frontend Engineer",
      company: "Dropull",
      location: "Brazil (Remote)",
      period: "Aug 2022 – May 2023",
      bullets: [
        "Developed frontend for a platform focused on the metaverse and immersive digital experiences.",
        "Partnered with product and engineering to define and evolve reusable components and scalable flows, prioritizing performance, maintainability, and user experience.",
      ],
    },
    {
      title: "Senior Web3 Frontend Engineer",
      company: "Nftfy",
      location: "Brazil (Remote)",
      period: "Feb 2022 – Jun 2022",
      bullets: [
        "Built Web3 experiences and NFT marketplaces for content creators using React.",
        "Structured wallet integrations and blockchain flows prioritizing usability, performance, and reliability.",
      ],
    },
    {
      title: "Senior Frontend Engineer",
      company: "Barkyn",
      location: "Portugal (Remote)",
      period: "Jul 2021 – Apr 2022",
      bullets: [
        "Developed subscription and e-commerce experiences for a pet health startup operating across multiple European countries.",
        "Collaborated with design and product teams on conversion-focused interfaces, user experience, and visual consistency.",
      ],
    },
    {
      title: "Senior Front-end Developer",
      company: "Significa",
      location: "Portugal (Remote)",
      period: "Feb 2021 – Jul 2022",
      bullets: [
        "Built user-experience-focused digital solutions for Significa clients.",
        "Translated UX research and iterative design flows into performant, scalable, production-ready frontend applications.",
      ],
    },
    {
      title: "FullStack Developer",
      company: "Hurb",
      location: "Rio de Janeiro, Brazil",
      period: "Jan 2019 – Feb 2021",
      bullets: [
        "Developed features for a global travel platform operating in 35+ countries.",
        "Contributed to Project Macedonia, responsible for platform internationalization and architecture evolution to meet LGPD, compliance, and global operations requirements.",
      ],
    },
  ],
  experienceEarlier: [
    {
      title: "Fullstack Developer",
      company: "Indeva Tecnologia (VTEX)",
      location: "Teresópolis, Brazil",
      period: "Sep 2016 – Sep 2018",
    },
    {
      title: "Front End Developer",
      company: "Studio Wethink",
      location: "Brazil (Remote)",
      period: "Nov 2013 – Aug 2014",
    },
    {
      title: "Front End Developer",
      company: "DIGICRIATIVA",
      location: "Teresópolis, Brazil",
      period: "Nov 2012 – Oct 2013",
    },
  ],
  education: [
    {
      degree: "Associate Degree, Systems Analysis & Development (Análise e Desenvolvimento de Sistemas)",
      school: "Estácio",
      period: "2018 – Present",
    },
  ],
  certifications: [
    {
      name: "Curso de Golang",
      issuer: "Udemy",
      date: "Apr 2020",
    },
    {
      name: "Desmistificando Pesquisa em UX",
      issuer: "Mergo User Experience",
      date: "Jan 2017",
    },
  ],
  awards: [
    {
      name: "Winner — Startup Weekend Friburgo 2017 (Lista Fácil)",
      detail:
        "Co-founded and built a shopping-list app; acted as designer and developer on the winning team.",
      date: "Jul 2017",
    },
  ],
  languages: [
    "Portuguese — Native",
    "English — Professional working proficiency",
  ],
} as const;
