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

function SnapchatIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 3c2.8 0 5 2.2 5 5v3c0 .8.4 1.5 1.1 1.9l1.4.8c.4.2.5.7.2 1l-1.5 1.5c-.3.3-.4.6-.4 1l.1.7c.1.5-.3 1-.8 1l-1.6.1c-.4 0-.7.2-.9.5l-.9 1.3c-.3.4-.8.5-1.2.3L12 19l-1.5.8c-.4.2-.9.1-1.2-.3l-.9-1.3c-.2-.3-.5-.5-.9-.5l-1.6-.1c-.5 0-.9-.5-.8-1l.1-.7c0-.4-.1-.7-.4-1l-1.5-1.5c-.3-.3-.2-.8.2-1l1.4-.8c.7-.4 1.1-1.1 1.1-1.9V8c0-2.8 2.2-5 5-5z" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const socials: { label: string; href: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { label: 'Instagram', href: 'https://instagram.com/moiwak', Icon: InstagramIcon },
  { label: 'YouTube', href: 'https://youtube.com/@moiwak', Icon: YoutubeIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/moiwak', Icon: LinkedinIcon },
  { label: 'Snapchat', href: 'https://snapchat.com/add/moiwak', Icon: SnapchatIcon },
]

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-16 pt-(--section-y) pb-12 px-(--section-x) text-black"
      style={{ backgroundColor: '#F0F1F2' }}
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

          <ul className="mt-8 flex items-center gap-5">
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
