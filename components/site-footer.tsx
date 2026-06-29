export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative flex h-[55vh] w-full items-center overflow-hidden bg-black px-(--section-x) text-white"
    >
      <div className="flex w-1/3 flex-col gap-8 font-mono text-xs font-light leading-[1.5] sm:text-sm">
        <div>
          <p>Moiwak Outdoor Supply</p>
          <p>Stenegård 1, 827 54 Järvsö</p>
          <p>Phone +46 70 271 87 84</p>
          <p>
            <a
              href="mailto:info@moiwak.com"
              className="underline decoration-white/40 underline-offset-2 hover:decoration-white"
            >
              info@moiwak.com
            </a>
          </p>
        </div>

        <div>
          <p>Öppettider</p>
          <p>Juli och augusti: varje dag 11.00-16.00 samt till senare under eventkvällar på Stenegård.</p>
        </div>

        <p>Webshop lanseras under augusti.</p>
      </div>

      <div className="flex flex-1 justify-end">
        <img
          src="/logo/Moiwak_Logo_White_-Beta.svg"
          alt="Moiwak"
          className="h-auto w-[60vw] max-w-none"
        />
      </div>
    </footer>
  )
}
