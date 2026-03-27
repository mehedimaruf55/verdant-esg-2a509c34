import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

const MissionVisionSection = () => {
  return (
    <section id="mission" className="relative py-32 lg:py-40 overflow-hidden bg-verdant-surface">
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] opacity-[0.03] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-secondary mb-4 block">
            Purpose
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.05] tracking-[-0.02em] text-foreground">
            Mission & Vision
          </h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-px bg-border">
          {/* Mission */}
          <motion.div
            className="bg-verdant-surface p-10 lg:p-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                Our Mission
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground leading-tight tracking-[-0.01em]">
              To empower organizations with the clarity and tools they need to embed sustainability at the heart of their strategy.
            </h3>
            <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed">
              We bridge the gap between ambition and action — delivering data-driven ESG solutions that create measurable value for businesses, communities, and the environment.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-verdant-surface p-10 lg:p-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                Our Vision
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground leading-tight tracking-[-0.01em]">
              A world where every business decision accounts for its impact on people and the planet.
            </h3>
            <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed">
              We envision a future where sustainability is not a separate initiative but an integral part of how organizations operate, innovate, and grow — creating long-term value for all stakeholders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
