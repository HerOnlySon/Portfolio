import Reveal from './Reveal'

function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-emerald-200 pt-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-700">
            About
          </p>
        </Reveal>

        <Reveal className="max-w-4xl">
          <p className="text-3xl font-medium leading-tight tracking-[-0.04em] text-stone-950 sm:text-4xl">
            I&apos;m a software engineer with hands-on experience across full-stack development, consulting, and data analysis.
          </p>
          <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
            My current work centers on Java, Angular, Spring Boot, RESTful APIs,
            PostgreSQL, and Git. Alongside that, I enjoy building small web
            projects and practice apps because I learn best by creating,
            testing, and improving real things instead of only watching
            tutorials.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['Current Role', 'Software Engineer intern at Shaper'],
              ['Looking For', 'Beginner-friendly web and Java collaborations'],
              ['Strengths', 'Problem-solving, responsive UI, and continuous learning'],
            ].map(([title, copy], index) => (
              <Reveal
                key={title}
                delay={0.08 + index * 0.06}
                className="rounded-[1.5rem] border border-emerald-200 bg-white p-5 shadow-[0_12px_32px_rgba(28,25,23,0.04)]"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">
                  {title}
                </p>
                <p className="mt-3 text-base leading-7 text-stone-700">{copy}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
