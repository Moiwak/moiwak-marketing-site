'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

/**
 * Toggle to compare the two reveal animations with the designer.
 * 'mask'  — unified block slides down from above a clip mask (current pick)
 * 'fade'  — staggered opacity fade of heading → sub → paragraph (previous)
 */
const VARIANT: 'mask' | 'fade' = 'mask'

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

  const y = useTransform(scrollYProgress, [0.25, 0.45], ['-100%', '0%'])
  const mainOpacity = useTransform(scrollYProgress, [0, 0.25, 0.2501, 0.5], [0, 0, 0.4, 1])
  const subOpacity = useTransform(scrollYProgress, [0, 0.3, 0.3001, 0.5], [0, 0, 0.4, 1])
  const bodyOpacity = useTransform(scrollYProgress, [0, 0.35, 0.3501, 0.55], [0, 0, 0.4, 1])

  if (VARIANT === 'mask') {
    return (
      <div ref={ref} className={className}>
        <div className="pb-[0.05em] [clip-path:inset(0_-100vw)]">
          <motion.div style={{ y }}>
            <h2>{main}</h2>
            <p>{sub}</p>
            {body && <div className={bodyClassName}>{body}</div>}
          </motion.div>
        </div>
      </div>
    )
  }

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
