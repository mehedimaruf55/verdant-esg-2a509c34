import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

const clients = [
  "Accenture", "Deloitte", "McKinsey", "KPMG", "PwC", "EY",
  "BCG", "Bain", "Goldman Sachs", "BlackRock", "Unilever", "Nestlé",
];

const ClientsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-grey-light overflow-hidden">
      {/* Leaf watermark */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-[5%] -right-[8%] w-[38vw] max-w-[480px] min-w-[260px] opacity-[0.08] select-none pointer-events-none rotate-[10deg]"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light" />
            <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-green-light">Trusted By</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black">
            Our Clients
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-grey-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-grey-light to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-5 items-center">
              {[...clients, ...clients].map((name, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-brand-white rounded-2xl px-8 py-5 border border-border text-brand-grey font-heading font-bold text-[15px] whitespace-nowrap hover:text-brand-green-dark hover:border-brand-green-dark/30 transition-colors duration-300"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-[12px] text-brand-grey mt-10 tracking-wide">
          Placeholder — replace with your actual client logos
        </p>
      </div>
    </section>
  );
};

export default ClientsSection;
