import Image from 'next/image'
import { Hero } from '@/components/hero'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

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
        body: 'Peter gör paella utanför Moiwak. 100 kr inkl dryck för vuxna och 70 kr för barn.',
        linkLabel: 'sardin.se',
        linkHref: 'https://sardin.se',
      },
      {
        date: '21 juli kl 8.00-10.00',
        title: 'Communal trail run med Peppe',
        body: 'Löpning till och från Järvsö klack. Start vid Moiwak. Fri frukost när vi kommer tillbaka och 10% rabatt i butiken hela dagen på hela sortimentet för alla som hänger med.',
        linkLabel: '@runforest',
        linkHref: 'https://instagram.com/runforest',
      },
      {
        date: '26 juli kl 9.00-12.00',
        title: 'Klätterkurs med Karin Trollin',
        body: 'Erfarna äventyraren och klättringsguiden Karin Trolin bördig från Forsa ger en nybörjarkurs i klättring. Samling vid Järvsö Bergcykelpark klockan 9.00. Från 12 år och uppåt. 500 kronor per deltagare betalas på plats. Utrustning ingår. Anmälan direkt till karin.trollin@xxxxxx.se senast den 24 juli.',
        linkLabel: 'äventyr.se',
        linkHref: 'https://äventyr.se',
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
      <SiteNav />

      <main id="top" className="flex flex-col bg-neutral-100">
        <Hero />

        {/* About / Introduction */}
        <section id="about" className="scroll-mt-16 bg-[#FFF7E7]">
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
              <Image src="/images/general/sunset_milsjon.jpeg" alt="" fill sizes="100vw" className="object-cover" />
            </div>
            <div className="relative -mx-(--section-x) aspect-[3/4] bg-neutral-200">
              <Image src="/images/general/jessica_lake.jpeg" alt="" fill sizes="100vw" className="object-cover" />
            </div>
            <div className="relative -mx-(--section-x) aspect-[4/5] bg-neutral-200">
              <Image src="/images/general/summer_landscape_jarvso.jpeg" alt="" fill sizes="100vw" className="object-cover" />
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

          {/* Desktop grid */}
          <div className="relative hidden grid-cols-12 gap-x-8 px-(--section-x) pt-20 lg:grid">
            {/* Berries — right side, near top */}
            <div className="relative col-start-10 col-end-13 row-start-1 row-span-3 h-[60vh] w-[23vw] justify-self-end">
              <Image
                src="/images/general/jessica_lake.jpeg"
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>

            {/* Heading */}
            <h2 className="col-start-4 col-end-10 row-start-2 self-start text-center font-sans text-6xl font-normal leading-[1.05] tracking-tight text-black xl:text-7xl">
              Moiwak
              <br />
              Outdoor supply
            </h2>

            {/* Paragraph */}
            <p className="col-start-4 col-end-10 row-start-3 mx-auto mt-8 max-w-xl text-center font-mono text-xs font-light leading-[1.6] text-black">
              Moiwak är en idé sprungen ur fyra familjers kärlek till Järvsö, naturen och ett
              hållbart liv. Det är den outdoorbutik vi själva saknat med ett utbud av de
              varumärken vi själva använder och litar på för aktiviteter lika mycket i bygdens
              berg, skogar och sjöar, som för större äventyr långt norröver och ibland på andra
              kontinenter.
            </p>

            {/* Waterfall + Yellow hood paired group — waterfall top aligns with second heading line; yellow hood sits to its right, overlapping bottom by ~3rem */}
            <div className="col-start-1 col-end-10 row-start-2 row-span-4 mt-[3.5rem] flex items-start gap-4 xl:mt-[4.5rem]">
              <div className="relative h-[60vh] w-[23vw] shrink-0">
                <Image
                  src="/images/general/sunset_milsjon.jpeg"
                  alt=""
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-[calc(60vh-4rem)] h-[75vh] w-[32vw] shrink-0">
                <Image
                  src="/images/general/summer_landscape_jarvso.jpeg"
                  alt=""
                  fill
                  sizes="24vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Concept text columns — starts ~25% down from top of image 3 */}
            <div className="col-start-9 col-end-13 row-start-2 row-span-4 mt-[calc(60vh+18vh)] space-y-6">
              {conceptItems.map((item) => (
                <div key={item.title}>
                  <h3 className="font-mono text-xs font-bold text-black">{item.title}</h3>
                  <p className="mt-1 font-mono text-xs font-light leading-[1.6] text-black">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section id="brands" className="relative scroll-mt-16 bg-white py-12 lg:py-16">
          {/* Vertical gridlines layer — full section height, passes behind heading */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr_0.3fr]"
          >
            <div />
            <div className="border-l border-black" />
            <div className="border-l border-black" />
            <div className="border-l border-black" />
            <div className="border-l border-black" />
            <div className="border-l border-black" />
          </div>

          <div className="relative">
            <h2 className="text-center font-sans text-5xl font-normal leading-none tracking-tight text-black xl:text-6xl">
              Varumärken
            </h2>

            <ul className="mt-16 grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr_0.3fr]">
              {Array.from({ length: 18 }).map((_, i) => {
                const isEmptyColumn = i % 6 === 5
                if (isEmptyColumn) return <li key={i} />
                return (
                  <li key={i} className="flex h-32 items-center justify-center p-6 lg:h-40">
                    <img
                      src="/logo/Moiwak_Logo_Black_-Beta.svg"
                      alt="Brand logo placeholder"
                      className="h-8 w-auto"
                    />
                  </li>
                )
              })}
            </ul>
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
        <section id="go-ghost" className="scroll-mt-16 px-(--section-x)">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6 lg:order-first">
                <h2 className="font-sans text-4xl font-black leading-[0.95] tracking-tight text-black sm:text-5xl lg:text-6xl">
                  Moiwak. Go ghost.
                </h2>

                <div className="space-y-4 font-mono text-xs font-light leading-[1.55] text-black sm:text-sm">
                  <p>Försvinn in i skogen, bergen och sjöarna.</p>
                  <p>In i vildmarkens vidder, vindar och vyer.</p>
                  <p>Uppslukas av äventyret eller av en stilla stund vid tjärnen.</p>
                  <p>Förlora dig i löpningen på stigen eller välj vägen minst vandrad.</p>
                  <p>Hänge dig åt cyklingen på gruset utmed älven.</p>
                  <p>Eller bemästra den med en kajak.</p>
                  <p>Njut av åkning, utför berget, eller av toppturen upp.</p>
                  <p>Försvinn i sällskap eller in i dig själv.</p>
                  <p>Försjunk i dina tankar eller i samtalen kring elden.</p>
                  <p>Gå till sömns under bar himmel eller in i tältet.</p>
                  <p>
                    Omfamna kylan eller vänd tillbaka till stugan insvept i en filt med en kaffe
                    vid kaminen.
                  </p>
                  <p>Gå vilse bland mossar och myrar för att hitta vad du så länge letat efter.</p>
                  <p>Hänförs av naturens närvaro, mystik och magi.</p>
                  <p>Se bara till att ta med dig rätt kläder, utrustning och proviant.</p>
                </div>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200 lg:aspect-auto">
                <Image
                  src="/images/general/jessica_lake.jpeg"
                  alt="Jessica vid sjön"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section id="community" className="scroll-mt-16 px-(--section-x)">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-sans text-4xl font-black leading-[0.95] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Community.
            </h2>

            <div className="mt-16 space-y-16">
              {communitySeasons.map((season) => (
                <div
                  key={season.season}
                  className="grid grid-cols-1 gap-10 sm:grid-cols-[160px_1fr] sm:gap-12 lg:gap-16"
                >
                  <div className="font-mono text-xs font-light text-neutral-500 sm:text-sm">
                    <p>{season.season}</p>
                  </div>

                  <ul className="space-y-10">
                    {season.events.map((event) => (
                      <li
                        key={event.title}
                        className="border-t border-black/10 pt-6 first:border-t-0 first:pt-0"
                      >
                        <p className="font-mono text-xs font-light text-neutral-500 sm:text-sm">
                          {event.date}
                        </p>
                        <h3 className="mt-1 font-mono text-xs font-bold text-black sm:text-sm">
                          {event.title}
                        </h3>
                        <p className="mt-2 font-mono text-xs font-light leading-[1.55] text-black sm:text-sm">
                          {event.body}
                        </p>
                        <p className="mt-2 font-mono text-xs font-light sm:text-sm">
                          <a
                            href={event.linkHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-black/30 underline-offset-2 hover:decoration-black"
                          >
                            {event.linkLabel}
                          </a>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
