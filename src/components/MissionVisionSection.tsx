import { motion } from "framer-motion";

const MissionVisionSection = () => {
  return (
    <section id="mission" className="py-28 lg:py-36 bg-brand-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.1] text-brand-green-dark">
            Mission & Vision
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <motion.div
            className="bg-brand-grey-light rounded-lg p-10 lg:p-12 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-brand-green-light">Our Mission</span>
            <h3 className="mt-4 text-xl lg:text-2xl font-heading font-bold text-brand-black leading-snug">
              To empower organizations with the clarity and tools they need to embed sustainability at the heart of their strategy.
            </h3>
            <p className="mt-5 text-[15px] text-brand-grey leading-relaxed">
              We bridge the gap between ambition and action — delivering data-driven ESG solutions that create measurable value for businesses, communities, and the environment.
            </p>
          </motion.div>

          <motion.div
            className="bg-brand-grey-light rounded-lg p-10 lg:p-12 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-brand-green-light">Our Vision</span>
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
