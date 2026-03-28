import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

const clients = [
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
  { name: "McKinsey", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/McKinsey_and_Company_Logo_1.svg" },
  { name: "KPMG", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg" },
  { name: "PwC", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg" },
  { name: "EY", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" },
  { name: "BCG", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/BCG_Corporate_Logo.svg" },
  { name: "Goldman Sachs", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg" },
  { name: "Unilever", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Unilever_logo_2023.svg" },
  { name: "Nestlé", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Nestl%C3%A9.svg" },
  { name: "BlackRock", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/BlackRock_wordmark.svg" },
  { name: "Bain", logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/Bain_and_Company_Logo_1.svg" },
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
            <div className="flex animate-scroll gap-8 items-center">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-brand-white rounded-2xl px-8 py-5 border border-border flex items-center justify-center h-[72px] min-w-[160px] hover:border-brand-green-dark/30 transition-colors duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-8 max-w-[120px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
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
