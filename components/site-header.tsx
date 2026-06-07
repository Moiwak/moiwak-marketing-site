export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 py-4 font-mono text-xs font-light text-black sm:px-10 lg:px-14">
        <a href="#top" aria-label="Moiwak — back to top" className="flex items-center">
          <img
            src="/logo/Moiwak_Logo_Black_-Beta.svg"
            alt="Moiwak"
            className="h-5 w-auto"
          />
        </a>
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#about"
              className="underline decoration-black/30 underline-offset-2 hover:decoration-black"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#brands"
              className="underline decoration-black/30 underline-offset-2 hover:decoration-black"
            >
              Brands
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="underline decoration-black/30 underline-offset-2 hover:decoration-black"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
