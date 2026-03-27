import Reveal from './Reveal'

const roles = [
  {
    title: 'Software Engineer',
    company: 'Shaper',
    type: 'Internship',
    period: 'Oct 2025 - Present',
    duration: '6 mos',
    location: 'South Africa',
    mode: 'Hybrid',
    description:
      'Building full-stack applications with Java, Angular, Spring Boot, and PostgreSQL. Working on RESTful API integration, scalable backend features, and collaborative product delivery using Git-based workflows.',
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
      'Worked as a bridge between clients and delivery teams, supporting data gathering, cleaning, statistical analysis, and visualization to help businesses make better data-driven decisions.',
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
      'Supported the analytics team with financial data collection, cleaning, reporting, and statistical analysis using tools such as Excel and SAS while building a strong analytical foundation.',
    highlights: ['Excel', 'SAS', 'Reporting', 'Data Modeling'],
  },
]

function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-emerald-200 pt-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-700">
            Experience
          </p>
        </Reveal>

        <div className="space-y-5">
          {roles.map((role, index) => (
            <Reveal
              key={`${role.company}-${role.title}`}
              delay={index * 0.06}
              className="rounded-[1.9rem] border border-emerald-200 bg-white p-6 shadow-[0_14px_40px_rgba(28,25,23,0.04)]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-2xl font-medium tracking-[-0.04em] text-stone-950">
                    {role.title}
                  </p>
                  <p className="mt-1 text-base text-stone-600">
                    {role.company} · {role.type}
                  </p>
                </div>

                <div className="text-sm text-emerald-700 md:text-right">
                  <p>{role.period}</p>
                  <p className="mt-1">
                    {role.duration} · {role.location} · {role.mode}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-base leading-8 text-stone-600">
                {role.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {role.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-emerald-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
