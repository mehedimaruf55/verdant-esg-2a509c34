import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

const MissionVisionSection = () => {
  return (
    <section id="mission" className="relative py-28 lg:py-36 bg-muted overflow-hidden">
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -right-[12%] w-[450px] opacity-[0.05] select-none pointer-events-none"
      />

      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-green-light/[0.06] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-green-light mb-4 block">Purpose</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-black">Mission & Vision</h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <motion.div
            className="glass-strong rounded-2xl p-10 lg:p-12 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-green-dark" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-brand-grey">Our Mission</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-heading font-bold text-brand-black leading-snug">To empower organizations with the clarity and tools they need to embed sustainability at the heart of their strategy.</h3>
            <p className="mt-5 text-[15px] text-brand-grey leading-relaxed">We bridge the gap between ambition and action — delivering data-driven ESG solutions that create measurable value for businesses, communities, and the environment.</p>
          </motion.div>

          <motion.div
            className="glass-strong rounded-2xl p-10 lg:p-12 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-green-light glow-dot" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-brand-grey">Our Vision</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-heading font-bold text-brand-black leading-snug">A world where every business decision accounts for its impact on people and the planet.</h3>
            <p className="mt-5 text-[15px] text-brand-grey leading-relaxed">We envision a future where sustainability is not a separate initiative but an integral part of how organizations operate, innovate, and grow — creating long-term value for all stakeholders.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
