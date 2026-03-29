import { motion } from "framer-motion";
import { ArrowDownRight, ChevronDown } from "lucide-react";
import leafImg from "@/assets/leaf.png";
import { useHeroSection } from "@/hooks/useSanity";

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.18 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const defaults = {
  subtitle: "ESG Consultancy",
  headlineLines: [
    { _key: "l1", text: "A New", style: "normal" as const },
    { _key: "l2", text: "Direction.", style: "accentDot" as const },
    { _key: "l3", text: "Balanced", style: "accent" as const },
    { _key: "l4", text: "Future.", style: "normal" as const },
  ],
  description: "We help organizations integrate ESG into their core strategy with clarity and precision — turning compliance into competitive advantage.",
  ctaText: "Find Out More",
  ctaLink: "#contact",
  scrollText: "Scroll to explore",
  keywords: ["Environmental", "Social", "Governance"],
  backgroundGradient: "linear-gradient(135deg, #6ABA45 0%, #3a7a3a 40%, #326234 100%)",
};

const HeroSection = () => {
  const { data } = useHeroSection();
  const d = data || defaults;

  const renderLine = (line: { text: string; style: string }) => {
    if (line.style === "accentDot") {
      const dotIndex = line.text.lastIndexOf(".");
      if (dotIndex >= 0) {
        return <>{line.text.slice(0, dotIndex)}<span className="text-brand-green-light">.</span></>;
      }
      return <>{line.text}</>;
    }
    if (line.style === "accent") {
      return <span className="text-brand-green-light">{line.text}</span>;
    }
    return <>{line.text}</>;
  };

  return (
    <section className="relative min-h-[85dvh] flex flex-col justify-between overflow-hidden" style={{ background: d.backgroundGradient }}>
      <motion.img src={leafImg} alt="" className="absolute top-[8%] -right-[5%] w-[55vw] max-w-[800px] min-w-[280px] opacity-[0.18] select-none pointer-events-none" initial={{ opacity: 0, scale: 1.08, rotate: -3 }} animate={{ opacity: 0.18, scale: 1, rotate: 0 }} transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} />
      <motion.img src={leafImg} alt="" className="absolute -bottom-[10%] -left-[12%] w-[35vw] max-w-[500px] opacity-[0.07] select-none pointer-events-none rotate-[140deg] hidden sm:block" initial={{ opacity: 0 }} animate={{ opacity: 0.07 }} transition={{ duration: 2, delay: 0.8 }} />
      <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-brand-green-light opacity-[0.08] blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-brand-green-light opacity-[0.04] blur-[180px] pointer-events-none" />
      <div className="pt-24 lg:pt-40" />
      <div className="relative z-10 mx-auto max-w-6xl w-full px-5 lg:px-10 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div className="flex items-center gap-3 mb-6 lg:mb-10" custom={0} variants={lineVariants} initial="hidden" animate="visible">
              <span className="inline-block w-8 lg:w-10 h-[2px] rounded-full bg-brand-green-light" />
              <span className="text-xs lg:text-sm font-semibold tracking-[0.25em] uppercase text-brand-white/60">{d.subtitle}</span>
            </motion.div>
            <h1 className="text-[clamp(2.5rem,8vw,7.5rem)] font-heading font-bold leading-[0.88] tracking-[-0.04em] text-brand-white">
              {d.headlineLines.map((line, i) => (
                <motion.span key={line._key} className="block" custom={i + 1} variants={lineVariants} initial="hidden" animate="visible">
                  {renderLine(line)}
                </motion.span>
              ))}
            </h1>
          </div>
          <motion.div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 lg:gap-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="glass-dark rounded-2xl p-5 lg:p-7">
              <p className="text-sm lg:text-base leading-[1.7] text-brand-white/80">{d.description}</p>
            </div>
            <motion.a href={d.ctaLink} className="group inline-flex items-center gap-3 self-start" whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <span className="px-6 py-3 lg:px-8 lg:py-4 text-xs lg:text-sm font-bold tracking-[0.05em] uppercase bg-brand-white text-brand-green-dark rounded-full group-hover:bg-brand-grey-light transition-colors duration-300">{d.ctaText}</span>
              <span className="w-10 h-10 lg:w-12 lg:h-12 rounded-full glass-dark flex items-center justify-center group-hover:bg-brand-white/20 transition-colors duration-300"><ArrowDownRight size={16} className="text-brand-white" /></span>
            </motion.a>
          </motion.div>
        </div>
      </div>
      <motion.div className="relative z-10 mx-auto max-w-6xl w-full px-5 lg:px-10 pb-8 lg:pb-14" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.7 }}>
        <div className="pt-5 lg:pt-6 border-t border-brand-white/15 flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm tracking-[0.15em] uppercase text-brand-white/40">
            <ChevronDown size={14} className="animate-gentle-bounce" />
            <span>{d.scrollText}</span>
          </div>
          <div className="hidden sm:flex gap-6 lg:gap-10">
            {d.keywords.map((w, i) => (
              <motion.span key={w} className="text-xs lg:text-sm tracking-[0.18em] uppercase text-brand-white/35 font-semibold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 + i * 0.15 }}>{w}</motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
