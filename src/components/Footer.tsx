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

const columnStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const columnFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
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
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        {/* Newsletter Banner */}
        <motion.div
          className="py-10 lg:py-14 border-b border-brand-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            <div>
              <motion.span
                className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Stay Updated
              </motion.span>
              <h3 className="mt-2 lg:mt-3 text-xl md:text-2xl lg:text-3xl font-heading font-bold text-brand-white leading-tight">
                Subscribe to Our Newsletter
              </h3>
              <p className="mt-2 text-sm lg:text-base text-brand-white/50 max-w-md">
                Get the latest ESG insights, industry trends, and sustainability updates delivered to your inbox.
              </p>
            </div>
            <motion.form
              onSubmit={handleSubscribe}
              className="flex w-full lg:max-w-md"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 lg:px-5 py-3 lg:py-3.5 pr-12 lg:pr-14 rounded-full bg-brand-white/10 border border-brand-white/15 text-sm lg:text-base text-brand-white placeholder:text-brand-white/35 focus:outline-none focus:border-brand-green-light/50 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-brand-green-light flex items-center justify-center hover:bg-brand-white transition-colors duration-300 group"
                >
                  <ArrowRight size={14} className="text-brand-white group-hover:text-brand-green-dark transition-colors" />
                </button>
              </div>
            </motion.form>
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
          className="py-10 lg:py-14 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10"
          variants={columnStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand Column */}
          <motion.div className="col-span-2 md:col-span-1" variants={columnFade}>
            <img src={logo} alt="Verdant ESG" className="h-7 lg:h-8 brightness-0 invert" />
            <p className="mt-3 lg:mt-4 text-xs lg:text-sm text-brand-white/45 leading-relaxed max-w-xs">
              A sustainability consultancy grounded in reality — delivering measurable ESG impact.
            </p>
            <a
              href="mailto:hello@verdantesg.com"
              className="mt-4 lg:mt-5 inline-block text-xs lg:text-sm text-brand-white/60 hover:text-brand-green-light transition-colors"
            >
              hello@verdantesg.com
            </a>
          </motion.div>

          {/* Nav Columns */}
          {Object.entries(footerNav).map(([title, links]) => (
            <motion.div key={title} variants={columnFade}>
              <h4 className="text-xs lg:text-sm font-bold tracking-[0.2em] uppercase text-brand-white/30 mb-4 lg:mb-5">
                {title}
              </h4>
              <div className="flex flex-col gap-2.5 lg:gap-3">
                {links.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-xs lg:text-sm text-brand-white/60 hover:text-brand-white transition-colors w-fit"
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-brand-white/10 py-5 lg:py-6 flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xs lg:text-sm text-brand-white/30">© 2026 Verdant ESG. All rights reserved.</p>
          <div className="flex gap-5 lg:gap-6">
            <a href="#" className="text-xs lg:text-sm text-brand-white/30 hover:text-brand-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs lg:text-sm text-brand-white/30 hover:text-brand-white/60 transition-colors">Terms of Use</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
