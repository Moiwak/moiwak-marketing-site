import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden">
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
              <p><a href="mailto:info@moiwak.com" className="no-underline">info@moiwak.com</a></p>
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
    </main>
  )
}
