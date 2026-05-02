export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Moiwak Outdoor Supply.
        </h1>
        <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
          Opening in Järvsö and online this summer.
        </p>
        <div className="mt-10 space-y-1 text-sm text-neutral-500">
          <p>
            <a href="mailto:info@moiwak.com" className="hover:text-neutral-900">
              info@moiwak.com
            </a>
          </p>
          <p>
            <a href="tel:+46702718784" className="hover:text-neutral-900">
              +46 070-271 87 84
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
