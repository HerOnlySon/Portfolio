import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useEffect, useState } from 'react'
import { navItems, siteConfig } from '../data/portfolio'

function Navbar() {
  const prefersReducedMotion = useReducedMotion()
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const storedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return storedTheme ? storedTheme === 'dark' : prefersDark
  })
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode)
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visibleEntry?.target.id) {
          return
        }

        setActiveSection(`#${visibleEntry.target.id}`)
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    )

    sections.forEach((section) => {
      observer.observe(section!)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.24,
  })

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-emerald-700 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className={`site-nav-shell transition-[padding,background-color,border-color,box-shadow] duration-500 ${
            isScrolled
              ? 'rounded-[2rem] border px-4 py-3 shadow-[0_18px_45px_rgba(12,10,9,0.18)]'
              : 'rounded-full border px-5 py-3.5 shadow-[0_10px_30px_rgba(12,10,9,0.16)]'
          } backdrop-blur-xl`}
        >
          <div className="flex items-center justify-between gap-4">
            <a
              href="#home"
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-stone-950 transition-colors duration-300 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-200 bg-emerald-50 text-[11px] text-emerald-700">
                {siteConfig.initials}
              </span>
              <span className="hidden sm:inline">{siteConfig.role}</span>
            </a>

            <div className="flex items-center gap-3">
              <ul className="hidden items-center gap-2 text-sm text-stone-600 md:flex">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href

                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={`inline-flex rounded-full px-4 py-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                          isActive
                            ? 'bg-emerald-700 text-white shadow-[0_10px_24px_rgba(4,120,87,0.28)]'
                            : 'hover:bg-emerald-50 hover:text-emerald-700'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>

              <button
                type="button"
                onClick={() => setIsDarkMode((current) => !current)}
                className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>
        </nav>

        <div className="site-nav-mobile mt-3 overflow-x-auto rounded-full border px-3 py-2 shadow-[0_10px_30px_rgba(12,10,9,0.12)] backdrop-blur-xl md:hidden">
          <ul className="flex min-w-max items-center gap-2 text-sm text-stone-600">
            {navItems.map((item) => {
              const isActive = activeSection === item.href

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-full px-3 py-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                      isActive
                        ? 'bg-emerald-700 text-white'
                        : 'hover:bg-emerald-50 hover:text-emerald-700'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <motion.div
        className="mt-3 h-px origin-left bg-emerald-700/75"
        style={prefersReducedMotion ? undefined : { scaleX }}
      />
    </header>
  )
}

export default Navbar
