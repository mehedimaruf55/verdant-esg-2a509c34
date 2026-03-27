import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "ESG Strategy",
    description: "Develop comprehensive ESG frameworks aligned with your business objectives and stakeholder expectations.",
  },
  {
    title: "Compliance & Reporting",
    description: "Navigate regulatory requirements and produce transparent, standards-aligned sustainability reports.",
  },
  {
    title: "Sustainability Consulting",
    description: "Identify opportunities to reduce environmental impact while strengthening operational efficiency.",
  },
  {
    title: "Risk & Governance",
    description: "Assess and mitigate ESG-related risks with robust governance structures and oversight frameworks.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 lg:py-36 bg-verdant-light-bg">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">Services</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
          What We Do
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-sm p-8 lg:p-10 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
