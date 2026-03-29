import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image-new.png";
import leafImg from "@/assets/leaf.png";
import { useAboutSection } from "@/hooks/useSanity";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const defaults = {
  subtitle: "About Us",
  heading: "Delivering Holistic and Credible Sustainable Solutions",
  stats: [
    { _key: "s1", num: "50+", label: "Clients Served" },
    { _key: "s2", num: "12", label: "Industries" },
    { _key: "s3", num: "98%", label: "Retention Rate" },
  ],
  ctaText: "Work with us",
  ctaLink: "#contact",
  paragraphs: [
    "Verdant ESG is a professional sustainability consultancy dedicated to helping organizations navigate the complexities of Environmental, Social, and Governance standards. We bridge the gap between regulatory demands and business opportunity.",
    "Our team works alongside leadership to embed sustainability into decision-making — turning ambition into action and compliance into competitive advantage. Every engagement is built on data, integrity, and measurable outcomes.",
  ],
};

const AboutSection = () => {
  const { data } = useAboutSection();
  const d = data || defaults;

  return (
    <section id="about" className="relative py-20 lg:py-36 bg-brand-white overflow-hidden">
      <img src={leafImg} alt="" className="absolute top-[6%] -left-[5%] w-[38vw] max-w-[500px] min-w-[260px] opacity-[0.06] select-none pointer-events-none rotate-[-18deg] hidden sm:block" />
      <div className="mx-auto max-w-6xl px-5 lg:px-10 relative z-10">
        <div className="relative mb-0">
          <motion.div className="relative rounded-2xl lg:rounded-3xl overflow-hidden" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <img src={aboutImage} alt="Verdant ESG team" loading="lazy" className="w-full object-cover h-[360px] md:h-[480px] lg:h-[620px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/80 via-brand-green-dark/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/70 via-transparent to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-8 lg:p-14">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="max-w-xl">
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4 lg:mb-6">
                  <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light" />
                  <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">{d.subtitle}</span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-white">{d.heading}</motion.h2>
              </motion.div>
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
                <div className="flex items-end gap-6 lg:gap-14">
                  {d.stats.map((s) => (
                    <motion.div key={s._key} variants={fadeUp} className="text-left">
                      <div className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-brand-white leading-none">{s.num}</div>
                      <div className="text-[10px] md:text-xs lg:text-sm text-brand-white/60 mt-1 lg:mt-2 tracking-[0.12em] uppercase">{s.label}</div>
                    </motion.div>
                  ))}
                </div>
                <motion.a href={d.ctaLink} variants={fadeUp} className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 lg:px-7 lg:py-3.5 rounded-full bg-brand-white/10 backdrop-blur-md border border-brand-white/20 text-brand-white text-xs lg:text-sm font-semibold tracking-wide uppercase group hover:bg-brand-white/25 transition-all duration-300" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  {d.ctaText}
                  <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid md:grid-cols-2 gap-6 lg:gap-16 mt-10 lg:mt-14">
          {d.paragraphs.map((p, i) => (
            <motion.p key={i} variants={fadeUp} className="text-sm lg:text-lg leading-[1.85] text-brand-grey">{p}</motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
