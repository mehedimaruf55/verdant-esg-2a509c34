import { motion } from "framer-motion";
import { ArrowDownRight, ChevronDown } from "lucide-react";

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
    <section className="relative min-h-[85dvh] flex flex-col justify-between overflow-hidden">
      {/* Dark green background */}
      <div className="absolute inset-0 bg-brand-green-dark" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark via-brand-green-dark/80 to-brand-green-dark/90" />

      {/* Ambient light orbs */}
      <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] rounded-full bg-brand-green-light opacity-[0.06] blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-brand-green-light opacity-[0.03] blur-[180px] pointer-events-none" />

      {/* Top spacer for navbar */}
      <div className="pt-32 lg:pt-40" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 lg:px-10 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Left — headline */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              className="flex items-center gap-3 mb-10"
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-block w-10 h-[2px] rounded-full bg-brand-green-light" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-white/60">
                ESG Consultancy
              </span>
            </motion.div>

            <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-heading font-bold leading-[0.88] tracking-[-0.04em] text-brand-white">
              {["A New", "Direction.", "Balanced", "Future."].map((line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  custom={i + 1}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {line === "Direction." ? (
                    <>
                      Direction
                      <span className="text-brand-green-light">.</span>
                    </>
                  ) : line === "Balanced" ? (
                    <span className="text-brand-green-light">Balanced</span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Right — description + CTA */}
          <motion.div
            className="lg:col-span-5 xl:col-span-4 flex flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-dark rounded-2xl p-7">
              <p className="text-[15px] leading-[1.7] text-brand-white/80">
                We help organizations integrate ESG into their core strategy
                with clarity and precision — turning compliance into competitive
                advantage.
              </p>
            </div>

            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-3 self-start"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="px-8 py-4 text-[13px] font-bold tracking-[0.05em] uppercase bg-brand-white text-brand-green-dark rounded-full group-hover:bg-brand-grey-light transition-colors duration-300">
                Find Out More
              </span>
              <span className="w-12 h-12 rounded-full glass-dark flex items-center justify-center group-hover:bg-brand-white/20 transition-colors duration-300">
                <ArrowDownRight size={18} className="text-brand-white" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="relative z-10 mx-auto max-w-6xl w-full px-6 lg:px-10 pb-10 lg:pb-14"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <div className="pt-6 border-t border-brand-white/15 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.15em] uppercase text-brand-white/40">
            <ChevronDown size={14} className="animate-gentle-bounce" />
            <span>Scroll to explore</span>
          </div>
          <div className="hidden sm:flex gap-10">
            {["Environmental", "Social", "Governance"].map((w, i) => (
              <motion.span
                key={w}
                className="text-[11px] tracking-[0.18em] uppercase text-brand-white/35 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + i * 0.15 }}
              >
                {w}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
