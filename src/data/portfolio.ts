export const siteConfig = {
  name: 'Lebohang Michael Nkoniera',
  initials: 'LMN',
  role: 'Software Engineer',
  location: 'South Africa',
  summary:
    'Full-stack developer building polished web applications with Java, Angular, React, Spring Boot, and PostgreSQL.',
  intro:
    'I build full-stack applications with Java, Angular, Spring Boot, React, and PostgreSQL, backed by consulting and analytics experience that helps me solve product problems with both technical and business context.',
  focus:
    'Building production-ready web applications, deepening Java expertise, and contributing to thoughtful digital products.',
  social: {
    github: 'https://github.com/HerOnlySon',
    linkedin:
      'https://www.linkedin.com/in/lebohang-michael-nkoniera-952454228/',
  },
} as const

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const

export const projects = [
  {
    name: 'FlexSure',
    label: 'Marketplace platform / 2026',
    description:
      'A gadget insurance marketplace that connects clients with insurers, allowing customers to submit requests, compare offers, manage policies, and file claims through a full-stack workflow.',
    techStack: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    githubUrl: 'https://github.com/The-DigitalAcademy/FlexSure',
    liveUrl: 'https://github.com/The-DigitalAcademy/FlexSure',
  },
  {
    name: 'NuAgeBiskop',
    label: 'Angular app / 2025',
    description:
      'An Angular movie-box style clone focused on homepage layout, hero presentation, sidebar interactions, and an entertainment-led browsing experience.',
    techStack: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Git'],
    githubUrl: 'https://github.com/The-DigitalAcademy/NuAgeBiskop',
    liveUrl: 'https://github.com/The-DigitalAcademy/NuAgeBiskop',
  },
  {
    name: 'Makwenzeke',
    label: 'Reminder app / 2025',
    description:
      'A task and reminder application designed to help users organize daily work, track completion, and stay consistent with a simple, friendly interface.',
    techStack: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Git'],
    githubUrl: 'https://github.com/The-DigitalAcademy/Makwenzeke',
    liveUrl: 'https://github.com/The-DigitalAcademy/Makwenzeke',
  },
  {
    name: 'Portfolio Website',
    label: 'Personal build / 2026',
    description:
      'A personal developer portfolio focused on clean storytelling, responsive layouts, and refined interaction design that feels intentional on every screen.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'SASS', 'Figma'],
    githubUrl: 'https://github.com/HerOnlySon',
    liveUrl: 'https://github.com/HerOnlySon',
  },
  {
    name: 'Java Practice Apps',
    label: 'Learning projects / 2025',
    description:
      'A growing collection of Java and web development exercises built to strengthen backend thinking, UI fundamentals, and hands-on problem solving.',
    techStack: ['Java', 'Spring Boot', 'Bootstrap', 'MySQL', 'Git'],
    githubUrl: 'https://github.com/HerOnlySon',
    liveUrl: 'https://github.com/HerOnlySon',
  },
  {
    name: 'Data Dashboard Concepts',
    label: 'Analytics-inspired work / 2025',
    description:
      'Frontend and analytics-inspired concepts shaped by consulting and data analysis experience, with a focus on clarity, reporting, and decision support.',
    techStack: ['Angular', 'Python', 'PostgreSQL', 'Power BI', 'Jira'],
    githubUrl: 'https://github.com/HerOnlySon',
    liveUrl: 'https://github.com/HerOnlySon',
  },
] as const

export const roles = [
  {
    title: 'Software Engineer',
    company: 'Shaper',
    type: 'Internship',
    period: 'Oct 2025 - Present',
    duration: '6 mos',
    location: 'South Africa',
    mode: 'Hybrid',
    description:
      'Building full-stack applications with Java, Angular, Spring Boot, and PostgreSQL while contributing to REST API integration, scalable backend features, and collaborative delivery.',
    highlights: [
      'Java',
      'Angular',
      'Spring Boot',
      'PostgreSQL',
      'REST APIs',
      'Git',
    ],
  },
  {
    title: 'Junior Consultant',
    company: 'Onyx Consulting Group',
    type: 'Contract',
    period: 'Jul 2023 - Oct 2025',
    duration: '2 yrs 4 mos',
    location: 'Midrand, Gauteng, South Africa',
    mode: 'Hybrid',
    description:
      'Worked between clients and delivery teams to support data gathering, cleaning, statistical analysis, and visualization that informed business decisions.',
    highlights: [
      'Data Analysis',
      'Visualization',
      'Consulting',
      'Attention to Detail',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'First National Bank GH',
    type: 'Internship',
    period: 'Apr 2021 - May 2022',
    duration: '1 yr 2 mos',
    location: 'City of Johannesburg, Gauteng, South Africa',
    mode: 'Hybrid',
    description:
      'Supported the analytics team with financial data collection, cleaning, reporting, and statistical analysis using tools such as Excel and SAS.',
    highlights: ['Excel', 'SAS', 'Reporting', 'Data Modeling'],
  },
] as const

export const skillGroups = [
  {
    category: 'Frontend',
    items: [
      'HTML5',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Angular',
      'Bootstrap',
      'SASS',
      'Redux',
    ],
  },
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Python', 'Django', 'Kotlin'],
  },
  {
    category: 'Database',
    items: ['Postgres', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'GitHub',
      'NPM',
      'Jest',
      'Jira',
      'Trello',
      'Power BI',
      'Figma',
      'Canva',
      'Kubernetes',
    ],
  },
] as const

export const contactLinks = [
  {
    label: 'LinkedIn',
    value: 'lebohang-michael-nkoniera',
    href: siteConfig.social.linkedin,
    copy: 'Best for recruiters, hiring teams, and professional networking.',
  },
  {
    label: 'GitHub',
    value: 'HerOnlySon',
    href: siteConfig.social.github,
    copy: 'Browse code samples, learning projects, and ongoing development work.',
  },
] as const
