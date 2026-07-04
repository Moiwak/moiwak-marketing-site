'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const TEXT = 'Outdoor Supply'
const LOGO_DELAY_MS = 3000
const TEXT_DELAY_MS = 6000
const LETTER_STAGGER_MAX_S = 1.5
const SHOW_OVERLAY = false

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loopKey, setLoopKey] = useState(0)
  const [showLogo, setShowLogo] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    setShowLogo(false)
    setShowText(false)
    const t1 = setTimeout(() => setShowLogo(true), LOGO_DELAY_MS)
    const t2 = setTimeout(() => setShowText(true), TEXT_DELAY_MS)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [loopKey])

  const letterDelays = useMemo(
    () => TEXT.split('').map(() => Math.random() * LETTER_STAGGER_MAX_S),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loopKey],
  )

  const handleEnded = () => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    v.play()
    setLoopKey((k) => k + 1)
  }

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black lg:h-[min(56.25vw,1080px)]">
      <video
        ref={videoRef}
        src="/videos/moiwak-hero.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Mobile overlays — hidden on lg+ where desktop layout takes over */}
      <div className="absolute inset-0 lg:hidden">
        {/* Contact info — top right */}
        <div className="absolute top-6 right-6 text-right font-mono text-[11px] font-light leading-[1.5] text-white">
          <p>Moiwak Outdoor Supply</p>
          <p>Stenegård 1, 827 54 Järvsö</p>
          <p>Phone +46 70 271 87 84</p>
          <p className="mt-3">Öppettider</p>
          <p>Juli och augusti: varje dag</p>
          <p>11.00-16.00 samt till senare</p>
          <p>under eventkvällar på Stenegård.</p>
        </div>

        {/* Wordmark — bottom center */}
        <img
          src="/logo/moiwak-wordmark-white.svg"
          alt="Moiwak"
          className="absolute bottom-8 left-1/2 w-[85%] -translate-x-1/2"
        />
      </div>

      {SHOW_OVERLAY && (
      <div className="absolute inset-0 flex items-center justify-between px-8 sm:px-12 lg:px-16">
        <img
          src="/logo/Moiwak_Logo_White_-Beta.svg"
          alt="Moiwak"
          className={`h-24 w-auto transition-opacity duration-[1500ms] ease-out sm:h-32 lg:h-40 ${
            showLogo ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <p
          aria-label={TEXT}
          className="font-sans text-5xl font-normal tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {TEXT.split('').map((ch, i) => (
            <span
              key={`${loopKey}-${i}`}
              aria-hidden="true"
              className="inline-block transition-opacity duration-[1200ms] ease-out"
              style={{
                opacity: showText ? 1 : 0,
                transitionDelay: showText ? `${letterDelays[i]}s` : '0s',
              }}
            >
              {ch === ' ' ? ' ' : ch}
            </span>
          ))}
        </p>
      </div>
      )}
    </section>
  )
}
