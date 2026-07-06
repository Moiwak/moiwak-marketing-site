import Image from 'next/image'
import { Hero } from '@/components/hero'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { LazyVideo } from '@/components/lazy-video'
import { ParallaxImage } from '@/components/parallax-image'
import { ParallaxFade } from '@/components/parallax-fade'
import { MaskReveal } from '@/components/mask-reveal'
import { HorizontalScroll } from '@/components/horizontal-scroll'
import { HeadingReveal } from '@/components/heading-reveal'

const SHOW_PHOTO_STRIP = false
const SHOW_SUSTAINABILITY = false
const SHOW_MOBILE_EXTRA_COMMUNITY_CARDS = true

// Single source of truth for brand logos — both mobile and desktop render from this.
// desktopH: rendered height in px on desktop (scales via vw calc)
// mobile: absolute position + size in the 393×290 Figma box. `null` = falls back to the flowing overflow grid below the box.
const brands: {
  src: string
  alt: string
  desktopH: number
  mobile: { w: number; h: number; top: number; left: number } | null
}[] = [
  { src: '/brands/abril_aventura.svg', alt: 'Abril Aventura', desktopH: 65, mobile: { w: 90, h: 34, top: 27, left: 23 } },
  { src: '/brands/big_agnes.png', alt: 'Big Agnes', desktopH: 117, mobile: { w: 76, h: 67, top: 11, left: 159 } },
  { src: '/brands/calazo.png', alt: 'Calazo', desktopH: 144, mobile: { w: 81, h: 87, top: 0, left: 284 } },
  { src: '/brands/carhartt.png', alt: 'Carhartt', desktopH: 102, mobile: { w: 88, h: 50, top: 118, left: 24 } },
  { src: '/brands/darn_tough.png', alt: 'Darn Tough', desktopH: 130, mobile: { w: 74, h: 74, top: 111, left: 160 } },
  { src: '/brands/devold.png', alt: 'Devold', desktopH: 25, mobile: { w: 84, h: 12, top: 143, left: 282 } },
  { src: '/brands/dometic.png', alt: 'Dometic', desktopH: 58, mobile: { w: 93, h: 21, top: 247, left: 22 } },
  { src: '/brands/fubuki.png', alt: 'Fubuki', desktopH: 85, mobile: { w: 89, h: 35, top: 240, left: 152 } },
  { src: '/brands/helinox.png', alt: 'Helinox', desktopH: 85, mobile: { w: 89, h: 31, top: 242, left: 280 } },
  { src: '/brands/hestra.png', alt: 'Hestra', desktopH: 58, mobile: null },
  { src: '/brands/hydro_flask.png', alt: 'Hydro Flask', desktopH: 129, mobile: null },
  { src: '/brands/klattermusen.png', alt: 'Klättermusen', desktopH: 68, mobile: null },
  { src: '/brands/letherman.png', alt: 'Leatherman', desktopH: 25, mobile: null },
  { src: '/brands/moraknil.png', alt: 'Morakniv', desktopH: 24, mobile: null },
  { src: '/brands/msr.png', alt: 'MSR', desktopH: 55, mobile: null },
  { src: '/brands/nalgene.png', alt: 'Nalgene', desktopH: 28, mobile: null },
  { src: '/brands/poc.png', alt: 'POC', desktopH: 40, mobile: null },
  { src: '/brands/primus.png', alt: 'Primus', desktopH: 30, mobile: null },
  { src: '/brands/rab.png', alt: 'Rab', desktopH: 38, mobile: null },
  { src: '/brands/silva.png', alt: 'Silva', desktopH: 28, mobile: null },
  { src: '/brands/stanley.png', alt: 'Stanley', desktopH: 34, mobile: null },
  { src: '/brands/thermarest.png', alt: 'Therm-a-Rest', desktopH: 25, mobile: null },
  { src: '/brands/trangia.png', alt: 'Trangia', desktopH: 28, mobile: null },
  { src: '/brands/uco.png', alt: 'UCO', desktopH: 32, mobile: null },
  { src: '/brands/victorinox.png', alt: 'Victorinox', desktopH: 28, mobile: null },
]

