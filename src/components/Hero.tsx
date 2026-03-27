import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal'

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 110])
  const opacity = useTransform(scrollY, [0, 360], [1, 0.45])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8"
    >
      <motion.div
        className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_55%)]"
        style={{ y }}
      />
      <div className="absolute inset-x-0 top-24 -z-10 mx-auto h-[32rem] max-w-6xl rounded-full border border-emerald-200/70 bg-white/50 blur-3xl" />

      <div className="mx-auto flex w-full max-w-7xl items-end gap-12">
        <motion.div className="max-w-5xl" style={{ opacity }}>
          <Reveal>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-emerald-700">
              Software Engineer Portfolio
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-emerald-700 shadow-[0_10px_30px_rgba(12,10,9,0.04)] backdrop-blur">
              Full-stack developer and analytical problem solver
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-stone-950 sm:text-6xl md:text-7xl lg:text-[5.45rem]">
              Lebohang Michael Nkoniera — Software Engineer
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-600 sm:text-xl">
              I build full-stack applications with Java, Angular, Spring Boot,
              React, and PostgreSQL, with a background that also includes data
              analysis, consulting, and business-focused problem solving.
            </p>
          </Reveal>

          <Reveal
            delay={0.24}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-7 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300 px-7 py-3 text-sm font-medium text-stone-900 transition-colors duration-300 hover:border-emerald-700 hover:bg-emerald-50"
            >
              Connect With Me
            </a>
          </Reveal>

          <Reveal
            delay={0.32}
            className="mt-16 grid max-w-4xl gap-4 border-t border-emerald-200 pt-8 sm:grid-cols-4"
          >
            <div>
              <p className="text-3xl font-semibold tracking-[-0.05em] text-stone-950">
                3
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-emerald-700">
                Professional roles
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-[-0.05em] text-stone-950">
                Java
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-emerald-700">
                Backend foundation
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-[-0.05em] text-stone-950">
                Angular
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-emerald-700">
                Frontend delivery
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-[-0.05em] text-stone-950">
                Data
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-emerald-700">
                Analytics background
              </p>
            </div>
          </Reveal>
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="relative ml-auto hidden xl:block"
          style={{ y }}
        >
          <div className="w-[18rem] rounded-[2rem] border border-emerald-200/80 bg-white/80 p-6 shadow-[0_24px_80px_rgba(12,10,9,0.08)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.24em] text-emerald-700">
              Current Focus
            </p>
            <p className="mt-4 text-2xl font-medium leading-tight tracking-[-0.04em] text-stone-950">
              Building production-ready web applications, strengthening Java
              depth, and collaborating on meaningful software products.
            </p>
            <div className="mt-8 space-y-3 text-sm text-stone-600">
              <div className="flex items-center justify-between border-t border-emerald-200 pt-3">
                <span>Learning</span>
                <span>Bootstrap / Java</span>
              </div>
              <div className="flex items-center justify-between border-t border-emerald-200 pt-3">
                <span>Open to</span>
                <span>Software engineering roles</span>
              </div>
              <div className="flex items-center justify-between border-t border-emerald-200 pt-3">
                <span>Ask me about</span>
                <span>HTML / CSS / Java basics</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
