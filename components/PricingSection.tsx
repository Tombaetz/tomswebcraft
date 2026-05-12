export default function PricingSection() {
  return (
    <section className="px-6 pb-32 max-w-7xl mx-auto text-white">
      <div className="text-center mb-16">
        <p className="text-white/40 uppercase tracking-[0.25em] text-sm mb-4">
          Preise
        </p>

        <h2 className="text-5xl font-semibold">
          Transparent. Klar. Fair.
        </h2>

        <p className="mt-5 text-white/50 text-lg max-w-xl mx-auto">
          Keine versteckten Kosten. Du weißt von Anfang an, was du bekommst.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className=" relative rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 cursor-pointer hover:scale-[1.05] hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_80px_rgba(255,255,255,0.12)] ">
          <h3 className="text-3xl font-semibold mb-4">
            Starter
          </h3>

          <p className="text-5xl font-bold mb-6">
            €499
          </p>
        </div>

        <div className=" relative rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 cursor-pointer hover:scale-[1.05] hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_80px_rgba(255,255,255,0.12)]">
          <h3 className="text-3xl font-semibold mb-4">
            Business
          </h3>

          <p className="text-5xl font-bold mb-6">
            €999
          </p>
        </div>

        <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 cursor-pointer hover:scale-[1.05] hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_80px_rgba(255,255,255,0.12)]">
          <h3 className="text-3xl font-semibold mb-4">
            Premium
          </h3>

          <p className="text-5xl font-bold mb-6">
            €1999
          </p>
        </div>

      </div>
    </section>
  )
}