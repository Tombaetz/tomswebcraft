import FitnessConcept from "./Designs/FitnessConcept";

export default function DesignConcepts() {
  return (
    <section
      id="projects"
      className="px-6 pb-40 max-w-7xl mx-auto"
    >

      {/* Heading */}
      <div className="mb-20">

        <p className="text-white/35 uppercase tracking-[0.35em] text-sm mb-5">
          Design Concepts
        </p>

        <h3
          className="
            text-4xl
            md:text-6xl
            font-semibold
            tracking-tight
            leading-tight
            max-w-4xl
          "
        >
          Digitale Konzepte mit Fokus auf Atmosphäre,
          Klarheit und moderne Nutzererfahrung.
        </h3>

      </div>

      {/* Concepts */}
      <div className="space-y-10">

        <FitnessConcept />

        {/* 
          Später hier weitere Concepts:

          <BarberConcept />
          <RestaurantConcept />
        
        */}

      </div>

    </section>
  );
}