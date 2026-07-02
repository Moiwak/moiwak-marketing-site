'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

/**
 * Toggle to compare the two reveal animations with the designer.
 * 'mask' — content slides down from above a clip mask (current pick)
 * 'fade' — simple opacity fade-in (previous ParallaxFade behaviour)
 */
const VARIANT: 'mask' | 'fade' = 'mask'

type Props = {
  children: ReactNode
  className?: string
  /** Start of reveal (scroll progress 0–1). */
  start?: number
  /** End of reveal (scroll progress 0–1). */
  end?: number
}

export function MaskReveal({ children, className, start = 0.25, end = 0.45 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [start, end], ['-100%', '0%'])
  const opacity = useTransform(scrollYProgress, [0, start * 0.6, end], [0, 0, 1])

  if (VARIANT === 'mask') {
    return (
      <div ref={ref} className={className}>
        <div className="[clip-path:inset(0_-100vw)]">
          <motion.div style={{ y }}>{children}</motion.div>
        </div>
      </div>
    )
  }

  return (
    <motion.div ref={ref} style={{ opacity }} className={className}>
      {children}
    </motion.div>
  )
}
