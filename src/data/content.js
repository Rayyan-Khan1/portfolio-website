/* ─────────────────────────────────────────────────────────────────────────
   All site content lives here. Edit this file to update the portfolio
   without touching any component code.
───────────────────────────────────────────────────────────────────────── */

export const meta = {
  name: 'Muhammad Rayyan Khan',
  initials: 'RK',
  tagline: 'AI. Data. Software Development.',
  email: 'rayyankhan1910@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rayyan-khan1/',
  github: 'https://github.com/Rayyan-Khan1',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
};

export const about = {
  bio: `A passionate and curious Junior CIS student at Georgia State University with a strong interest in AI, data, and software development. I like to build things and learn as I go.`,
  traits: [
    { label: 'Deliberate Thinker', description: 'Critically evaluates ideas before building. Asks the right questions first.' },
    { label: 'Initiative-Driven', description: 'Approaches even simple tasks with the mindset to do them exceptionally.' },
    { label: 'Detail-Oriented', description: 'Pays close attention to the small things that collectively make the difference.' },
    { label: 'Continuous Improver', description: 'Always looking for ways to refine and push the current build further.' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'ClearPath',
    description: 'An AI-powered academic planner that imports syllabi and auto-schedules a full semester\'s tasks. AI-engineered with Cursor.',
    image: 'images/clearpath.png',
    tags: ['React', 'TypeScript', 'Gemini API', 'Tailwind'],
    github: 'https://github.com/Rayyan-Khan1/clearpath',
    live: null,
  },
  {
    id: 2,
    title: 'AI Job Source Agent',
    description: 'A CLI agent that takes a LinkedIn job URL, scrapes the company\'s careers page, and surfaces open positions using Gemini. Built with Claude Code.',
    image: 'images/ai-job-agent.png',
    tags: ['Python', 'Playwright', 'Gemini API', 'CLI'],
    github: 'https://github.com/Rayyan-Khan1/ai-job-source-agent',
    live: null,
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Tableau', 'Git', 'GitHub', 'Cursor', 'Claude Code', 'VS Code'],
  },
];
