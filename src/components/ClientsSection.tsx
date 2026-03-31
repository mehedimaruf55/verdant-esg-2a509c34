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
    <section className="relative py-20 lg:py-36 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 96%) 0%, hsl(0 0% 100%) 100%)" }}>
      <motion.img
        src={leafImg}
        alt=""
        className="absolute -bottom-[5%] -left-[6%] w-[40vw] max-w-[500px] min-w-[260px] opacity-[0.18] select-none pointer-events-none rotate-[-15deg] hidden sm:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="max-w-6xl mx-auto px-5 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 justify-center mb-4 lg:mb-6">
            <motion.span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-dark">
              Trusted By
            </span>
            <motion.span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light origin-right" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-black leading-[1.08] tracking-[-0.02em]">
            {"Our Clients".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            className="mt-3 lg:mt-4 text-sm lg:text-base text-brand-grey leading-relaxed max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Partnering with world-class organizations to drive meaningful sustainability outcomes.
          </motion.p>
        </motion.div>

        {/* Marquee Row 1 — scrolls left */}
        <motion.div
          className="relative mt-8 lg:mt-12"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-10 bg-gradient-to-r from-brand-grey-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-10 bg-gradient-to-l from-brand-grey-light to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-4 lg:gap-6 items-center">
              {[...logosRow1, ...logosRow1, ...logosRow1, ...logosRow1].map((logo, i) => (
                <div
                  key={`r1-${i}`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-brand-white rounded-xl lg:rounded-2xl px-8 py-5 lg:px-12 lg:py-8 border border-border flex items-center justify-center transition-all duration-500 group-hover:border-brand-green-dark/40 group-hover:shadow-lg group-hover:shadow-brand-green-dark/5">
                    <img
                      src={logo}
                      alt="Client logo"
                      loading="lazy"
                      className="h-8 lg:h-14 w-auto max-w-[120px] lg:max-w-[180px] object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Marquee Row 2 — scrolls right (reverse) */}
        <motion.div
          className="relative mt-4 lg:mt-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-10 bg-gradient-to-r from-brand-grey-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-10 bg-gradient-to-l from-brand-grey-light to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-scroll-reverse gap-4 lg:gap-6 items-center">
              {[...logosRow2, ...logosRow2, ...logosRow2, ...logosRow2].map((logo, i) => (
                <div
                  key={`r2-${i}`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-brand-white rounded-xl lg:rounded-2xl px-8 py-5 lg:px-12 lg:py-8 border border-border flex items-center justify-center transition-all duration-500 group-hover:border-brand-green-dark/40 group-hover:shadow-lg group-hover:shadow-brand-green-dark/5">
                    <img
                      src={logo}
                      alt="Client logo"
                      loading="lazy"
                      className="h-8 lg:h-14 w-auto max-w-[120px] lg:max-w-[180px] object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
