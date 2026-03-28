import { motion, useReducedMotion, type MotionProps } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { revealInView, smoothEase } from '../lib/motion'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
}> &
  MotionProps

function Reveal({
  children,
  className,
  delay = 0,
  ...rest
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      variants={revealInView}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        delay: prefersReducedMotion ? 0 : delay,
        ease: smoothEase,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