const productPhotos = [
  { src: '/axe.jpg', alt: 'Axe' },
  { src: '/blanket-black_white.jpg', alt: 'Black and white blanket' },
  { src: '/hydration_sticks.jpg', alt: 'Hydration sticks' },
  { src: '/protein-bar.jpg', alt: 'Protein bar' },
  { src: '/spirulina.jpg', alt: 'Spirulina' },
]

// About intro — two paragraphs on mobile, joined into one on desktop.
const aboutIntroParagraphs: string[] = [
  'Moiwak är en idé sprungen ur fyra familjers kärlek till Järvsö, naturen och ett hållbart liv.',
  'Det är den outdoorbutik vi själva saknat med ett utbud av de varumärken vi själva använder och litar på för aktiviteter lika mycket i bygdens berg, skogar och sjöar, som för större äventyr långt norröver och ibland på andra kontinenter.',
]

// Go Ghost prose — one source, rendered as line-broken sentences on desktop and joined into flowing paragraphs on mobile.
const goGhostBlocks: string[][] = [
  [
    'Försvinn in i skogen, bergen och sjöarna.',
    'In i vildmarkens vidder, vindar och vyer.',
    'Uppslukas av äventyret eller av en stilla stund vid tjärnen.',
    'Förlora dig i löpningen på stigen eller välj vägen minst vandrad.',
    'Hänge dig åt cyklingen på gruset utmed älven.',
    'Eller bemästra den med en kajak.',
  ],
  [
    'Njut av åkning, utför berget, eller av toppturen upp.',
    'Försvinn i sällskap eller in i dig själv.',
    'Försjunk i dina tankar eller i samtalen kring elden.',
  ],
  [
    'Gå till sömns under bar himmel eller in i tältet.',
    'Omfamna kylan eller vänd tillbaka till stugan insvept i en filt med en kaffe vid kaminen.',
  ],
  [
    'Gå vilse bland mossar och myrar för att hitta vad du så länge letat efter.',
    'Hänförs av naturens närvaro, mystik och magi.',
  ],
  ['Se bara till att ta med dig rätt kläder, utrustning och proviant.'],
]

