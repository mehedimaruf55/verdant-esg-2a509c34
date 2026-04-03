import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-image-new.png";
import leafImg from "@/assets/leaf.png";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { num: "50+", label: "Clients Served" },
  { num: "12", label: "Industries" },
  { num: "98%", label: "Retention Rate" },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="relative py-20 lg:py-36 bg-brand-white overflow-hidden">
      {/* Background leaf */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-[6%] -left-[5%] w-[38vw] max-w-[500px] min-w-[260px] opacity-[0.18] select-none pointer-events-none rotate-[-18deg] hidden sm:block"
      />

      <div className="mx-auto max-w-6xl px-5 lg:px-10 relative z-10">
        {/* Full-width hero image with glass overlay card */}
        <div className="relative mb-0">
          {/* Image */}
          <motion.div
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ken Burns slow zoom on the image */}
            <motion.img
              src={aboutImage}
              alt="Verdant ESG team collaborating on sustainability strategy"
              loading="lazy"
              className="w-full object-cover h-[360px] md:h-[480px] lg:h-[620px]"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
            {/* Multi-layer overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/80 via-brand-green-dark/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/70 via-transparent to-transparent" />

            {/* Content overlay — positioned inside the image */}
            <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-8 lg:p-14">
              {/* Top: Subtitle + Heading */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="max-w-xl"
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4 lg:mb-6">
                  <motion.span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
                  <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">
                    About Us
                  </span>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-white"
                >
                  Delivering Holistic and Credible Sustainable Solutions
                </motion.h2>
              </motion.div>

              {/* Bottom: Stats row + CTA */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8"
              >
                <div className="grid grid-cols-3 gap-4 w-full md:w-auto md:flex md:items-end lg:gap-14">
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      variants={fadeUp}
                      className="text-left"
                    >
                      <motion.div
                        className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-brand-white leading-none"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                      >
                        {s.num}
                      </motion.div>
                      <motion.div
                        className="text-[10px] md:text-xs lg:text-sm text-brand-white/60 mt-1 lg:mt-2 tracking-[0.12em] uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.55 + i * 0.12 }}
                      >
                        {s.label}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                <Link to="/contact">
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 lg:px-7 lg:py-3.5 rounded-full bg-brand-white/15 border border-brand-white/20 text-brand-white text-xs lg:text-sm font-semibold tracking-wide uppercase group hover:bg-brand-white/25 transition-all duration-300"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Work with us
                  <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Text content below image — two columns */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-16 mt-10 lg:mt-14"
        >
          <motion.p variants={fadeUp} className="text-sm lg:text-lg leading-[1.85] text-brand-grey">
            Verdant ESG is a professional sustainability consultancy dedicated
            to helping organizations navigate the complexities of
            Environmental, Social, and Governance standards. We bridge the gap
            between regulatory demands and business opportunity.
          </motion.p>
          <motion.p variants={fadeUp} className="text-sm lg:text-lg leading-[1.85] text-brand-grey">
            Our team works alongside leadership to embed sustainability into
            decision-making — turning ambition into action and compliance into
            competitive advantage. Every engagement is built on data, integrity,
            and measurable outcomes.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
