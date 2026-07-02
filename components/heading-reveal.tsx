'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

type Props = {
  main: ReactNode
  sub: ReactNode
  body?: ReactNode
  className?: string
  bodyClassName?: string
}

export function HeadingReveal({ main, sub, body, className, bodyClassName }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const mainOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.2501, 0.5],
    [0, 0, 0.4, 1],
  )
  const subOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.3001, 0.5],
    [0, 0, 0.4, 1],
  )
  const bodyOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.3501, 0.55],
    [0, 0, 0.4, 1],
  )

  return (
    <div ref={ref} className={className}>
      <motion.h2 style={{ opacity: mainOpacity }}>{main}</motion.h2>
      <motion.p style={{ opacity: subOpacity }}>{sub}</motion.p>
      {body && (
        <motion.div style={{ opacity: bodyOpacity }} className={bodyClassName}>
          {body}
        </motion.div>
      )}
    </div>
  )
}
