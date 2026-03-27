import aboutImage from "@/assets/about-image.jpg";
import leafImg from "@/assets/leaf.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Who We Are
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
            Verdant ESG is a professional sustainability consultancy dedicated to helping organizations navigate the complexities of Environmental, Social, and Governance standards. We combine deep industry expertise with data-driven insights to deliver strategies that drive measurable, long-term impact.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg">
            Our team works alongside leadership to embed sustainability into decision-making — turning ambition into action and compliance into competitive advantage.
          </p>
        </div>

        {/* Right — image with leaf pattern */}
        <div className="relative">
          <img
            src={leafImg}
            alt=""
            className="absolute -top-10 -right-10 w-64 opacity-[0.05] rotate-45 select-none pointer-events-none"
          />
          <img
            src={aboutImage}
            alt="Verdant ESG team working on sustainability strategy"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-sm shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
