import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState, type CSSProperties } from 'react'

type TechStackOrbitProps = {
  items: string[]
}

type OrbitStyle = CSSProperties & {
  '--item-count'?: number
  '--manual-rotate'?: string
  '--orbit-radius'?: string
  '--index'?: number
}

const toolLogoMap: Record<string, { slug: string; color: string }> = {
  angular: { slug: 'angular', color: 'DD0031' },
  typescript: { slug: 'typescript', color: '3178C6' },
  java: { slug: 'openjdk', color: 'EA2D2E' },
  springboot: { slug: 'springboot', color: '6DB33F' },
  postgresql: { slug: 'postgresql', color: '4169E1' },
  html5: { slug: 'html5', color: 'E34F26' },
  css3: { slug: 'css', color: '1572B6' },
  git: { slug: 'git', color: 'F05032' },
  react: { slug: 'react', color: '61DAFB' },
  tailwindcss: { slug: 'tailwindcss', color: '06B6D4' },
  sass: { slug: 'sass', color: 'CC6699' },
  figma: { slug: 'figma', color: 'F24E1E' },
  bootstrap: { slug: 'bootstrap', color: '7952B3' },
  mysql: { slug: 'mysql', color: '4479A1' },
  python: { slug: 'python', color: '3776AB' },
  powerbi: { slug: 'powerbi', color: 'F2C811' },
  jira: { slug: 'jira', color: '0052CC' },
}

function normalizeToolName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function toolLogo(name: string) {
  const normalized = normalizeToolName(name)
  const mapped = toolLogoMap[normalized]

  if (!mapped) {
    return {
      name,
      url: null,
    }
  }

  return {
    name,
    url: `https://cdn.simpleicons.org/${mapped.slug}/${mapped.color}`,
  }
}

function initials(name: string) {
  const parts = name.split(' ').filter(Boolean)
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase()
  }

  return parts
    .slice(0, 2)
    .map((part) => part[0] ?? '')
    .join('')
    .toUpperCase()
}

function TechStackOrbit({ items }: TechStackOrbitProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const step = useMemo(() => 360 / items.length, [items.length])

  const orbitStyle: OrbitStyle = {
    '--item-count': items.length,
    '--manual-rotate': `${-activeIndex * step}deg`,
    '--orbit-radius': items.length > 4 ? '7.25rem' : '6.35rem',
  }

  const activeTool = toolLogo(items[activeIndex])

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
              const visual = toolLogo(item)

              return (
                <button
                  key={item}
                  type="button"
                  className={`stack-orbit-item ${
                    activeIndex === index ? 'is-active' : ''
                  }`}
                  style={{ '--index': index } as OrbitStyle}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Focus ${item}`}
                  title={item}
                >
                  {visual.url ? (
                    <img
                      src={visual.url}
                      alt={item}
                      className="stack-orbit-item-logo"
                      loading="lazy"
                    />
                  ) : (
                    <span className="stack-orbit-item-fallback">
                      {initials(item)}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="stack-orbit-core">
          <span className="stack-orbit-core-label">Focused Stack</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={items[activeIndex]}
              initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(8px)', y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="stack-orbit-core-content"
            >
              <span className="stack-orbit-core-iconwrap">
                {activeTool.url ? (
                  <img
                    src={activeTool.url}
                    alt={activeTool.name}
                    className="stack-orbit-core-icon"
                    loading="lazy"
                  />
                ) : (
                  <span className="stack-orbit-item-fallback">
                    {initials(activeTool.name)}
                  </span>
                )}
              </span>
              <span className="stack-orbit-core-value">{activeTool.name}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-emerald-200 pt-5">
        <button
          type="button"
          onClick={goToPrevious}
          className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-800 transition-colors duration-300 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white"
        >
          Prev
        </button>

        <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-700">
          Logo orbit
        </p>

        <button
          type="button"
          onClick={goToNext}
          className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-800 transition-colors duration-300 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TechStackOrbit
