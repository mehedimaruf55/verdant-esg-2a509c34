import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import leafImg from "@/assets/leaf.png";

const lineVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden pt-16 bg-brand-green-dark">
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -right-[15%] w-[650px] opacity-[0.08] select-none pointer-events-none"
      />

      <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-green-light opacity-[0.06] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-green-dark opacity-[0.15] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.div
              className="flex items-center gap-3 mb-8"
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="inline-block w-2 h-2 rounded-full bg-brand-green-light glow-dot"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-brand-white/70">ESG Consultancy</span>
            </motion.div>

            <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-heading font-bold leading-[0.92] tracking-[-0.03em] text-brand-white">
              {["A New", "Direction", "Balanced", "Future."].map((line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  custom={i + 1}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {line === "Direction" ? (
                    <>Direction<span className="text-brand-green-light">.</span></>
                  ) : line === "Balanced" ? (
                    <span className="text-brand-green-light">Balanced</span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.div
            className="lg:col-span-4 flex flex-col gap-6"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-dark rounded-2xl p-6">
              <p className="text-[15px] leading-relaxed text-brand-white/80">
                We help organizations integrate ESG into their core strategy with clarity and precision — turning compliance into competitive advantage.
              </p>
            </div>
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-3 self-start"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="px-7 py-3.5 text-[13px] font-bold tracking-wide bg-brand-white text-brand-green-dark rounded-full group-hover:bg-brand-grey-light transition-colors">
                Find Out More
              </span>
              <span className="w-11 h-11 rounded-full glass-dark flex items-center justify-center group-hover:bg-brand-white/20 transition-colors">
                <ArrowDownRight size={16} className="text-brand-white" />
              </span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 pt-6 border-t border-brand-white/20 flex items-center justify-between text-[11px] tracking-[0.15em] uppercase text-brand-white/50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll to explore
          </motion.span>
          <div className="flex gap-8">
            {["Environmental", "Social", "Governance"].map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.15 }}
              >
                {w}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
