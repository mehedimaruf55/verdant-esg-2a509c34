import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/verdant-esg-logo.png";
import { useFooterSection } from "@/hooks/useSanity";

const defaults = {
  newsletterSubtitle: "Stay Updated",
  newsletterHeading: "Subscribe to Our Newsletter",
  newsletterDescription: "Get the latest ESG insights, industry trends, and sustainability updates delivered to your inbox.",
  brandDescription: "A sustainability consultancy grounded in reality — delivering measurable ESG impact.",
  email: "hello@verdantesg.com",
  copyright: "© 2026 Verdant ESG. All rights reserved.",
  navColumns: [
    { _key: "nc1", title: "About", links: [{ _key: "l1", label: "Company", href: "#" }, { _key: "l2", label: "Press & Media", href: "#" }, { _key: "l3", label: "Our Partners", href: "#" }] },
    { _key: "nc2", title: "Services", links: [{ _key: "l4", label: "Built Environment", href: "#" }, { _key: "l5", label: "Corporate Sustainability", href: "#" }, { _key: "l6", label: "Net Zero Carbon", href: "#" }, { _key: "l7", label: "Carbon Credits", href: "#" }, { _key: "l8", label: "Certification", href: "#" }] },
    { _key: "nc3", title: "Company", links: [{ _key: "l9", label: "Projects", href: "#" }, { _key: "l10", label: "Insights", href: "#" }, { _key: "l11", label: "Resources", href: "#" }, { _key: "l12", label: "Meet the Team", href: "#" }, { _key: "l13", label: "Careers", href: "#" }] },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { data } = useFooterSection();
  const d = data || defaults;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubscribed(true); setEmail(""); setTimeout(() => setSubscribed(false), 4000); }
  };

  return (
    <footer className="bg-brand-green-dark">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <motion.div className="py-10 lg:py-14 border-b border-brand-white/10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            <div>
              <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">{d.newsletterSubtitle}</span>
              <h3 className="mt-2 lg:mt-3 text-xl md:text-2xl lg:text-3xl font-heading font-bold text-brand-white leading-tight">{d.newsletterHeading}</h3>
              <p className="mt-2 text-sm lg:text-base text-brand-white/50 max-w-md">{d.newsletterDescription}</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full lg:max-w-md">
              <div className="relative flex-1">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="w-full px-4 lg:px-5 py-3 lg:py-3.5 pr-12 lg:pr-14 rounded-full bg-brand-white/10 border border-brand-white/15 text-sm lg:text-base text-brand-white placeholder:text-brand-white/35 focus:outline-none focus:border-brand-green-light/50 transition-colors" />
                <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-brand-green-light flex items-center justify-center hover:bg-brand-white transition-colors duration-300 group">
                  <ArrowRight size={14} className="text-brand-white group-hover:text-brand-green-dark transition-colors" />
                </button>
              </div>
            </form>
          </div>
          {subscribed && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-sm text-brand-green-light lg:text-right">✓ Thank you for subscribing!</motion.p>}
        </motion.div>
        <motion.div className="py-10 lg:py-14 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="Verdant ESG" className="h-7 lg:h-8 brightness-0 invert" />
            <p className="mt-3 lg:mt-4 text-xs lg:text-sm text-brand-white/45 leading-relaxed max-w-xs">{d.brandDescription}</p>
            <a href={`mailto:${d.email}`} className="mt-4 lg:mt-5 inline-block text-xs lg:text-sm text-brand-white/60 hover:text-brand-green-light transition-colors">{d.email}</a>
          </div>
          {d.navColumns.map((col) => (
            <div key={col._key}>
              <h4 className="text-xs lg:text-sm font-bold tracking-[0.2em] uppercase text-brand-white/30 mb-4 lg:mb-5">{col.title}</h4>
              <div className="flex flex-col gap-2.5 lg:gap-3">
                {col.links.map((link) => (
                  <motion.a key={link._key} href={link.href} className="text-xs lg:text-sm text-brand-white/60 hover:text-brand-white transition-colors w-fit" whileHover={{ x: 4, transition: { duration: 0.2 } }}>{link.label}</motion.a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
        <div className="border-t border-brand-white/10 py-5 lg:py-6 flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-4">
          <p className="text-xs lg:text-sm text-brand-white/30">{d.copyright}</p>
          <div className="flex gap-5 lg:gap-6">
            <a href="#" className="text-xs lg:text-sm text-brand-white/30 hover:text-brand-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs lg:text-sm text-brand-white/30 hover:text-brand-white/60 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
