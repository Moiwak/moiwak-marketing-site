import type { ComponentType, SVGProps } from 'react'

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.5C18.88 4 12 4 12 4s-6.88 0-8.6.5A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.5a29 29 0 0 0 .46 5.08A2.78 2.78 0 0 0 3.4 18.5c1.72.5 8.6.5 8.6.5s6.88 0 8.6-.5a2.78 2.78 0 0 0 1.94-1.92A29 29 0 0 0 23 11.5a29 29 0 0 0-.46-5.08z" />
      <polygon points="9.75 8.5 15.5 11.5 9.75 14.5 9.75 8.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const socials: { label: string; href: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { label: 'Instagram', href: 'https://instagram.com/moiwak', Icon: InstagramIcon },
  { label: 'YouTube', href: 'https://youtube.com/@moiwak', Icon: YoutubeIcon },
]

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-16 pt-(--section-y) pb-12 px-(--section-x) text-black"
      style={{ backgroundColor: '#F0F1F2' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 font-mono text-xs font-light leading-[1.5] sm:grid-cols-3 sm:gap-10 sm:text-sm">
          <div>
            <img
              src="/logo/Moiwak_Logo_Black_-Beta.svg"
              alt="Moiwak"
              className="h-12 w-auto"
            />
          </div>

          <div>
            <p className="mb-3 text-neutral-500">Kontakta oss</p>
            <p>Moiwak Outdoor Supply</p>
            <p>Stenegård 1, 827 54 Järvsö</p>
            <div className="mt-2 underline decoration-black/30 underline-offset-2">
              <p>Tel: 070-271 87 84</p>
              <p>
                <a href="mailto:info@moiwak.com" className="no-underline">
                  info@moiwak.com
                </a>
              </p>
            </div>

            <ul className="mt-4 flex items-center gap-5">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block text-black/70 transition-colors hover:text-black"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-neutral-500">Öppettider</p>
            <p>Juli och augusti: varje dag 11.00-16.00 samt till senare under eventkvällar på Stenegård.</p>
            <p className="mt-3">Webshop lanseras under augusti.</p>

            <p className="mt-8 mb-3 text-neutral-500">Hitta hit</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Stenegård+1,+827+54+Järvsö"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Stenegård 1 in Google Maps"
              className="block w-full overflow-hidden border border-black/10"
            >
              <iframe
                title="Moiwak location, Stenegård 1, Järvsö"
                src="https://www.google.com/maps?q=Stenegård+1,+827+54+Järvsö&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full grayscale contrast-110"
              />
            </a>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-black/10 pt-6 font-mono text-[10px] font-light text-neutral-500">
        © {new Date().getFullYear()} Moiwak
      </div>
    </footer>
  )
}
