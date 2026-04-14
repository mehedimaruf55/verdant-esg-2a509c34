import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import leafImg from "@/assets/leaf.png";

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.18 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[85dvh] flex flex-col justify-between overflow-hidden" style={{ background: "linear-gradient(135deg, #76f7bf 0%, #499167 40%, #3a7a5a 100%)" }}>
      {/* Leaf — large, beautifully visible, right-aligned */}
      <motion.img
        src={leafImg}
        alt=""
        className="absolute top-[8%] -right-[5%] w-[55vw] max-w-[800px] min-w-[280px] select-none pointer-events-none opacity-[0.22]"
        initial={{ opacity: 0, scale: 1.08, rotate: -3 }}
        animate={{ opacity: 0.22, scale: 1, rotate: 0 }}
        transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Secondary leaf — subtle, bottom-left for depth */}
      <motion.img
        src={leafImg}
        alt=""
        className="absolute -bottom-[10%] -left-[12%] w-[35vw] max-w-[500px] select-none pointer-events-none rotate-[140deg] hidden sm:block opacity-[0.18]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 2, delay: 0.8 }}
      />

      {/* Ambient light orbs — hidden on mobile for performance */}
      <div className="hidden lg:block absolute top-[10%] right-[15%] w-[600px] h-[600px] rounded-full bg-brand-green-light opacity-[0.08] blur-[200px] pointer-events-none" />
      <div className="hidden lg:block absolute bottom-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-brand-green-light opacity-[0.04] blur-[180px] pointer-events-none" />

      {/* Top spacer for navbar */}
      <div className="pt-24 lg:pt-40" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-5 lg:px-10 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Left — headline */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              className="flex items-center gap-3 mb-6 lg:mb-10"
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-block w-8 lg:w-10 h-[2px] rounded-full bg-brand-green-light" />
              <span className="text-xs lg:text-sm font-semibold tracking-[0.25em] uppercase text-brand-white/60">
                ESG Consultancy
              </span>
            </motion.div>

            <h1 className="text-[clamp(2.2rem,6.5vw,5.5rem)] font-heading font-bold leading-[0.95] tracking-[-0.03em] text-brand-white">
              {["Environmental", "Claims are now", "Enforcement", "Realities."].map((line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  custom={i + 1}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {line === "Realities." ? (
                    <>
                      Realities
                      <span className="text-brand-green-light">.</span>
                    </>
                  ) : line === "Enforcement" ? (
                    <span className="text-brand-green-light">Enforcement</span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Right — description + CTA */}
          <motion.div
            className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-dark rounded-2xl p-5 lg:p-7">
              <p className="text-sm lg:text-base leading-[1.7] text-brand-white/80">
                The era of aspirational green marketing is over. Today, environmental statements can prompt legal scrutiny. We provide the technical rigour and evidence-led consultancy required to assess green claims and protect your commercial reputation
              </p>
            </div>

            <Link to="/contact">
              <motion.span
                className="group inline-flex items-center gap-3 self-start"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="px-6 py-3 lg:px-8 lg:py-4 text-xs lg:text-sm font-bold tracking-[0.05em] uppercase bg-brand-white text-brand-green-dark rounded-full group-hover:bg-brand-grey-light transition-colors duration-300">
                  Assess Your Exposure
                </span>
                <span className="w-10 h-10 lg:w-12 lg:h-12 rounded-full glass-dark flex items-center justify-center group-hover:bg-brand-white/20 transition-colors duration-300">
                  <ArrowDownRight size={16} className="text-brand-white" />
                </span>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="relative z-10 mx-auto max-w-6xl w-full px-5 lg:px-10 pb-8 lg:pb-14"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <div className="pt-5 lg:pt-6 border-t border-brand-white/15 flex items-center justify-end">
          <a href="#framework">
            <motion.span
              className="inline-flex items-center gap-3 text-xs lg:text-sm tracking-[0.12em] uppercase text-brand-white/50 font-semibold hover:text-brand-white/90 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              whileHover={{ x: 3 }}
            >
              View Our Governance Framework
              <ArrowDownRight size={14} />
            </motion.span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
