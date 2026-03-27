import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "ESG Strategy",
    description: "Develop comprehensive ESG frameworks aligned with your business objectives and stakeholder expectations.",
  },
  {
    num: "02",
    title: "Compliance & Reporting",
    description: "Navigate regulatory requirements and produce transparent, standards-aligned sustainability reports.",
  },
  {
    num: "03",
    title: "Sustainability Consulting",
    description: "Identify opportunities to reduce environmental impact while strengthening operational efficiency.",
  },
  {
    num: "04",
    title: "Risk & Governance",
    description: "Assess and mitigate ESG-related risks with robust governance structures and oversight frameworks.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 lg:py-40 bg-verdant-surface">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-secondary mb-4 block">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.05] tracking-[-0.02em] text-foreground">
            What We Do
          </h2>
        </motion.div>

        <div className="mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              className="group border-t border-border last:border-b py-8 lg:py-10 grid lg:grid-cols-12 gap-4 lg:gap-8 items-center cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="lg:col-span-1 text-xs text-muted-foreground font-mono">
                {service.num}
              </span>
              <h3 className="lg:col-span-4 text-2xl lg:text-3xl font-heading font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="lg:col-span-6 text-[15px] text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="lg:col-span-1 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-foreground/30 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
