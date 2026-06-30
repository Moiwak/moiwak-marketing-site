export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative h-[min(29.90vw,574px)] w-full overflow-hidden bg-black text-white"
    >
      <div className="relative mx-auto h-full w-full max-w-[1920px]">
        {/* Contact text (Figma y=135, left=107, w=359) */}
        <div className="absolute top-[min(7.03vw,135px)] left-[min(5.57vw,107px)] flex w-[min(18.70vw,359px)] flex-col gap-8 font-mono text-xs font-light leading-[1.5] sm:text-sm">
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

        {/* Wordmark (Figma y=114, right=80, 1314x303) */}
        <img
          src="/logo/moiwak-wordmark-white.svg"
          alt="Moiwak"
          className="absolute top-[min(5.94vw,114px)] right-[min(4.17vw,80px)] w-[min(68.44vw,1314px)] aspect-[1314/303]"
        />
      </div>
    </footer>
  )
}
