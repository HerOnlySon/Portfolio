import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState, type CSSProperties } from 'react'
import { smoothEase } from '../lib/motion'

type TechStackOrbitProps = {
  items: string[]
}

type OrbitStyle = CSSProperties & {
  '--item-count'?: number
  '--manual-rotate'?: string
  '--orbit-radius'?: string
  '--index'?: number
}

const toolAccentMap: Record<string, string> = {
  angular: '#dd0031',
  typescript: '#3178c6',
  java: '#ea7a28',
  springboot: '#6db33f',
  postgresql: '#4169e1',
  html5: '#e34f26',
  css3: '#1572b6',
  git: '#f05032',
  react: '#61dafb',
  tailwindcss: '#06b6d4',
  sass: '#cc6699',
  figma: '#f24e1e',
  bootstrap: '#7952b3',
  mysql: '#4479a1',
  python: '#3776ab',
  powerbi: '#f2c811',
  jira: '#0052cc',
}

function normalizeToolName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function TechStackOrbit({ items }: TechStackOrbitProps) {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const step = useMemo(() => 360 / items.length, [items.length])

  const orbitStyle: OrbitStyle = {
    '--item-count': items.length,
    '--manual-rotate': `${-activeIndex * step}deg`,
    '--orbit-radius': items.length > 4 ? '8.6rem' : '7.25rem',
  }

  const activeTool = items[activeIndex]
  const activeAccent = toolAccentMap[normalizeToolName(activeTool)] ?? '#059669'

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % items.length)
  }

  return (
    <div className="stack-orbit-shell">
      <div className="stack-orbit-stage" style={orbitStyle}>
        <div className="stack-orbit-manual">
          <div className="stack-orbit-auto">
            {items.map((item, index) => {
              const accent = toolAccentMap[normalizeToolName(item)] ?? '#059669'

              return (
                <button
                  key={item}
                  type="button"
                  className={`stack-orbit-item ${
                    activeIndex === index ? 'is-active' : ''
                  }`}
                  style={
                    {
                      '--index': index,
                      '--orbit-accent': accent,
                    } as OrbitStyle
                  }
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Focus ${item}`}
                  title={item}
                >
                  <span className="stack-orbit-item-label">{item}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="stack-orbit-core">
          <span className="stack-orbit-core-label">Tech Stack</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTool}
              initial={prefersReducedMotion ? false : { opacity: 0, filter: 'blur(8px)', y: 8 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, filter: 'blur(8px)', y: -8 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.35,
                ease: smoothEase,
              }}
              className="stack-orbit-core-content"
            >
              <span
                className="stack-orbit-core-iconwrap"
                style={{ backgroundColor: `${activeAccent}1a`, color: activeAccent }}
              >
                <span className="stack-orbit-core-dot" />
              </span>
              <span className="stack-orbit-core-value">{activeTool}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-emerald-200 pt-5">
        <button
          type="button"
          onClick={goToPrevious}
          className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
        >
          Prev
        </button>

        <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-700">
          Interactive stack orbit
        </p>

        <button
          type="button"
          onClick={goToNext}
          className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TechStackOrbit
