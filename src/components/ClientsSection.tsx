import { motion } from "framer-motion";

const clients = [
  "Accenture", "Deloitte", "McKinsey", "KPMG", "PwC", "EY",
  "BCG", "Bain", "Goldman Sachs", "BlackRock", "Unilever", "Nestlé",
];

const ClientsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-brand-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-green-dark">
            Our Clients
          </h2>
          <p className="mt-4 text-[15px] text-brand-grey">
            Thanks to our broad range of specialists, our clients include the following:
          </p>
        </motion.div>

        {/* Scrolling carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-8 items-center">
              {[...clients, ...clients].map((name, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-8 py-4 border border-border rounded-lg text-brand-grey font-heading font-bold text-base whitespace-nowrap hover:text-brand-green-dark hover:border-brand-green-dark/30 transition-colors duration-300"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-[13px] text-brand-grey/60 mt-10">
          Placeholder — replace with your actual client logos
        </p>
      </div>
    </section>
  );
};

export default ClientsSection;
