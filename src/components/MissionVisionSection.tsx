import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

const MissionVisionSection = () => {
  return (
    <section id="mission" className="relative py-28 lg:py-36 bg-brand-grey-light overflow-hidden">
      {/* Cropped leaf — 70% visible, anchored right */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -right-[12%] w-[400px] opacity-[0.04] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-green-light" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-brand-green-light">Purpose</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] text-brand-green-dark">
            Mission & Vision
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-0 border border-border rounded-sm overflow-hidden">
          <motion.div
            className="bg-brand-white p-10 lg:p-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-[3px] bg-brand-green-dark mb-6" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-brand-grey">Our Mission</span>
            <h3 className="mt-4 text-xl lg:text-2xl font-heading font-bold text-brand-black leading-snug">
              To empower organizations with the clarity and tools they need to embed sustainability at the heart of their strategy.
            </h3>
            <p className="mt-5 text-[15px] text-brand-grey leading-relaxed">
              We bridge the gap between ambition and action — delivering data-driven ESG solutions that create measurable value for businesses, communities, and the environment.
            </p>
          </motion.div>

          <motion.div
            className="bg-brand-white p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-10 h-[3px] bg-brand-green-light mb-6" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-brand-grey">Our Vision</span>
            <h3 className="mt-4 text-xl lg:text-2xl font-heading font-bold text-brand-black leading-snug">
              A world where every business decision accounts for its impact on people and the planet.
            </h3>
            <p className="mt-5 text-[15px] text-brand-grey leading-relaxed">
              We envision a future where sustainability is not a separate initiative but an integral part of how organizations operate, innovate, and grow — creating long-term value for all stakeholders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
