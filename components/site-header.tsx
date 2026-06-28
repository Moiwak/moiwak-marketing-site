const navLinks = [
  { href: '#about', label: 'Om Moiwak' },
  { href: '#brands', label: 'Varumärken' },
  { href: '#go-ghost', label: 'Go Ghost' },
  { href: '#community', label: 'Community' },
  { href: '#contact', label: 'Kontakta oss' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm">
      <nav className="flex items-center justify-end px-6 py-4 font-mono text-xs font-light text-black sm:px-10 lg:px-14">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline decoration-black/30 underline-offset-2 hover:decoration-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
