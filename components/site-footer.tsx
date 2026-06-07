export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-16 px-6 py-16 text-black sm:px-10 sm:py-24 lg:px-14"
      style={{ backgroundColor: '#E3E8EB' }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="font-mono text-xs font-light leading-[1.5] sm:text-sm">
          <p className="mb-6 text-neutral-500">Contact</p>
          <div className="underline decoration-black/30 underline-offset-2">
            <p>
              <a href="mailto:info@moiwak.com" className="no-underline">
                info@moiwak.com
              </a>
            </p>
            <p>+46 070-271 87 84</p>
          </div>
          <div className="mt-6 not-italic">
            <p>Stenegård, Järvsö</p>
            <p>Opening July 2026</p>
          </div>
        </div>

        <img
          src="/logo/Moiwak_Logo_Black_-Beta.svg"
          alt="Moiwak"
          className="h-8 w-auto self-start sm:self-end"
        />
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-black/10 pt-6 font-mono text-[10px] font-light text-neutral-500">
        © {new Date().getFullYear()} Moiwak
      </div>
    </footer>
  )
}
