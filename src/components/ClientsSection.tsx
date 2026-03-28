import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";
import clientLogo1 from "@/assets/client-logo-1.png";
import clientLogo2 from "@/assets/client-logo-2.png";
import clientLogo3 from "@/assets/client-logo-3.png";
import clientLogo4 from "@/assets/client-logo-4.png";

const logos = [clientLogo1, clientLogo2, clientLogo3, clientLogo4];

const clients = [
  "Accenture", "Deloitte", "McKinsey", "KPMG", "PwC", "EY",
  "BCG", "Bain & Co", "Goldman Sachs", "BlackRock", "Unilever", "Nestlé",
];

const ClientsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-grey-light overflow-hidden">
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
                  className="flex-shrink-0 bg-brand-white rounded-2xl px-8 py-5 border border-border flex items-center gap-3 whitespace-nowrap hover:border-brand-green-dark/30 transition-colors duration-300"
                >
                  <img
                    src={logos[i % logos.length]}
                    alt={name}
                    loading="lazy"
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain opacity-70"
                  />
                  <span className="text-brand-grey font-heading font-bold text-[15px] tracking-wide">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
