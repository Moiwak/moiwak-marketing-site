'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  clip?: boolean
  /** Scroll progress (0-1) at which opacity reaches 1. Lower = faster fade-in. */
  endProgress?: number
  /** Starting opacity. */
  startOpacity?: number
}

export function ParallaxFade({
  children,
  className,
  clip = false,
  endProgress = 0.5,
  startOpacity = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.35],
    ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'],
  )
  const opacity = useTransform(
    scrollYProgress,
    [0, endProgress * 0.6, endProgress],
    [startOpacity, startOpacity, 1],
  )

  return (
    <motion.div
      ref={ref}
      style={clip ? { clipPath, opacity } : { opacity }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
