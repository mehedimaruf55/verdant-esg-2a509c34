import leafImg from "@/assets/leaf.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground">
            Sustainable Strategy.
            <br />
            Measurable Impact.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            We help organizations integrate ESG into their core strategy with clarity and precision.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide rounded-sm hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Right — abstract leaf composition */}
        <div className="relative hidden lg:flex items-center justify-center h-full">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px]" />
          <img
            src={leafImg}
            alt=""
            className="w-[400px] h-[400px] object-contain opacity-[0.07] rotate-12 select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Subtle background leaf */}
      <img
        src={leafImg}
        alt=""
        className="absolute -bottom-20 -left-20 w-[600px] opacity-[0.03] rotate-[-20deg] select-none pointer-events-none"
      />
    </section>
  );
};

export default HeroSection;
