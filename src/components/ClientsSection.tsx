import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";
import logoLululemon from "@/assets/client-lululemon.png";
import logoMclaren from "@/assets/client-mclaren.png";
import logoOdgroup from "@/assets/client-odgroup.webp";
import logoDebeers from "@/assets/client-debeers.png";
import logoPrologis from "@/assets/client-prologis.svg";
import logoAardman from "@/assets/client-aardman.webp";
import logoDmg from "@/assets/client-dmg.svg";
import logoVeolia from "@/assets/client-veolia.png";

const logosRow1 = [
  logoLululemon, logoMclaren, logoOdgroup, logoDebeers,
];
const logosRow2 = [
  logoPrologis, logoAardman, logoDmg, logoVeolia,
];

const ClientsSection = () => {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 96%) 0%, hsl(0 0% 100%) 100%)" }}>
      <img
        src={leafImg}
        alt=""
        className="absolute -bottom-[5%] -left-[6%] w-[40vw] max-w-[500px] min-w-[260px] opacity-[0.06] select-none pointer-events-none rotate-[-15deg]"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light" />
            <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-green-light">
              Trusted By
            </span>
            <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-black leading-[1.08] tracking-[-0.02em]">
            Our Clients
          </h2>
          <p className="mt-4 text-[15px] text-brand-grey leading-relaxed max-w-md mx-auto">
            Partnering with world-class organizations to drive meaningful sustainability outcomes.
          </p>
        </motion.div>

        {/* Marquee Row 1 — scrolls left */}
        <div className="relative mt-12">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-grey-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-6 items-center">
              {[...logosRow1, ...logosRow1, ...logosRow1, ...logosRow1].map((logo, i) => (
                <div
                  key={`r1-${i}`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-brand-white rounded-2xl px-12 py-8 border border-border flex items-center justify-center transition-all duration-500 group-hover:border-brand-green-dark/40 group-hover:shadow-lg group-hover:shadow-brand-green-dark/5 group-hover:-translate-y-1">
                    <img
                      src={logo}
                      alt="Client logo"
                      loading="lazy"
                      className="h-12 lg:h-14 w-auto max-w-[180px] object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee Row 2 — scrolls right (reverse) */}
        <div className="relative mt-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-grey-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-scroll-reverse gap-6 items-center">
              {[...logosRow2, ...logosRow2, ...logosRow2, ...logosRow2].map((logo, i) => (
                <div
                  key={`r2-${i}`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-brand-white rounded-2xl px-12 py-8 border border-border flex items-center justify-center transition-all duration-500 group-hover:border-brand-green-dark/40 group-hover:shadow-lg group-hover:shadow-brand-green-dark/5 group-hover:-translate-y-1">
                    <img
                      src={logo}
                      alt="Client logo"
                      loading="lazy"
                      className="h-12 lg:h-14 w-auto max-w-[180px] object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
