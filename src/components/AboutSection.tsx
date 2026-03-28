import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";
import leafImg from "@/assets/leaf.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-brand-white overflow-hidden">
      <img
        src={leafImg}
        alt=""
        className="absolute top-[10%] -left-[8%] w-[45vw] max-w-[600px] min-w-[300px] opacity-[0.12] select-none pointer-events-none rotate-[-15deg]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light" />
              <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-green-light">About Us</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-green-dark">
              Delivering Holistic and Credible Sustainable Solutions
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-8 space-y-5 text-[15px] leading-[1.85] text-brand-grey">
              <p>Verdant ESG is a professional sustainability consultancy dedicated to helping organizations navigate the complexities of Environmental, Social, and Governance standards.</p>
              <p>Our team works alongside leadership to embed sustainability into decision-making — turning ambition into action and compliance into competitive advantage.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 flex gap-4">
              {[
                { num: "50+", label: "Clients served" },
                { num: "12", label: "Industries" },
                { num: "98%", label: "Retention rate" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="glass rounded-2xl px-6 py-4 text-center flex-1"
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                >
                  <div className="text-2xl font-heading font-bold text-gradient">{s.num}</div>
                  <div className="text-[11px] text-brand-grey mt-1 tracking-wide uppercase">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="overflow-hidden rounded-3xl">
              <motion.img
                src={aboutImage}
                alt="Verdant ESG team"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full object-cover aspect-[4/5] lg:aspect-[3/4]"
                whileHover={{ scale: 1.03, transition: { duration: 0.6, ease: "easeOut" } }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
