import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const storedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return storedTheme ? storedTheme === 'dark' : prefersDark
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode)
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => {
    const nextValue = !isDarkMode
    setIsDarkMode(nextValue)
  }

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.25,
  })

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full border border-emerald-200/80 bg-white/90 px-5 py-3 shadow-[0_10px_30px_rgba(12,10,9,0.05)] backdrop-blur">
          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-950 transition-colors duration-300 hover:text-emerald-700"
          >
            LMN
          </a>

          <div className="flex items-center gap-3">
            <ul className="hidden items-center gap-6 text-sm text-stone-600 sm:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors duration-300 hover:text-emerald-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 transition-colors duration-300 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </nav>

        <div className="mt-3 overflow-x-auto rounded-full border border-emerald-200/70 bg-white/70 px-3 py-2 shadow-[0_10px_30px_rgba(12,10,9,0.03)] backdrop-blur sm:hidden">
          <ul className="flex min-w-max items-center gap-4 text-sm text-stone-600">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-full px-3 py-1.5 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        className="mt-3 h-px origin-left bg-emerald-700/75"
        style={{ scaleX }}
      />
    </header>
  )
}

export default Navbar
