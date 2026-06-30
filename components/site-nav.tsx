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
      <nav className="pointer-events-auto flex w-fit items-center justify-center gap-8 rounded-xl bg-white px-4 py-3 sm:gap-10">
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
