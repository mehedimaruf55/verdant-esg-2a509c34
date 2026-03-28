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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-green-light" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-brand-green-light">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] text-brand-green-dark max-w-2xl">
            Our Services
          </h2>
          <p className="mt-4 text-[16px] text-brand-grey max-w-xl leading-relaxed">
            We deliver practical environmental sustainability solutions across a portfolio of work areas.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-0 border border-border rounded-sm overflow-hidden">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href="#contact"
              className={`group relative bg-brand-white p-8 lg:p-10 hover:bg-brand-grey-light transition-colors duration-300 ${
                i >= 2 ? "border-t border-border" : ""
              } ${i % 2 !== 0 ? "md:border-l border-border" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-brand-black group-hover:text-brand-green-dark transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[15px] text-brand-grey leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="shrink-0 w-9 h-9 rounded-full border border-brand-grey/20 flex items-center justify-center text-brand-grey/40 group-hover:bg-brand-green-dark group-hover:text-brand-white group-hover:border-brand-green-dark transition-all duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </div>
              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-green-light group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-green-dark font-semibold text-[14px] tracking-wide hover:text-brand-green-light transition-colors duration-300 group"
          >
            More About our Services
            <span className="w-6 h-px bg-brand-green-dark group-hover:w-10 group-hover:bg-brand-green-light transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
