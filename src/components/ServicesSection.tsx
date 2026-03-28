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
    <section id="services" className="py-28 lg:py-36 bg-brand-grey-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-green-light text-sm font-medium tracking-wide mb-3">We Take Care of What Matters</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.1] text-brand-black max-w-2xl">
            Our Services
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group bg-brand-white rounded-lg p-8 lg:p-10 border border-border hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
                <div className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-brand-grey group-hover:bg-brand-green-dark group-hover:text-brand-white group-hover:border-brand-green-dark transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
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
            className="inline-block text-brand-green-dark font-semibold text-[15px] border-b-2 border-brand-green-dark hover:text-brand-green-light hover:border-brand-green-light transition-colors duration-300"
          >
            More About our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
