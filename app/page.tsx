import Image from 'next/image'
import { Hero } from '@/components/hero'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { LazyVideo } from '@/components/lazy-video'
import { ParallaxImage } from '@/components/parallax-image'
import { ParallaxFade } from '@/components/parallax-fade'
import { MaskReveal } from '@/components/mask-reveal'
import { HeadingReveal } from '@/components/heading-reveal'

const SHOW_PHOTO_STRIP = false
const SHOW_SUSTAINABILITY = false

const productPhotos = [
  { src: '/axe.jpg', alt: 'Axe' },
  { src: '/blanket-black_white.jpg', alt: 'Black and white blanket' },
  { src: '/hydration_sticks.jpg', alt: 'Hydration sticks' },
  { src: '/protein-bar.jpg', alt: 'Protein bar' },
  { src: '/spirulina.jpg', alt: 'Spirulina' },
]

const conceptItems = [
  {
    title: 'Kläder',
    body: 'Noggrant utvalda varumärken för vandring, värme, camping, regn och kyla, löpning på stigen, skidåkning, gravel och för livet i stugan.',
  },
  {
    title: 'Utrustning',
    body: 'Det mesta du behöver i ryggsäcken för dagar eller dygn i naturen - inklusive sharyggsäcken.',
  },
  {
    title: 'Proviant',
    body: 'Proviant för mindre och större äventyr, turer och tältnätter.',
  },
  {
    title: 'Cabin',
    body: 'Filtar, tofflor, böcker och spel för återhämtning i stugan inför nästa äventyr.',
  },
]

const communitySeasons = [
  {
    label: 'Event',
    season: 'Sommar 2026',
    events: [
      {
        date: '14 juli kl 16.00-19.00',
        title: 'Peters paella!',
        body: 'Peter gör paella utanför Moiwak. 100 kr inkl dryck för vuxna och 70 kr för barn.',
        linkLabel: 'sardin.se',
        linkHref: 'https://sardin.se',
      },
      {
        date: '21 juli kl 8.00-10.00',
        title: 'Communal trail run med Peppe',
        body: 'Löpning till och från Järvsö klack. Start vid Moiwak. Fri frukost när vi kommer tillbaka och 10% rabatt i butiken hela dagen på hela sortimentet för alla som hänger med.',
        linkLabel: '@runforest',
        linkHref: 'https://instagram.com/runforest',
        media: { type: 'video' as const, src: '/videos/jitter-run.mp4' },
      },
      {
        date: '26 juli kl 9.00-12.00',
        title: 'Klätterkurs med Karin Trollin',
        body: 'Erfarna äventyraren och klättringsguiden Karin Trolin bördig från Forsa ger en nybörjarkurs i klättring. Samling vid Järvsö Bergcykelpark klockan 9.00. Från 12 år och uppåt. 500 kronor per deltagare betalas på plats. Utrustning ingår. Anmälan direkt till karin.trollin@xxxxxx.se senast den 24 juli.',
        linkLabel: 'äventyr.se',
        linkHref: 'https://äventyr.se',
        media: { type: 'image' as const, src: '/images/general/mountain-climber.jpg' },
      },
    ],
  },
  {
    label: 'Event',
    season: 'Höst 2026',
    events: [
      {
        date: '4-6 september',
        title: 'Utefesten i Undersvik',
        body: 'Besök oss i butiken eller på Utefesten i Undersvik. Erbjudanden och nya produkter i butiken.',
        linkLabel: 'utemagasinet.se/utefest-2026',
        linkHref: 'https://www.utemagasinet.se/utefest-2026/',
      },
    ],
  },
]

const sustainabilityItems = [
  {
    title: 'Brands with environmental commitment',
    body: 'Credible sustainability programmes, repair initiatives and responsible sourcing — non-negotiable criteria for every brand partner.',
  },
  {
    title: 'Longevity over consumption',
    body: 'We sell gear that lasts a decade. Not fast fashion. Not trend cycles. Products worth repairing.',
  },
  {
    title: 'Local roots, global standards',
    body: 'Embedded in the Järvsö community — sourcing locally where possible, giving back to the region.',
  },
  {
    title: 'No-waste store philosophy',
    body: 'Minimal packaging, digital-first receipts, a repair-and-resell corner in-store.',
  },
]

