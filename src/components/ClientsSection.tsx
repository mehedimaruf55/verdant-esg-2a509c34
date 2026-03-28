import { motion } from "framer-motion";

const clients = [
  "Accenture",
  "Deloitte",
  "McKinsey",
  "KPMG",
  "PwC",
  "EY",
  "BCG",
  "Bain",
  "Goldman Sachs",
  "BlackRock",
  "Unilever",
  "Nestlé",
];

const ClientsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-brand-grey-light relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-green-light/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-green-light mb-4 block">
            Trusted By
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-black">
            Our Clients
          </h2>
        </motion.div>

        {/* Infinite scrolling carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-grey-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-grey-light to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-12 lg:gap-16 items-center">
              {[...clients, ...clients].map((name, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 glass rounded-xl px-8 py-5 text-brand-grey font-heading font-bold text-lg tracking-wide whitespace-nowrap hover:text-brand-green-dark hover:border-brand-green-light/30 transition-colors duration-300"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          className="text-center text-[13px] text-brand-grey mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Placeholder logos — replace with your actual client brands
        </motion.p>
      </div>
    </section>
  );
};

export default ClientsSection;
