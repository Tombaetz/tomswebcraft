import PricingSection from "@/components/PricingSection";
import AnimatedLogo from "@/components/AnimatedLogo";
import ServicesSection from "@/components/ServicesSection";
import MockupPage from "@/components/MockupPage";
import HeroHeadline from "@/components/HeroHeadline";
import CTA_End from "@/components/CTA_End";

export default function TomWebCraftLanding() {
  return (

    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <header className="w-full px-6 py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/50">
        <div className="flex items-center gap-3">

  {/* Logo */}
  <div className="flex items-end gap-1">

    <div className="w-1.5 h-6 rounded-full bg-[#F3F4F6]" />

    <div className="w-1.5 h-10 rounded-full bg-[#E9B44C]" />

    <div className="w-1.5 h-6 rounded-full bg-[#F3F4F6]" />

  </div>

  {/* Text */}
  <h1 className="text-xl font-semibold tracking-tight text-white">
    TomWebCraft
  </h1>

</div>

        <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition">
          Anfrage
        </button>
      </header>

      <AnimatedLogo />


      {/* Hero */}
      <section className="px-6 pt-40 pb-32 max-w-7xl mx-auto">

  <HeroHeadline />

</section>

      {/* Mockup Page */}
      <MockupPage />

      {/* Services */}
      <ServicesSection />
      
      {/*Pricing */}
      <PricingSection />


      {/* Potenzielles nächstes Feature ? */}
      

      {/* Projects */}
      <section id="projects" className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Design Concepts
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-white/10 to-white/5" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
     <CTA_End />

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-white/40 text-sm">
        © 2026 TomWebCraft • Modern Web Design
      </footer>
    </main>
  )
}