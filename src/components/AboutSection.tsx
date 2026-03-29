import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image-new.png";
import leafImg from "@/assets/leaf.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stats = [
  { num: "50+", label: "Clients Served" },
  { num: "12", label: "Industries" },
  { num: "98%", label: "Retention Rate" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-brand-white overflow-hidden">
      <img
        src={leafImg}
        alt=""
        className="absolute top-[10%] -left-[8%] w-[45vw] max-w-[600px] min-w-[300px] opacity-[0.12] select-none pointer-events-none rotate-[-15deg]"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10 relative z-10">
        {/* Top: Full-width image with overlaid stats bar */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={aboutImage}
            alt="Verdant ESG team collaborating"
            loading="lazy"
            className="w-full object-cover h-[420px] lg:h-[520px]"
          />
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-brand-green-dark/20 to-transparent" />

          {/* Stats bar overlaid on image */}
          <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-8 pt-16">
            <div className="flex items-end justify-start gap-10 lg:gap-16">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  className="text-left"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-brand-white">{s.num}</div>
                  <div className="text-sm lg:text-xs text-brand-white/70 mt-1 tracking-[0.14em] uppercase">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom: Two-column text content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light" />
              <span className="text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">About Us</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-green-dark">
              Delivering Holistic and Credible Sustainable Solutions
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col justify-end">
            <div className="space-y-5 text-base leading-[1.85] text-brand-grey">
              <p>Verdant ESG is a professional sustainability consultancy dedicated to helping organizations navigate the complexities of Environmental, Social, and Governance standards.</p>
              <p>Our team works alongside leadership to embed sustainability into decision-making — turning ambition into action and compliance into competitive advantage.</p>
            </div>
            <motion.a
              href="#contact"
              variants={fadeUp}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-green-dark tracking-wide uppercase group"
              whileHover={{ x: 4 }}
            >
              Work with us
              <span className="inline-block w-6 h-[1.5px] bg-brand-green-dark group-hover:w-10 transition-all duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;