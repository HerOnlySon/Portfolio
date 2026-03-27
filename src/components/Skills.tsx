import Reveal from './Reveal'

const skillGroups = [
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
]

function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-emerald-200 pt-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-700">
            Skills
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.category}
              delay={index * 0.06}
              className="rounded-[1.75rem] border border-emerald-200 bg-white p-6 shadow-[0_14px_40px_rgba(28,25,23,0.04)]"
            >
              <h3 className="text-lg font-medium tracking-[-0.03em] text-stone-950">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800"
                  >
                    {skill}
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

export default Skills
