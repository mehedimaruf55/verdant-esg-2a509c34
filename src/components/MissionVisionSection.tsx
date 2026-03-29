import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";
import leafImg from "@/assets/leaf.png";

const cards = [
  {
    id: "mission",
    icon: Target,
    label: "Our Mission",
    heading:
      "To empower organizations with the clarity and tools they need to embed sustainability at the heart of their strategy.",
    body: "We bridge the gap between ambition and action — delivering data-driven ESG solutions that create measurable value for businesses, communities, and the environment.",
    stats: [
      { value: "200+", label: "Projects delivered" },
      { value: "95%", label: "Client retention" },
      { value: "40+", label: "Industries served" },
    ],
  },
  {
    id: "vision",
    icon: Eye,
    label: "Our Vision",
    heading:
      "A world where every business decision accounts for its impact on people and the planet.",
    body: "We envision a future where sustainability is not a separate initiative but an integral part of how organizations operate, innovate, and grow.",
    stats: [
      { value: "2030", label: "Net-zero target" },
      { value: "50M+", label: "Tonnes CO₂ tracked" },
      { value: "100%", label: "Renewable commitment" },
    ],
  },
];

const MissionVisionSection = () => {
  const [active, setActive] = useState(0);
  const card = cards[active];

  return (
    <section
      id="mission"
      className="relative py-28 lg:py-36 bg-brand-grey-light overflow-hidden"
    >
      <img
        src={leafImg}
        alt=""
        className="absolute -top-[5%] -right-[6%] w-[40vw] max-w-[550px] min-w-[280px] opacity-[0.10] select-none pointer-events-none rotate-[25deg]"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light" />
            <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-green-light">
              Purpose
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-black">
            Mission & Vision
          </h2>
        </motion.div>

        {/* Toggle pills */}
        <motion.div
          className="mt-10 flex gap-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {cards.map((c, i) => {
            const Icon = c.icon;
            const isActive = active === i;
            return (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={`group relative flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-brand-green-dark text-primary-foreground shadow-lg"
                    : "bg-brand-white text-brand-grey border border-border hover:border-brand-green-dark/30 hover:text-brand-black"
                }`}
              >
                <Icon className="w-4 h-4" />
                {c.label}
                {isActive && (
                  <motion.div
                    layoutId="pill-glow"
                    className="absolute inset-0 rounded-full ring-2 ring-brand-green-light/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Content card */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-white rounded-3xl border border-border overflow-hidden shadow-sm"
            >
              <div className="grid lg:grid-cols-5">
                {/* Left: accent bar + main content */}
                <div className="lg:col-span-3 p-10 lg:p-14 relative">
                  {/* Animated accent line */}
                  <motion.div
                    className={`w-12 h-1 rounded-full mb-8 ${
                      active === 0 ? "bg-brand-green-dark" : "bg-brand-green-light"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  />

                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-grey">
                    {card.label}
                  </span>

                  <h3 className="mt-4 text-2xl lg:text-[28px] font-heading font-bold text-brand-black leading-snug">
                    {card.heading}
                  </h3>

                  <p className="mt-6 text-[15px] text-brand-grey leading-relaxed max-w-lg">
                    {card.body}
                  </p>

                  <motion.div
                    className="mt-8 flex items-center gap-2 text-brand-green-dark font-semibold text-sm cursor-pointer group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </div>

                {/* Right: stats panel */}
                <div
                  className="lg:col-span-2 p-10 lg:p-14 flex flex-col justify-center gap-8"
                  style={{
                    background: active === 0
                      ? "linear-gradient(135deg, #326234 0%, #6ABA45 100%)"
                      : "linear-gradient(135deg, #6ABA45 0%, #326234 100%)",
                  }}
                >
                  {card.stats.map((stat, si) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + si * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="text-primary-foreground"
                    >
                      <div className="text-3xl lg:text-4xl font-heading font-bold tracking-tight">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[13px] opacity-75 tracking-wide">
                        {stat.label}
                      </div>
                      {si < card.stats.length - 1 && (
                        <div className="mt-6 h-px w-12 bg-primary-foreground/20" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative h-1.5 rounded-full overflow-hidden cursor-pointer transition-all duration-300"
              style={{ width: active === i ? 32 : 12 }}
            >
              <div className="absolute inset-0 bg-border" />
              {active === i && (
                <motion.div
                  layoutId="indicator"
                  className="absolute inset-0 bg-brand-green-dark rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
