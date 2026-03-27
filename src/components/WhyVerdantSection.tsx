import leafImg from "@/assets/leaf.png";

const points = [
  { title: "Data-Driven Approach", description: "Every recommendation grounded in rigorous analysis and real-world benchmarks." },
  { title: "Industry Expertise", description: "Deep knowledge across sectors including finance, energy, real estate, and manufacturing." },
  { title: "Measurable Results", description: "Clear KPIs and impact metrics that demonstrate tangible progress to stakeholders." },
  { title: "Long-Term Focus", description: "Strategies designed for enduring value — not just short-term compliance." },
];

const WhyVerdantSection = () => {
  return (
    <section id="why" className="relative py-28 lg:py-36 overflow-hidden">
      <img
        src={leafImg}
        alt=""
        className="absolute top-10 right-0 w-[500px] opacity-[0.04] rotate-[-30deg] select-none pointer-events-none"
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">Advantage</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Why Verdant
        </h2>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {points.map((point, i) => (
            <div key={i}>
              <div className="w-10 h-[2px] bg-primary mb-6" />
              <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVerdantSection;
