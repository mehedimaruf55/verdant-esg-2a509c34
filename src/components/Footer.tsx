import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/verdant-esg-logo.png";

const footerNav = {
  About: [
    { label: "Company", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Our Partners", href: "#" },
  ],
  Services: [
    { label: "Built Environment", href: "#" },
    { label: "Corporate Sustainability", href: "#" },
    { label: "Net Zero Carbon", href: "#" },
    { label: "Carbon Credits", href: "#" },
    { label: "Certification", href: "#" },
  ],
  Company: [
    { label: "Projects", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Meet the Team", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-brand-green-dark">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Newsletter Banner */}
        <motion.div
          className="py-14 border-b border-brand-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">
                Stay Updated
              </span>
              <h3 className="mt-3 text-2xl md:text-3xl font-heading font-bold text-brand-white leading-tight">
                Subscribe to Our Newsletter
              </h3>
              <p className="mt-2 text-base text-brand-white/50 max-w-md">
                Get the latest ESG insights, industry trends, and sustainability updates delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full lg:max-w-md">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-3.5 pr-14 rounded-full bg-brand-white/10 border border-brand-white/15 text-base text-brand-white placeholder:text-brand-white/35 focus:outline-none focus:border-brand-green-light/50 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-green-light flex items-center justify-center hover:bg-brand-white transition-colors duration-300 group"
                >
                  <ArrowRight size={16} className="text-brand-white group-hover:text-brand-green-dark transition-colors" />
                </button>
              </div>
            </form>
          </div>
          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-brand-green-light lg:text-right"
            >
              ✓ Thank you for subscribing!
            </motion.p>
          )}
        </motion.div>

        {/* Main Footer Grid */}
        <motion.div
          className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="Verdant ESG" className="h-8 brightness-0 invert" />
            <p className="mt-4 text-sm text-brand-white/45 leading-relaxed max-w-xs">
              A sustainability consultancy grounded in reality — delivering measurable ESG impact.
            </p>
            <a
              href="mailto:hello@verdantesg.com"
              className="mt-5 inline-block text-sm text-brand-white/60 hover:text-brand-green-light transition-colors"
            >
              hello@verdantesg.com
            </a>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-white/30 mb-5">
                {title}
              </h4>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-brand-white/60 hover:text-brand-white transition-colors w-fit"
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-white/30">© 2026 Verdant ESG. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-brand-white/30 hover:text-brand-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-brand-white/30 hover:text-brand-white/60 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;