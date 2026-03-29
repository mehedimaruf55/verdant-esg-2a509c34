import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image-new.png";
import leafImg from "@/assets/leaf.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const stats = [
  { num: "50+", label: "Clients Served" },
  { num: "12", label: "Industries" },
  { num: "98%", label: "Retention Rate" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-brand-white overflow-hidden">
      {/* Background leaf watermark */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-[8%] -left-[6%] w-[40vw] max-w-[550px] min-w-[280px] opacity-[0.07] select-none pointer-events-none rotate-[-18deg]"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10 relative z-10">
        {/* Subtitle tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light" />
          <span className="text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">
            About Us
          </span>
        </motion.div>

        {/* Main grid: Image left, Content right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Image — 7 columns */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Verdant ESG team collaborating on sustainability strategy"
                loading="lazy"
                className="w-full object-cover h-[380px] md:h-[480px] lg:h-[560px]"
              />
              {/* Subtle dark overlay at bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/50 via-transparent to-transparent" />
            </div>

            {/* Stats row pinned below image */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="rounded-2xl bg-brand-green-dark px-4 py-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold text-brand-white leading-none">
                    {s.num}
                  </div>
                  <div className="text-xs text-brand-white/60 mt-2 tracking-[0.12em] uppercase leading-tight">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content — 5 columns */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center lg:py-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-green-dark mb-8"
            >
              Delivering Holistic and Credible Sustainable Solutions
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base leading-[1.85] text-brand-grey mb-5"
            >
              Verdant ESG is a professional sustainability consultancy dedicated
              to helping organizations navigate the complexities of
              Environmental, Social, and Governance standards.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base leading-[1.85] text-brand-grey mb-10"
            >
              Our team works alongside leadership to embed sustainability into
              decision-making — turning ambition into action and compliance into
              competitive advantage.
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              className="w-full h-px bg-brand-green-dark/10 mb-10"
            />

            {/* CTA */}
            <motion.a
              href="#contact"
              variants={fadeUp}
              className="inline-flex items-center gap-3 self-start px-8 py-4 rounded-full bg-brand-green-dark text-brand-white text-sm font-semibold tracking-wide uppercase group hover:bg-brand-green-dark/90 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Work with us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
