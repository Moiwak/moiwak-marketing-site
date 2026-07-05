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

      // If we're locked to x but the user has clearly switched to a vertical
      // gesture (Y strongly dominates X), release the lock immediately so
      // page scroll resumes without a "dead" first wheel burst.
      if (lockedAxis === 'x' && absY > absX * 2) lockedAxis = null

      // Bias toward horizontal: any real X input on this element hijacks the gesture,
      // unless it's clearly a vertical scroll (Y dominates X by ~2x or more).
      if (!lockedAxis) {
        if (absX >= 1 && absY < absX * 2) lockedAxis = 'x'
        else lockedAxis = 'y'
      }

      if (lockedAxis === 'y') return

      // While locked to horizontal, consume the event fully so Lenis / page scroll
      // never sees the Y component. Cards move only in X.
      e.preventDefault()
      e.stopPropagation()
      el.scrollLeft += e.deltaX
    }

    // Capture phase so we intercept before Lenis's window-level listener runs.
    el.addEventListener('wheel', onWheel, { passive: false, capture: true })
    return () => el.removeEventListener('wheel', onWheel, { capture: true })
  }, [])

  return (
    <div
      ref={ref}
      className={`${className ?? ''} touch-pan-x overscroll-contain [overscroll-behavior:contain]`}
    >
      {children}
    </div>
  )
}
