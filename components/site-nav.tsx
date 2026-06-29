'use client'

import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'Om Moiwak' },
  { href: '#brands', label: 'Varumärken' },
  { href: '#go-ghost', label: 'Go Ghost™' },
  { href: '#community', label: 'Community' },
  { href: '#contact', label: 'Kontakta oss' },
]

export function SiteNav() {
  const navRef = useRef<HTMLDivElement>(null)
  const [translateY, setTranslateY] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      const nav = navRef.current
      if (!nav) return
      const navHeight = nav.offsetHeight
      const heroHeight = window.innerHeight
      const restingTop = heroHeight - navHeight / 2
      const y = Math.max(0, restingTop - window.scrollY)
      setTranslateY(y)
      setVisible(window.scrollY > 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      ref={navRef}
      style={{ transform: `translateY(${translateY}px)` }}
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <nav
        className={`pointer-events-auto flex w-fit items-center justify-center gap-8 rounded-xl bg-white px-4 py-3 sm:gap-10`}
      >
        <a href="#top" aria-label="Moiwak" className="shrink-0">
          <img
            src="/logo/Moiwak_Logo_Black_-Beta.svg"
            alt="Moiwak"
            className="h-5 w-auto sm:h-6"
          />
        </a>

        <ul className="flex items-center gap-5 font-mono text-[10px] font-light text-black sm:gap-6 sm:text-[11px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:opacity-60">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
