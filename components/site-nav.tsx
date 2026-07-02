const navLinks = [
  { href: '#about', label: 'Om Moiwak' },
  { href: '#brands', label: 'Varumärken' },
  { href: '#go-ghost', label: 'Go Ghost™' },
  { href: '#community', label: 'Community' },
  { href: '#contact', label: 'Kontakta oss' },
]

export function SiteNav() {
  return (
    <div className="pointer-events-none sticky top-0 z-50 -mt-6 -mb-6 flex justify-center px-4">
      <nav className="pointer-events-auto flex h-[min(4.38vw,84px)] w-[min(45.89vw,881px)] items-center rounded-[min(1.04vw,20px)] bg-white pl-[min(1.46vw,28px)] pr-[min(3.59vw,69px)]">
        <a href="#top" aria-label="Moiwak" className="shrink-0">
          <img
            src="/logo/moiwak-wordmark-black.svg"
            alt="Moiwak"
            className="h-[min(1.51vw,29px)] w-auto"
          />
        </a>

        <ul className="ml-auto flex w-[min(31.56vw,606px)] items-center justify-between font-mono text-[min(0.83vw,16px)] font-normal text-black">
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
