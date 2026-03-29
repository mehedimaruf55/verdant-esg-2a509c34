import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useServicesSection } from "@/hooks/useSanity";

const defaults = {
  subtitle: "What We Do",
  heading: "Our Services",
  description: "We deliver practical environmental sustainability solutions across a portfolio of work areas.",
  services: [
    { _key: "sv1", title: "ESG Strategy", description: "Develop comprehensive ESG frameworks aligned with your business objectives and stakeholder expectations." },
    { _key: "sv2", title: "Compliance & Reporting", description: "Navigate regulatory requirements and produce transparent, standards-aligned sustainability reports." },
    { _key: "sv3", title: "Sustainability Consulting", description: "Identify opportunities to reduce environmental impact while strengthening operational efficiency." },
    { _key: "sv4", title: "Risk & Governance", description: "Assess and mitigate ESG-related risks with robust governance structures and oversight frameworks." },
  ],
};

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardFade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };

const ServicesSection = () => {
  const { data } = useServicesSection();
  const d = data || defaults;

  return (
    <section id="services" className="py-20 lg:py-36 bg-brand-white">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light" />
            <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">{d.subtitle}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-black max-w-2xl">{d.heading}</h2>
          <p className="mt-3 lg:mt-4 text-sm lg:text-base text-brand-grey max-w-xl leading-relaxed">{d.description}</p>
        </motion.div>
        <motion.div className="mt-10 lg:mt-14 grid md:grid-cols-2 gap-4 lg:gap-5" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
          {d.services.map((service, i) => (
            <motion.div key={service._key} className="group bg-brand-grey-light rounded-2xl lg:rounded-3xl p-6 lg:p-10 cursor-pointer hover:shadow-lg border border-transparent hover:border-border transition-all duration-500 relative overflow-hidden" variants={cardFade} whileHover={{ y: -4, transition: { duration: 0.25 } }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs lg:text-sm text-brand-grey tracking-[0.2em] font-medium">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 lg:mt-3 text-lg lg:text-2xl font-heading font-bold text-brand-black group-hover:text-brand-green-dark transition-colors duration-300">{service.title}</h3>
                  <p className="mt-3 lg:mt-4 text-sm lg:text-base text-brand-grey leading-relaxed">{service.description}</p>
                </div>
                <motion.div className="shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-brand-white border border-border flex items-center justify-center text-brand-grey group-hover:bg-brand-green-dark group-hover:text-brand-white group-hover:border-brand-green-dark transition-all duration-300" whileHover={{ rotate: 45, transition: { duration: 0.25 } }}>
                  <ArrowUpRight size={14} />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-green-light group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
