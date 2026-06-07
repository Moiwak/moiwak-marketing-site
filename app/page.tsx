import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const productPhotos = [
  { src: '/axe.jpg', alt: 'Axe' },
  { src: '/bag_mw.jpg', alt: 'Moiwak bag' },
  { src: '/blanket-black_white.jpg', alt: 'Black and white blanket' },
  { src: '/hydration_sticks.jpg', alt: 'Hydration sticks' },
  { src: '/protein-bar.jpg', alt: 'Protein bar' },
  { src: '/spirulina.jpg', alt: 'Spirulina' },
]

const conceptItems = [
  {
    title: 'Performance apparel & equipment',
    body: 'Carefully selected brands for activities in mountain and forest. Technical clothing, footwear, hard goods, accessories — everything functional, durable, and worth owning.',
  },
  {
    title: 'Food provisions',
    body: "Simple, quality food products — packed for the trail, the bike park, a day on the river, or enjoyed in-store with the village's best espresso.",
  },
  {
    title: 'Artisanal craft & objects',
    body: 'Textiles and objects from Järvsö and from places we love across South America, North America and beyond — each piece unique and traceable.',
  },
  {
    title: "What we don't carry",
    body: "Fast fashion, unverified supply chains, brands without environmental commitment. If it doesn't earn its place, it isn't on our shelves.",
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
      <SiteHeader />

      <main id="top">
        {/* Hero — unchanged */}
        <section className="relative h-dvh w-full overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Misty forest landscape"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-[12%] p-8 sm:flex-row sm:p-12 lg:p-16">
            <div className="flex w-full flex-col items-center gap-16 sm:flex-row sm:items-start sm:justify-between sm:gap-0">
              <img
                src="/logo/Moiwak_Logo_Black_-Beta.svg"
                alt="Moiwak Outdoor Supply"
                className="h-24 w-auto translate-x-0 sm:order-last sm:h-27 sm:-translate-y-2 sm:translate-x-3 lg:h-33"
              />

              <div className="-translate-x-4 text-center font-mono sm:translate-x-0 text-xs font-light leading-[1.35] text-black sm:flex sm:items-start sm:gap-24 sm:text-left sm:text-sm">
                <div className="hidden underline decoration-black/30 underline-offset-2 sm:block">
                  <p>
                    <a href="mailto:info@moiwak.com" className="no-underline">
                      info@moiwak.com
                    </a>
                  </p>
                  <p>+46 070-271 87 84</p>
                </div>
                <div>
                  <p>Opening in Järvsö and</p>
                  <p>online this summer.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 -translate-x-2 p-8 text-center font-mono text-xs font-light leading-[1.35] text-black sm:hidden">
            <div className="underline decoration-black/30 underline-offset-2">
              <p>info@moiwak.com</p>
              <p>+46 070-271 87 84</p>
            </div>
          </div>
        </section>

        {/* About / Introduction */}
        <section
          id="about"
          className="scroll-mt-16 bg-neutral-100 px-6 py-20 sm:px-10 sm:py-32 lg:px-14"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="font-sans text-5xl font-black leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl">
              An introduction
            </h2>

            <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-[160px_1fr] sm:gap-12 lg:grid-cols-[160px_1fr_1fr] lg:gap-16">
              <p className="font-mono text-xs font-light text-neutral-500 sm:text-sm">
                A summary
              </p>

              <div className="space-y-5 font-mono text-xs font-light leading-[1.55] text-black sm:text-sm">
                <p>
                  Moiwak is Järvsö&apos;s first premium outdoor and lifestyle multibrand retailer,
                  opening in July 2026 at Stenegård — one of Hälsingland&apos;s finest 19th-century
                  heritage estates and a UNESCO World Heritage Visitor Centre. We operate across
                  two channels: a physical store at Stenegård, benefiting from 100,000+ annual
                  visitors to Järvsö, and later this year, e-commerce at Moiwak.com.
                </p>
                <p>
                  Our assortment will span performance apparel from premium brands, hard-use
                  equipment, footwear, accessories, artisanal craft objects and quality food
                  provisions — always selected on merit, longevity and ethical production.
                </p>
              </div>

              <div className="space-y-5 font-mono text-xs font-light leading-[1.55] text-black sm:text-sm lg:col-start-3">
                <p>
                  Our long-term vision is to establish Moiwak as a destination for families and
                  people like us: for whom nature, friendship, food, adventure and stillness are
                  the very fabric of a meaningful life.
                </p>
                <p>
                  We invest in long-term brand relationships and present products in the context
                  they deserve: surrounded by the landscape they were made for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Concept */}
        <section className="bg-neutral-100 px-6 pb-20 sm:px-10 sm:pb-32 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-4xl font-sans text-4xl font-black leading-[0.95] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Curated around one idea: the things worth carrying.
            </h2>

            <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-[160px_1fr] sm:gap-12 lg:grid-cols-[160px_repeat(2,1fr)] lg:gap-x-16 lg:gap-y-12">
              <div className="font-mono text-xs font-light text-neutral-500 sm:text-sm">
                <p>The concept</p>
                <p>Assortment</p>
              </div>

              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2">
                {conceptItems.map((item) => (
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

        {/* Photo strip */}
        <section aria-label="Product photos" className="bg-neutral-100">
          <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6">
            {productPhotos.map((photo) => (
              <li key={photo.src} className="relative aspect-square overflow-hidden bg-neutral-200">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Sustainability */}
        <section className="bg-neutral-100 px-6 py-20 sm:px-10 sm:py-32 lg:px-14">
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
      </main>

      <SiteFooter />
    </>
  )
}
