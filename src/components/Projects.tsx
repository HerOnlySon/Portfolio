import { motion, useReducedMotion } from 'framer-motion'
import type { MouseEvent } from 'react'
import { smoothEase } from '../lib/motion'
import Reveal from './Reveal'
import TechStackOrbit from './TechStackOrbit'

type Project = {
  name: string
  label: string
  description: string
  techStack: readonly string[]
  githubUrl: string
  liveUrl: string
}

type ProjectsProps = {
  projects: readonly Project[]
}

function Projects({ projects }: ProjectsProps) {
  const prefersReducedMotion = useReducedMotion()

  const openProjectRepo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleCardClick = (event: MouseEvent<HTMLElement>, url: string) => {
    const target = event.target as HTMLElement
    if (target.closest('a, button')) {
      return
    }

    openProjectRepo(url)
  }

  return (
    <section id="projects" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-700">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-stone-950 sm:text-4xl">
            Product-minded builds presented with stronger depth, clearer calls
            to action, and smoother motion.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">
            Each project card now behaves like a polished work sample: easier to
            scan, easier to click, and refined enough to hold up in front of
            recruiters or clients.
          </p>
        </Reveal>

        <div className="project-stage mt-12 rounded-[2.75rem] border border-emerald-200 bg-white/70 px-4 py-8 shadow-[0_24px_80px_rgba(28,25,23,0.06)] backdrop-blur sm:px-6 lg:px-10 lg:py-12">
          <div className="project-stage-grid space-y-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                className="group project-stage-item relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-emerald-50/70 p-5 focus-within:border-emerald-500 focus-within:shadow-[0_18px_50px_rgba(4,120,87,0.12)] sm:p-6 lg:p-8"
                role="link"
                tabIndex={0}
                onClick={(event) => handleCardClick(event, project.githubUrl)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    openProjectRepo(project.githubUrl)
                  }
                }}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.7,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: smoothEase,
                }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        rotateY: -8,
                        rotateX: 2,
                        x: 4,
                        y: -4,
                      }
                }
              >
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(24,24,27,0.08),transparent_60%)]" />

                <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                  <div>
                    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-700">
                      {project.label}
                    </p>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-outline-title block text-5xl font-extrabold uppercase leading-[0.88] tracking-[-0.05em] text-stone-950 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4 sm:text-6xl lg:text-[5.8rem]"
                    >
                      {project.name}
                    </a>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="project-tilt-card rounded-[1.7rem] border border-emerald-200 bg-white p-5 shadow-[0_18px_60px_rgba(28,25,23,0.08)]">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.24em] text-emerald-700">
                        Stack
                      </span>
                      <span className="text-xs uppercase tracking-[0.24em] text-stone-400">
                        0{index + 1}
                      </span>
                    </div>

                    <TechStackOrbit items={[...project.techStack]} />

                    <div className="mt-6 border-t border-emerald-200 pt-5">
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-emerald-300 px-4 py-2 text-sm text-emerald-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                        >
                          GitHub
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition-all duration-300 group-hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-[0_18px_30px_rgba(4,120,87,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                        >
                          Open Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
