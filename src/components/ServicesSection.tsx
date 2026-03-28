import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "ESG Strategy", description: "Develop comprehensive ESG frameworks aligned with your business objectives and stakeholder expectations." },
  { title: "Compliance & Reporting", description: "Navigate regulatory requirements and produce transparent, standards-aligned sustainability reports." },
  { title: "Sustainability Consulting", description: "Identify opportunities to reduce environmental impact while strengthening operational efficiency." },
  { title: "Risk & Governance", description: "Assess and mitigate ESG-related risks with robust governance structures and oversight frameworks." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 lg:py-36 bg-brand-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green-light glow-dot" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-brand-green-light">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-black max-w-2xl">
            Our Services
          </h2>
          <p className="mt-4 text-[16px] text-brand-grey max-w-xl leading-relaxed">
            We deliver practical environmental sustainability solutions across a portfolio of work areas.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group bg-brand-grey-light rounded-3xl p-8 lg:p-10 cursor-pointer hover:shadow-lg border border-transparent hover:border-border transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] text-brand-grey tracking-[0.2em] font-medium">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-xl lg:text-2xl font-heading font-bold text-brand-black group-hover:text-brand-green-dark transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[15px] text-brand-grey leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand-white border border-border flex items-center justify-center text-brand-grey group-hover:bg-brand-green-dark group-hover:text-brand-white group-hover:border-brand-green-dark transition-all duration-300">
                  <ArrowUpRight size={15} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-green-light group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
