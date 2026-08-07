import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

const redZoneTerms = [
  "Net Zero",
  "Carbon Neutral",
  "Sustainable",
  "Eco-Friendly",
  "Responsibly Sourced",
];

const requirements = [
  "Refining the scope and boundaries",
  "Transparent methodology",
  "Evidentiary support",
  "Clearly explaining limitations",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const ServicesSection = () => {
  return (
    <section id="red-zone" className="relative py-24 lg:py-40 overflow-hidden bg-brand-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: The Hook */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-green">
                  Risk Analysis
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] tracking-[-0.03em] text-brand-black mb-8">
                Is your vocabulary creating liability?
              </h2>
              <p className="text-lg text-brand-black/60 leading-relaxed mb-10 max-w-md">
                In the current regulatory environment, "absolute" claims must be accompanied by absolute proof. We specialise in de-risking high-stakes terminology through rigorous substantiation.
              </p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-4 p-4 rounded-2xl bg-brand-pale-green/30 border border-brand-green/10"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-brand-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-4.3-4.3"/><circle cx="10" cy="10" r="7"/><path d="M7 9l3 3 3-3"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-black">Regulatory Triage</p>
                  <p className="text-xs text-brand-black/50">Language Stress-Testing</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: The Interactive Elements */}
          <div className="lg:col-span-7 space-y-12">
            {/* Red Zone Terms Grid */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-black/40">
                High-Risk 'Red Zone' Terms
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {redZoneTerms.map((term, i) => (
                  <motion.div
                    key={term}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(73, 145, 103, 0.05)" }}
                    className="group p-6 rounded-3xl border border-brand-black/5 bg-brand-white flex justify-between items-center transition-all duration-300 cursor-default"
                  >
                    <span className="text-lg font-heading font-bold text-brand-black">{term}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-green text-xs font-bold uppercase tracking-tighter">High Exposure</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Requirements Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2.5rem] bg-brand-black p-8 lg:p-12 text-brand-white"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green opacity-10 blur-[100px]" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold mb-8">Mandatory Substantiation</h3>
                <div className="grid gap-6">
                  {requirements.map((req, i) => (
                    <div key={req} className="flex items-start gap-4">
                      <div className="mt-1.5 w-5 h-5 rounded-full border border-brand-green/30 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                      </div>
                      <p className="text-brand-white/80 font-medium">{req}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-brand-white/10 flex items-center justify-between">
                  <p className="text-sm text-brand-white/40 italic max-w-[280px]">
                    Failure to provide clear evidence leads to immediate enforcement risk.
                  </p>
                  <motion.img 
                    src={leafImg} 
                    className="w-16 h-16 opacity-20 invert grayscale" 
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
