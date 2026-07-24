import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const services = [
  {
    title: "Green Claims Risk Audit",
    href: "/services/green-claims-risk-audit",
    description: "A structured review of your live and planned environmental claims against the CMA's six-point test.",
  },
  {
    title: "Ongoing Compliance Support",
    href: "/services/ongoing-compliance-support",
    description: "Continuous advisory and sign-off on new campaigns, packaging, and disclosures.",
  },
  {
    title: "Supply Chain Transparency Review",
    href: "/services/supply-chain-transparency-review",
    description: "Trace the evidence behind sourcing, materials, and lifecycle claims to their primary data.",
  },
  {
    title: "Regulatory Response Readiness",
    href: "/services/regulatory-response-readiness",
    description: "Prepare defensible responses to regulator enquiries, complaints, and investigations.",
  },
  {
    title: "AI-Assisted Green Claims Screening",
    href: "/services/ai-assisted-green-claims-screening",
    description: "Fast, first-pass screening of copy for high-risk terminology, framing, and omissions.",
    highlight: true,
  },
];

const Services = () => (
  <PageLayout>
    <PageHero
      subtitle="Services"
      title="Technical services for defensible environmental claims."
      description="From one-off risk audits to embedded compliance support — scoped to your regulatory exposure."
    />
    <section className="py-16 lg:py-24 bg-brand-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-10 grid md:grid-cols-2 gap-5 lg:gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <Link
              to={s.href}
              className={`group block h-full p-8 lg:p-10 rounded-2xl lg:rounded-[1.75rem] border transition-all duration-300 ${
                s.highlight
                  ? "bg-brand-green-dark border-brand-green-dark text-brand-white hover:bg-brand-green-light hover:text-brand-black"
                  : "bg-brand-white border-brand-black/[0.08] hover:border-brand-green-dark/40 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)]"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className={`text-xl lg:text-2xl font-heading font-bold leading-tight ${s.highlight ? "" : "text-brand-black"}`}>
                  {s.title}
                </h3>
                <ArrowUpRight
                  size={20}
                  className={`shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    s.highlight ? "text-brand-white group-hover:text-brand-black" : "text-brand-green-dark"
                  }`}
                />
              </div>
              <p className={`mt-4 text-sm lg:text-base leading-relaxed ${s.highlight ? "text-brand-white/80 group-hover:text-brand-black/70" : "text-brand-grey"}`}>
                {s.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default Services;
