'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

type Props = {
  src: string
  alt?: string
  sizes?: string
  className?: string
  /** Drift amount in percent. Positive = image moves up faster than scroll. */
  speed?: number
}

export function ParallaxImage({ src, alt = '', sizes, className, speed = 15 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed}%`, `${speed}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.div
        style={{ y }}
        className="absolute -inset-y-[30%] inset-x-0"
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </motion.div>
    </div>
  )
}