const conceptItems = [
  {
    title: 'Kläder',
    body: 'Noggrant utvalda varumärken för vandring, värme, camping, regn och kyla, löpning på stigen, skidåkning, gravel och för livet i stugan.',
  },
  {
    title: 'Utrustning',
    body: 'Det mesta du behöver i ryggsäcken för dagar eller dygn i naturen - inklusive själva ryggsäcken.',
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
        body: 'Under sommaren serverar Peter paella på gårdsplanen utanför butiken. Håll utkik efter datum här på sajten.',
        linkLabel: 'sardin.se',
        linkHref: 'https://sardinsolna.se/',
      },
      {
        date: '21 juli kl 8.00-10.00',
        title: 'Communal trail run med Peppe',
        body: 'Löpning till och från Järvsö klack. Start vid Moiwak. Fri frukost när vi kommer tillbaka och 10% rabatt i butiken hela dagen på hela sortimentet för alla som hänger med.',
        linkLabel: '@placeholder',
        linkHref: '#',
        media: { type: 'video' as const, src: '/videos/jitter-run.mp4' },
      },
      {
        date: '26 juli kl 9.00-12.00',
        title: 'Klätterkurs med Karin Trolin',
        body: 'Erfarna äventyraren och klättringsguiden Karin Trolin bördig från Forsa ger en kurser i klättring och forspaddling.',
        linkLabel: 'www.explore61n.se',
        linkHref: 'https://www.explore61n.se/',
        media: { type: 'image' as const, src: '/images/general/mountain-climber.jpg' },
      },
    ],
  },
  {
    label: 'Event',
    season: 'Höst 2026',
    events: [
      {
        date: 'Järvsö 4–6 september 2026',
        title: 'Utefesten i Undersvik',
        body: 'Besök oss i butiken eller på Utefesten i Undersvik. Erbjudanden och nya produkter i butiken.',
        linkLabel: 'utemagasinet.se/utefest-2026',
        linkHref: 'https://www.utemagasinet.se/utefest-2026/',
        background: '/images/general/outdoor_market_undersvik.jpeg',
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
      <main
        id="top"
        className="mx-auto flex max-w-[640px] flex-col overflow-x-clip bg-neutral-100 lg:max-w-none"
      >
        <Hero />

        {/* About / Introduction */}
        <section id="about" className="scroll-mt-16 bg-white lg:bg-[#FFF7E7]">
          <SiteNav />
          {/* Mobile: single-column stack matching Figma. Desktop: 12-col asymmetric grid. */}
          <div className="flex flex-col lg:hidden">
            <h2 className="mx-auto w-fit pt-20 pb-[82px] text-center font-sans text-[40px] font-normal leading-[34px] tracking-[-0.02em] whitespace-nowrap text-black">
              Moiwak
              <br />
              Outdoor&nbsp;Supply
            </h2>

            <div className="relative mr-auto w-[283px] aspect-[283/425] bg-neutral-200">
              <Image src="/images/general/waterfall.jpg" alt="" fill sizes="72vw" className="object-cover" />
            </div>

            <div className="space-y-4 px-6 pt-24 pb-24 text-center font-mono text-[15px] font-light leading-[19px] text-black">
              {aboutIntroParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="relative ml-auto w-[283px] aspect-[283/424] bg-neutral-200">
              <Image src="/images/general/store_gear.png" alt="" fill sizes="72vw" className="object-cover" />
            </div>

            <div className="space-y-[18px] px-6 pt-24 pb-24">
              {conceptItems.map((item) => (
                <div key={item.title}>
                  <h3 className="font-mono text-[15px] font-bold leading-[19px] text-black">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[15px] font-light leading-[19px] text-black">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mx-auto aspect-[393/491] w-full max-w-[430px] bg-neutral-200">
              <Image src="/images/general/yellow_raincoat.png" alt="" fill sizes="100vw" className="object-cover" />
            </div>
          </div>

          {/* Desktop — strict Figma px (1920 reference, scales down via min(vw,px)) */}
          <div className="relative mx-auto hidden h-[min(88.59vw,1701px)] w-full max-w-[1920px] lg:block">
            {/* Berries — right, near top (Figma y=131, right=80, 422x632) */}
            <div className="absolute top-[min(6.41vw,123px)] right-[min(4.17vw,80px)] w-[min(21.98vw,422px)] aspect-[422/632]">
              <ParallaxImage
                src="/images/general/yellow_raincoat.png"
                sizes="22vw"
                speed={35}
                className="h-full w-full"
              />
            </div>

            {/* Heading + intro paragraph — centered to frame (Figma y=389, w=523) */}
            <HeadingReveal
              main="Moiwak"
              sub={<span className="whitespace-nowrap">Outdoor&nbsp;Supply</span>}
              body={
                <p className="text-center font-mono text-[13px] font-normal leading-[1.375] text-black">
                  {aboutIntroParagraphs.join(' ')}
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
                src="/images/general/store_gear.png"
                sizes="30vw"
                speed={40}
                className="h-full w-full"
              />
            </div>

            {/* Concept text — right, aligned with image top */}
            <div className="absolute top-[min(54.69vw,1050px)] left-[min(66.09vw,1269px)] w-[min(29.69vw,570px)]">
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

        {/* Brands — Mobile (Figma-positioned box + overflow grid for brands without a mobile position yet) */}
        <section id="brands-mobile" className="w-full bg-white py-20 lg:hidden">
          <div className="relative mx-auto h-[290px] w-[393px]">
            {brands.filter((b) => b.mobile).map((b) => (
              <img
                key={b.src}
                src={b.src}
                alt={b.alt}
                style={{
                  width: `${b.mobile!.w}px`,
                  height: `${b.mobile!.h}px`,
                  top: `${b.mobile!.top}px`,
                  left: `${b.mobile!.left}px`,
                }}
                className="absolute object-contain"
              />
            ))}
          </div>
          <div className="mx-auto mt-8 grid w-[393px] grid-cols-3 gap-x-4 gap-y-8 px-6">
            {brands.filter((b) => !b.mobile).map((b) => (
              <div key={b.src} className="flex h-16 items-center justify-center">
                <img src={b.src} alt={b.alt} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* Brands — Desktop */}
        <section id="brands" className="relative mx-auto hidden min-h-[min(56.25vw,1080px)] w-full max-w-[1920px] scroll-mt-16 flex-col justify-between bg-white py-[min(7.6vw,146px)] lg:flex">
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
                {brands.map((b) => (
                  <li key={b.src} className="flex h-40 items-center justify-center p-4 lg:h-[min(10.42vw,200px)]">
                    <img
                      src={b.src}
                      alt={b.alt}
                      style={{
                        height: `min(${((b.desktopH / 1920) * 100).toFixed(2)}vw, ${b.desktopH}px)`,
                      }}
                      className="w-auto max-h-full max-w-full object-contain"
                    />
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
        <section id="go-ghost" className="relative w-full bg-black lg:h-[min(56.25vw,1080px)] lg:overflow-hidden">
          <LazyVideo
            src="/videos/mountains-timelapse.mp4"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Mobile layout */}
          <div className="relative flex flex-col items-center px-6 pt-12 pb-20 lg:hidden">
            <h2 className="w-full text-center font-sans text-[40px] font-normal leading-[34px] tracking-[-0.02em] text-white">
              Go Ghost
            </h2>

            <div className="mt-16 space-y-4 text-center font-mono text-[15px] font-normal leading-[19px] tracking-normal text-white">
              {goGhostBlocks.map((block, i) => (
                <div key={i}>
                  <p>{block.join(' ')}</p>
                </div>
              ))}
            </div>

            <img
              src="/logo/ghost.svg"
              alt=""
              aria-hidden
              className="mt-14 w-[63px] h-[87px]"
            />
          </div>

          <div className="relative mx-auto hidden h-full w-full max-w-[1920px] lg:block">
            {/* Heading (Figma y=484, left=79, w=323) */}
            <h2 className="absolute top-[min(25.21vw,484px)] left-[min(4.11vw,79px)] whitespace-nowrap font-sans text-[min(4.17vw,80px)] font-normal leading-[0.9] tracking-[-0.02em] text-white">
              Go Ghost
            </h2>

            {/* Paragraph (Figma y=337, left=589, w=741) */}
            <div className="absolute top-[min(17.55vw,337px)] left-[min(30.68vw,589px)] w-[min(38.59vw,741px)] space-y-6 text-center font-mono text-[min(0.83vw,16px)] font-normal leading-[1.375] text-white">
              {goGhostBlocks.map((block, i) => (
                <div key={i}>
                  {block.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              ))}
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

        {/* Community — Mobile */}
        <section id="community-mobile" className="w-full bg-white pt-16 lg:hidden">
          <h2 className="px-4 text-center font-sans text-[40px] font-normal leading-[34px] tracking-[-0.02em] text-black">
            Moiwak
            <br />
            community
          </h2>

          {(() => {
            const events = communitySeasons.flatMap((s) => s.events)
            const paella = events.find((e) => e.title === 'Peters paella!')
            const otherEvents = events.filter((e) => e.title !== 'Peters paella!')
            return (
              <>
                {paella && (
                  <div className="px-4">
                    <div className="mt-12 border-t border-black" />

                    <div className="mt-16 flex flex-col items-center gap-6 px-2 text-center font-mono text-[15px] font-normal leading-[19px] text-black">
                      <p>{paella.date}</p>
                      <div className="flex items-center justify-center gap-10 [&_img]:invert">
                        <img
                          src="/illustrations/paella-pan.svg"
                          alt=""
                          aria-hidden
                          style={{ width: 134, height: 102 }}
                        />
                        <img
                          src="/illustrations/paella-group.svg"
                          alt="Peters paella"
                          style={{ width: 166, height: 90 }}
                        />
                      </div>
                      <p className="whitespace-pre-line">{paella.body}</p>
                      <p>
                        <a
                          href={paella.linkHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2"
                        >
                          {paella.linkLabel}
                        </a>
                      </p>
                    </div>

                    <div className="mt-16 border-t border-black" />
                  </div>
                )}

                {SHOW_MOBILE_EXTRA_COMMUNITY_CARDS && otherEvents.map((event) => {
                  const media = 'media' in event ? event.media : undefined
                  const background = 'background' in event ? (event.background as string) : undefined
                  return (
                    <article
                      key={event.title}
                      className="relative flex h-[320px] w-full flex-col overflow-hidden bg-black p-6 text-white"
                    >
                      {media?.type === 'video' && (
                        <LazyVideo
                          src={media.src}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      )}
                      {media?.type === 'image' && (
                        <Image
                          src={media.src}
                          alt=""
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      )}
                      {background && (
                        <Image
                          src={background}
                          alt=""
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      )}
                      <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-black/0"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-black/0 to-black/80"
                      />

                      <p className="relative text-center font-mono text-[15px] font-normal leading-[19px] text-white/95">
                        {event.date}
                      </p>

                      {media?.type !== 'video' && (
                        <div className="absolute right-6 bottom-6 left-6 space-y-2 text-center">
                          <h3 className="font-sans text-[22px] font-normal leading-[1.05] tracking-[-0.02em]">
                            {event.title}
                          </h3>
                          <p className="font-mono text-[13px] font-normal leading-[17px]">
                            {event.body}
                          </p>
                          <p className="font-mono text-[13px] font-normal leading-[17px]">
                            <a
                              href={event.linkHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-white/60 underline-offset-2"
                            >
                              {event.linkLabel}
                            </a>
                          </p>
                        </div>
                      )}
                    </article>
                  )
                })}
              </>
            )
          })()}
        </section>

        {/* Community — Desktop */}
        <section id="community" className="relative hidden h-[min(56.25vw,1080px)] w-full bg-white lg:block">
          <HorizontalScroll className="flex h-full items-center gap-[min(1.20vw,23px)] overflow-x-auto overscroll-x-contain pl-[min(3.65vw,70px)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <h2 className="shrink-0 -translate-y-8 translate-x-2 pr-8 font-sans text-[min(4.17vw,80px)] font-normal leading-[0.9] tracking-[-0.02em] text-black">
              Community
            </h2>

            {communitySeasons
              .flatMap((season) => season.events.map((event) => ({ ...event, season: season.season })))
              .map((event, index) => {
                const media = 'media' in event ? event.media : undefined
                const background = 'background' in event ? (event.background as string) : undefined
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
                          className="-translate-y-20 scale-[1.35] object-cover object-[85%_5%]"
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
                        <h3 className="absolute top-[14%] right-20 origin-right -translate-y-1/2 -rotate-90 font-sans text-[42px] font-normal leading-[1.0] tracking-tight text-left whitespace-nowrap text-white">
                          Klätterkurs med
                          <br />
                          Karin Trolin
                        </h3>

                        {/* Bottom text block — centered, ~1/3 of card */}
                        <div className="absolute right-8 bottom-8 left-8 space-y-2 text-center font-mono text-[min(0.83vw,16px)] font-normal leading-[1.375] text-white">
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
                      <>
                        {/* Date + illustrations pinned to the top */}
                        <div className="relative flex translate-x-2 flex-col items-center text-center">
                          <p className="translate-y-2 font-mono text-xs font-light text-white">{event.date}</p>

                          <img
                            src="/illustrations/paella-pan.svg"
                            alt=""
                            aria-hidden
                            className="mt-[min(3.5vw,68px)] w-[min(9.11vw,175px)]"
                          />

                          <img
                            src="/illustrations/paella-group.svg"
                            alt="Peters paella"
                            className="mt-[min(3.5vw,68px)] w-[min(20.16vw,387px)] max-w-none -translate-x-2"
                          />
                        </div>

                        {/* Body + link — anchored at card bottom, matches cards 3/4 */}
                        <div className="absolute right-8 bottom-8 left-8 space-y-2 text-center font-mono text-[min(0.83vw,16px)] font-normal leading-[1.375] text-white">
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

                    {!media && background && (
                      <>
                        <Image
                          src={background}
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
                        <h3 className="absolute top-[14%] right-20 origin-right -translate-y-1/2 -rotate-90 font-sans text-[42px] font-normal leading-[1.0] tracking-tight text-left whitespace-nowrap text-white">
                          Utefesten i
                          <br />
                          Undersvik
                        </h3>

                        {/* Bottom text block */}
                        <div className="absolute right-8 bottom-8 left-8 space-y-2 text-center font-mono text-[min(0.83vw,16px)] font-normal leading-[1.375] text-white">
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

                    {!media && !background && event.title !== 'Peters paella!' && (
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
          </HorizontalScroll>
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