export default function Home() {
  return (
    <>
      <main id="top" className="flex flex-col overflow-x-clip bg-neutral-100">
        <Hero />

        {/* About / Introduction */}
        <section id="about" className="scroll-mt-16 bg-[#FFF7E7]">
          <SiteNav />
          {/* Mobile: simple stack. Desktop: 12-col asymmetric grid. */}
          <div className="flex flex-col gap-10 px-(--section-x) py-24 lg:hidden">
            <h2 className="text-center font-sans text-4xl font-normal leading-[1.05] tracking-tight text-black">
              Moiwak
              <br />
              Outdoor supply
            </h2>
            <p className="text-center font-mono text-xs font-light leading-[1.55] text-black">
              Moiwak är en idé sprungen ur fyra familjers kärlek till Järvsö, naturen och ett
              hållbart liv. Det är den outdoorbutik vi själva saknat med ett utbud av de
              varumärken vi själva använder och litar på för aktiviteter lika mycket i bygdens
              berg, skogar och sjöar, som för större äventyr långt norröver och ibland på andra
              kontinenter.
            </p>
            <div className="relative -mx-(--section-x) aspect-[3/4] bg-neutral-200">
              <Image src="/images/general/waterfall.jpg" alt="" fill sizes="100vw" className="object-cover" />
            </div>
            <div className="relative -mx-(--section-x) aspect-[3/4] bg-neutral-200">
              <Image src="/images/general/berries.jpg" alt="" fill sizes="100vw" className="object-cover" />
            </div>
            <div className="relative -mx-(--section-x) aspect-[4/5] bg-neutral-200">
              <Image src="/images/general/yellow-outfit.jpg" alt="" fill sizes="100vw" className="object-cover" />
            </div>
            <div className="space-y-6">
              {conceptItems.map((item) => (
                <div key={item.title}>
                  <h3 className="font-mono text-xs font-bold text-black">{item.title}</h3>
                  <p className="mt-1 font-mono text-xs font-light leading-[1.55] text-black">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop — strict Figma px (1920 reference, scales down via min(vw,px)) */}
          <div className="relative mx-auto hidden h-[min(88.59vw,1701px)] w-full max-w-[1920px] lg:block">
            {/* Berries — right, near top (Figma y=131, right=80, 422x632) */}
            <div className="absolute top-[min(6.41vw,123px)] right-[min(4.17vw,80px)] w-[min(21.98vw,422px)] aspect-[422/632]">
              <ParallaxImage
                src="/images/general/berries.jpg"
                sizes="22vw"
                speed={35}
                className="h-full w-full"
              />
            </div>

            {/* Heading + intro paragraph — centered to frame (Figma y=389, w=523) */}
            <HeadingReveal
              main="Moiwak"
              sub="Outdoor supply"
              body={
                <p className="text-center font-mono text-[13px] font-normal leading-[1.375] text-black">
                  Moiwak är en idé sprungen ur fyra familjers kärlek till Järvsö, naturen och ett
                  hållbart liv. Det är den outdoorbutik vi själva saknat med ett utbud av de
                  varumärken vi själva använder och litar på för aktiviteter lika mycket i bygdens
                  berg, skogar och sjöar, som för större äventyr långt norröver och ibland på andra
                  kontinenter.
                </p>
              }
              bodyClassName="relative left-1/2 mt-[min(3.80vw,73px)] w-[min(38.59vw,741px)] -translate-x-1/2"
              className="absolute bottom-[min(52.08vw,1000px)] left-1/2 w-[min(27.24vw,523px)] -translate-x-1/2 text-center font-sans text-[min(4.17vw,80px)] font-normal leading-[0.875] tracking-[-0.02em] text-black"
            />

            {/* Waterfall — left (Figma y=457, left=80, 422x633) */}
            <div className="absolute top-[min(23.39vw,449px)] left-[min(4.17vw,80px)] w-[min(21.98vw,422px)] aspect-[422/633]">
              <ParallaxImage
                src="/images/general/waterfall.jpg"
                sizes="22vw"
                speed={25}
                className="h-full w-full"
              />
            </div>

            {/* Yellow — center-left (Figma y=987, left=526, 572x714) */}
            <div className="absolute top-[min(51.41vw,987px)] left-[min(27.40vw,526px)] w-[min(29.79vw,572px)] aspect-[572/714]">
              <ParallaxImage
                src="/images/general/yellow-outfit.jpg"
                sizes="30vw"
                speed={40}
                className="h-full w-full"
              />
            </div>

            {/* Concept text — right (Figma y=1129, left=1269, w=570) */}
            <div className="absolute top-[min(60.36vw,1159px)] left-[min(66.09vw,1269px)] w-[min(29.69vw,570px)]">
              <MaskReveal>
                <div className="space-y-3">
                  {conceptItems.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-mono text-[13px] font-semibold leading-[1.375] text-black">
                        {item.title}
                      </h3>
                      <p className="font-mono text-[13px] font-normal leading-[1.375] text-black">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </MaskReveal>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section id="brands" className="relative mx-auto flex min-h-[min(56.25vw,1080px)] w-full max-w-[1920px] scroll-mt-16 flex-col justify-between bg-white py-[min(7.6vw,146px)]">
          {/* Vertical gridlines layer — 6 lines, 5 columns between them, inset by Figma padding */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-[min(3.44vw,66px)] right-[min(2.86vw,55px)] grid grid-cols-5 border-x border-black"
          >
            <div />
            <div className="border-l border-black" />
            <div className="border-l border-black" />
            <div className="border-l border-black" />
            <div className="border-l border-black" />
          </div>

          <div className="relative pl-[min(3.44vw,66px)] pr-[min(2.86vw,55px)]">
            <div className="relative">
              <h2 className="text-center font-sans text-[min(4.17vw,80px)] font-normal leading-[0.875] tracking-[-0.02em] text-black">
                Varumärken
              </h2>

              <ul className="mt-28 grid grid-cols-5">
                {[
                  { src: '/brands/r1-c1.svg', h: 65 },
                  { src: '/brands/r1-c2.png', h: 117 },
                  { src: '/brands/r1-c3.png', h: 144 },
                  { src: '/brands/r1-c4.png', h: 102 },
                  { src: '/brands/r1-c5.png', h: 130 },
                  { src: '/brands/r2-c1.png', h: 25 },
                  { src: '/brands/r2-c2.png', h: 58 },
                  { src: '/brands/r2-c3.png', h: 85 },
                  { src: '/brands/r2-c4.png', h: 85 },
                  { src: '/brands/r2-c5.png', h: 58 },
                  { src: '/brands/r3-c1.png', h: 129 },
                  { src: '/brands/r3-c2.png', h: 68 },
                  null,
                  null,
                  null,
                ].map((logo, i) => (
                  <li key={i} className="flex h-40 items-center justify-center p-4 lg:h-[min(10.42vw,200px)]">
                    {logo && (
                      <img
                        src={logo.src}
                        alt=""
                        style={{
                          height: `min(${((logo.h / 1920) * 100).toFixed(2)}vw, ${logo.h}px)`,
                        }}
                        className="w-auto max-h-full max-w-full object-contain"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Photo strip — hidden for Moiwak, kept for Abril Aventura clone */}
        {SHOW_PHOTO_STRIP && (
          <section aria-label="Product photos" className="bg-neutral-100">
            <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-5">
              {productPhotos.map((photo) => (
                <li
                  key={photo.src}
                  className="relative aspect-square overflow-hidden bg-neutral-200"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Go Ghost */}
        <section id="go-ghost" className="relative h-[min(56.25vw,1080px)] w-full overflow-hidden bg-black">
          <LazyVideo
            src="/videos/mountains-timelapse.mp4"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative mx-auto h-full w-full max-w-[1920px]">
            {/* Heading (Figma y=484, left=79, w=323) */}
            <h2 className="absolute top-[min(25.21vw,484px)] left-[min(4.11vw,79px)] whitespace-nowrap font-sans text-[min(4.17vw,80px)] font-normal leading-[0.9] tracking-[-0.02em] text-white">
              Go Ghost
            </h2>

            {/* Paragraph (Figma y=337, left=589, w=741) */}
            <div className="absolute top-[min(17.55vw,337px)] left-[min(30.68vw,589px)] w-[min(38.59vw,741px)] space-y-6 text-center font-mono text-[min(0.83vw,16px)] font-normal leading-[1.375] text-white">
              <div>
                <p>Försvinn in i skogen, bergen och sjöarna.</p>
                <p>In i vildmarkens vidder, vindar och vyer.</p>
                <p>Uppslukas av äventyret eller av en stilla stund vid tjärnen.</p>
                <p>Förlora dig i löpningen på stigen eller välj vägen minst vandrad.</p>
                <p>Hänge dig åt cyklingen på gruset utmed älven.</p>
                <p>Eller bemästra den med en kajak.</p>
              </div>

              <div>
                <p>Njut av åkning, utför berget, eller av toppturen upp.</p>
                <p>Försvinn i sällskap eller in i dig själv.</p>
                <p>Försjunk i dina tankar eller i samtalen kring elden.</p>
              </div>

              <div>
                <p>Gå till sömns under bar himmel eller in i tältet.</p>
                <p>
                  Omfamna kylan eller vänd tillbaka till stugan insvept i en filt med en kaffe vid
                  kaminen.
                </p>
              </div>

              <div>
                <p>Gå vilse bland mossar och myrar för att hitta vad du så länge letat efter.</p>
                <p>Hänförs av naturens närvaro, mystik och magi.</p>
              </div>

              <div>
                <p>Se bara till att ta med dig rätt kläder, utrustning och proviant.</p>
              </div>
            </div>

            {/* Ghost (Figma y=460, left=1751, 85x120) */}
            <img
              src="/logo/ghost.svg"
              alt=""
              aria-hidden
              className="absolute top-[min(23.96vw,460px)] left-[min(91.20vw,1751px)] w-[min(4.43vw,85px)] aspect-[85/120]"
            />
          </div>
        </section>

        {/* Community */}
        <section id="community" className="relative h-[min(56.25vw,1080px)] w-full bg-white">
          <div className="flex h-full items-center gap-[min(1.20vw,23px)] overflow-x-auto overscroll-x-contain pl-[min(2.08vw,40px)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <h2 className="shrink-0 -translate-y-8 translate-x-2 pr-8 font-sans text-[min(4.17vw,80px)] font-normal leading-[0.9] tracking-[-0.02em] text-black">
              Community
            </h2>

            {communitySeasons
              .flatMap((season) => season.events.map((event) => ({ ...event, season: season.season })))
              .map((event, index) => {
                const media = 'media' in event ? event.media : undefined
                return (
                  <article
                    key={event.title}
                    className={`relative flex h-[min(43.54vw,836px)] w-[min(21.98vw,422px)] shrink-0 flex-col justify-between overflow-hidden bg-black p-6 text-white ${
                      index === 1 ? '' : 'rounded-[min(1.30vw,25px)]'
                    }`}
                  >
                    {media?.type === 'video' && (
                      <LazyVideo
                        src={media.src}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                    {media?.type === 'image' && (
                      <>
                        <Image
                          src={media.src}
                          alt=""
                          fill
                          sizes="22vw"
                          className="object-cover"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 to-black/0"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-black/0 to-black/75"
                        />

                        {/* Date — top of card */}
                        <p className="relative text-center font-mono text-xs font-light text-white/90">
                          {event.date}
                        </p>

                        {/* Title — rotated 90° (reads bottom-to-top on the right edge) */}
                        <h3 className="absolute top-[28%] right-14 origin-right -translate-y-1/2 -rotate-90 font-sans text-4xl font-semibold leading-[0.95] tracking-tight text-right whitespace-nowrap text-white">
                          Klätterkurs med
                          <br />
                          Karin Trollin
                        </h3>

                        {/* Bottom text block — centered, ~1/3 of card */}
                        <div className="absolute right-6 bottom-6 left-6 space-y-2 text-center font-mono text-[11px] font-light leading-[1.3] text-white">
                          <p>{event.body}</p>
                          <p>
                            <a
                              href={event.linkHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-white/60 underline-offset-2 hover:decoration-white"
                            >
                              {event.linkLabel}
                            </a>
                          </p>
                        </div>
                      </>
                    )}

                    {!media && event.title === 'Peters paella!' && (
                      <div className="relative flex h-[80%] -translate-y-4 translate-x-2 flex-col items-center justify-between text-center">
                        <p className="translate-y-6 font-mono text-xs font-light text-white">{event.date}</p>

                        <img
                          src="/illustrations/paella-pan.svg"
                          alt=""
                          aria-hidden
                          className="w-[min(9.11vw,175px)] translate-y-4"
                        />

                        <img
                          src="/illustrations/paella-group.svg"
                          alt="Peters paella"
                          className="w-[min(20.16vw,387px)] max-w-none -translate-x-2 translate-y-4"
                        />

                        <div className="-translate-x-2 translate-y-4 space-y-3 px-2">
                          <p className="text-center font-mono text-[min(0.83vw,16px)] font-normal leading-[1.375] text-white">
                            {event.body}
                          </p>
                          <p className="-translate-y-2 text-center font-mono text-[min(0.83vw,16px)] font-normal">
                            <a
                              href={event.linkHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-white/60 underline-offset-2 hover:decoration-white"
                            >
                              {event.linkLabel}
                            </a>
                          </p>
                        </div>
                      </div>
                    )}

                    {!media && event.title !== 'Peters paella!' && (
                      <>
                        <p className="relative text-center font-mono text-xs font-light text-white/80 sm:text-sm">
                          {event.date}
                        </p>
                        <div className="relative space-y-4 text-center">
                          <h3 className="font-sans text-2xl font-normal leading-tight tracking-tight">
                            {event.title}
                          </h3>
                          <p className="font-mono text-xs font-light leading-[1.6] text-white/85 sm:text-sm">
                            {event.body}
                          </p>
                          <p className="font-mono text-xs font-light sm:text-sm">
                            <a
                              href={event.linkHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-white/40 underline-offset-2 hover:decoration-white"
                            >
                              {event.linkLabel}
                            </a>
                          </p>
                        </div>
                        <p className="relative text-center font-mono text-[10px] uppercase tracking-wider text-white/50">
                          {event.season}
                        </p>
                      </>
                    )}
                  </article>
                )
              })}

            {/* Right gutter so the last card can scroll fully into view */}
            <div className="shrink-0 pr-[min(4.17vw,80px)]" aria-hidden />
          </div>
        </section>

        {/* Sustainability */}
        {SHOW_SUSTAINABILITY && (
        <section className="scroll-mt-16 px-(--section-x)">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-4xl font-sans text-4xl font-black leading-[0.95] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Sustainability is not an afterthought.
              <br />
              It is a filter.
            </h2>

            <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-[160px_1fr] sm:gap-12 lg:grid-cols-[160px_1fr_1fr] lg:gap-16">
              <div className="font-mono text-xs font-light text-neutral-500 sm:text-sm">
                <p>Our commitment</p>
                <p>Sustainability</p>
              </div>

              <p className="font-mono text-xs font-light leading-[1.55] text-black sm:text-sm">
                As individuals, we are deeply committed to living and consuming more sustainably,
                and that conviction is fundamental to everything Moiwak does. We prioritise locally
                produced food and goods, short supply chains, and brands that share our commitment
                to responsible materials, honest manufacturing and long product lifespans. This is
                also why we are joining 1% FOR THE PLANET.
              </p>

              <div className="space-y-8 lg:col-start-3">
                {sustainabilityItems.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-mono text-xs font-bold text-black sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-mono text-xs font-light leading-[1.55] text-black sm:text-sm">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        )}

        <SiteFooter />
      </main>
    </>
  )
}
