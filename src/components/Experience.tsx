import Reveal from './Reveal'
import { roles } from '../data/portfolio'

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
