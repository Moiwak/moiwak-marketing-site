'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  className?: string
  poster?: string
}

export function LazyVideo({ src, className, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const [preload, setPreload] = useState<'none' | 'auto'>('none')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setPreload('auto')
          el.load()
          el.play().catch(() => {})
          io.disconnect()
        }
      },
      { rootMargin: '600px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      className={className}
    />
  )
}
