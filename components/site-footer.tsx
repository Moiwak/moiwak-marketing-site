const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/moiwak_outdoor_supply',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4zm5.29-7.03a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0z',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1GEe6pKzZm/',
    path: 'M13.5 21.95v-8.29h2.79l.42-3.24H13.5V8.35c0-.94.26-1.58 1.6-1.58h1.72V3.87a22.9 22.9 0 0 0-2.5-.13c-2.48 0-4.18 1.51-4.18 4.29v2.4H7.34v3.24h2.79v8.29h3.37z',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@moiwakoutdoorsupply',
    path: 'M16.6 5.82a4.28 4.28 0 0 1-1.03-2.82h-3.15v12.65a2.55 2.55 0 0 1-2.55 2.55 2.55 2.55 0 0 1-2.55-2.55 2.55 2.55 0 0 1 2.55-2.55c.27 0 .53.05.77.13v-3.21a5.71 5.71 0 0 0-.77-.05A5.71 5.71 0 0 0 4.16 15.65a5.71 5.71 0 0 0 5.71 5.71 5.71 5.71 0 0 0 5.71-5.71V9.34a7.4 7.4 0 0 0 4.32 1.38V7.57a4.32 4.32 0 0 1-3.3-1.75z',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@moiwakoutdoorsupply',
    path: 'M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81zM10 15V9l5.2 3-5.2 3z',
  },
]

function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="block text-white/70 transition-colors hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-[18px] w-[18px]"
            >
              <path d={s.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative h-[438px] w-full overflow-hidden bg-black text-white lg:h-[min(29.90vw,574px)]"
    >
      {/* Mobile layout */}
      <div className="relative h-full w-full lg:hidden">
        <img
          src="/logo/moiwak-wordmark-white.svg"
          alt="Moiwak"
          style={{ width: 357, height: 82, top: 44, left: 20 }}
          className="absolute"
        />
        <div
          style={{ top: 181, left: 29, width: 359 }}
          className="absolute font-mono text-[15px] font-normal leading-[19px] text-white"
        >
          <p>Moiwak Outdoor Supply</p>
          <p>Portlidret</p>
          <p>Stenegård 1</p>
          <p>827 54 Järvsö</p>
          <p>Phone +46 70 271 87 84</p>
          <p>
            <a
              href="mailto:info@moiwak.com"
              className="underline decoration-white/60 underline-offset-2"
            >
              info@moiwak.com
            </a>
          </p>
          <p className="mt-5">Öppettider</p>
          <p>Juli och augusti: varje dag 11.00-16.00 samt till senare under eventkvällar på Stenegård.</p>
          <p className="mt-5">Webshop lanseras under augusti.</p>
          <SocialIcons className="mt-5" />
        </div>
      </div>

      <div className="relative mx-auto hidden h-full w-full max-w-[1920px] lg:block">
        {/* Contact text (Figma y=135, left=107, w=359) */}
        <div className="absolute top-[min(7.03vw,135px)] left-[min(5.57vw,107px)] flex w-[min(18.70vw,359px)] flex-col gap-4 font-mono text-[13px] font-normal leading-[1.375]">
          <div>
            <p>Moiwak Outdoor Supply</p>
            <p>Portlidret</p>
            <p>Stenegård 1</p>
            <p>827 54 Järvsö</p>
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
            <p>{'Juli och augusti: varje dag 11.00‑16.00 samt till senare under eventkvällar på Stenegård.'}</p>
          </div>

          <p>Webshop lanseras under augusti.</p>

          <SocialIcons className="mt-2" />
        </div>

        {/* Wordmark (Figma y=114, right=80, 1314x303) */}
        <img
          src="/logo/moiwak-wordmark-white.svg"
          alt="Moiwak"
          className="absolute top-[min(5.94vw,114px)] right-[min(4.17vw,80px)] w-[min(68.39vw,1313px)] aspect-[1313/303]"
        />
      </div>
    </footer>
  )
}
