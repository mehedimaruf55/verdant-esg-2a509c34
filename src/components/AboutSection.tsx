import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image-new.png";
import leafImg from "@/assets/leaf.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
      {/* Background leaf */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-[5%] -right-[10%] w-[40vw] max-w-[500px] min-w-[280px] opacity-[0.08] select-none pointer-events-none rotate-[20deg]"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light" />
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">About Us</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-green-dark max-w-2xl">
            Delivering Holistic and Credible Sustainable Solutions
          </motion.h2>
        </motion.div>

        {/* Main content: Image + Text side by side */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
          {/* Image column - takes 3 cols */}
          <motion.div
            className="lg:col-span-3 relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[520px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={aboutImage}
              alt="Verdant ESG team collaborating"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/60 via-transparent to-transparent" />
          </motion.div>

          {/* Text + Stats column - takes 2 cols */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-between gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Description */}
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="text-base leading-[1.85] text-brand-grey">
                Verdant ESG is a professional sustainability consultancy dedicated to helping organizations navigate the complexities of Environmental, Social, and Governance standards.
              </p>
              <p className="text-base leading-[1.85] text-brand-grey">
                Our team works alongside leadership to embed sustainability into decision-making — turning ambition into action and compliance into competitive advantage.
              </p>
              <motion.a
                href="#contact"
                className="mt-4 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-brand-green-dark text-brand-white text-sm font-semibold tracking-wide uppercase group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Work with us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="rounded-2xl bg-brand-green-dark p-5 text-center"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl lg:text-3xl font-heading font-bold text-brand-white">{s.num}</div>
                  <div className="text-xs text-brand-white/60 mt-1.5 tracking-[0.12em] uppercase leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
