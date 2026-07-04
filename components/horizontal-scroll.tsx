'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

/**
 * A horizontal scroll container that plays nice with Lenis-smoothed vertical scroll.
 *
 * On wheel:
 * - horizontal-dominant delta → intercept, scroll container's scrollLeft, prevent default
 * - vertical-dominant delta   → do nothing, let Lenis handle page scroll
 *
 * Needs a native listener with {passive: false} to preventDefault; React's onWheel is passive.
 */
export function HorizontalScroll({ className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let lockedAxis: 'x' | 'y' | null = null
    let lastWheelAt = 0
    const GESTURE_MS = 180

    const onWheel = (e: WheelEvent) => {
      const now = performance.now()
      if (now - lastWheelAt > GESTURE_MS) lockedAxis = null
      lastWheelAt = now

      const absX = Math.abs(e.deltaX)
      const absY = Math.abs(e.deltaY)
      if (!lockedAxis) lockedAxis = absX > absY ? 'x' : 'y'

      if (lockedAxis === 'y') return
      e.preventDefault()
      el.scrollLeft += e.deltaX
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div ref={ref} className={`${className ?? ''} touch-pan-x overscroll-x-contain`}>
      {children}
    </div>
  )
}
