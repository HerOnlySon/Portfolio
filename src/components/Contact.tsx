import Reveal from './Reveal'
import { contactLinks } from '../data/portfolio'

function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-200 bg-white px-6 py-12 shadow-[0_18px_50px_rgba(28,25,23,0.05)] sm:px-10 sm:py-14">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-700">
            Contact
          </p>
        </Reveal>

        <div className="mt-5 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.05em] text-stone-950 sm:text-4xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              I&apos;m open to software engineering opportunities, web and Java
              collaborations, and conversations about frontend architecture,
              Java development, and responsive design.
            </p>
          </Reveal>

          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <Reveal key={link.label} delay={index * 0.06}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-emerald-200 px-5 py-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  <span>
                    <span className="text-sm uppercase tracking-[0.24em] text-emerald-700">
                      {link.label}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-stone-500">
                      {link.copy}
                    </span>
                  </span>
                  <span className="text-right text-sm font-medium text-stone-950 transition-transform duration-500 group-hover:translate-x-1 sm:text-base">
                    {link.value}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
