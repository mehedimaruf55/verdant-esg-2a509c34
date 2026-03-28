import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { num: "01", title: "ESG Strategy", description: "Develop comprehensive ESG frameworks aligned with your business objectives and stakeholder expectations." },
  { num: "02", title: "Compliance & Reporting", description: "Navigate regulatory requirements and produce transparent, standards-aligned sustainability reports." },
  { num: "03", title: "Sustainability Consulting", description: "Identify opportunities to reduce environmental impact while strengthening operational efficiency." },
  { num: "04", title: "Risk & Governance", description: "Assess and mitigate ESG-related risks with robust governance structures and oversight frameworks." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-brand-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-green-light/[0.04] blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-green-light mb-4 block">Services</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-black">
            What We Do
          </h2>
        </motion.div>

        <div className="mt-14 space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              className="group glass rounded-2xl px-8 lg:px-10 py-8 lg:py-10 grid lg:grid-cols-12 gap-4 lg:gap-8 items-center cursor-pointer hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-500"
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="lg:col-span-1 text-xs text-brand-grey/40 font-mono">{service.num}</span>
              <h3 className="lg:col-span-4 text-2xl lg:text-3xl font-heading font-semibold text-brand-black group-hover:text-brand-green-dark transition-colors duration-300">
                {service.title}
              </h3>
              <p className="lg:col-span-6 text-[15px] text-brand-grey leading-relaxed">{service.description}</p>
              <div className="lg:col-span-1 flex justify-end">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-grey group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:shadow-[0_4px_16px_hsl(var(--primary)/0.3)]">
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
