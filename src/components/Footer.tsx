import { motion } from "framer-motion";
import logo from "@/assets/verdant-esg-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-green-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          className="py-14 grid md:grid-cols-3 gap-10 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <img src={logo} alt="Verdant ESG" className="h-8 brightness-0 invert" />
            <p className="mt-4 text-[14px] text-brand-white/45 leading-relaxed max-w-xs">
              A sustainability consultancy grounded in reality — delivering measurable ESG impact.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-white/30 mb-5">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Why Verdant", href: "#why" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-brand-white/60 hover:text-brand-white transition-colors w-fit"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-white/30 mb-5">Contact</h4>
            <a href="mailto:hello@verdantesg.com" className="text-[14px] text-brand-white/60 hover:text-brand-white transition-colors">
              hello@verdantesg.com
            </a>
          </div>
        </motion.div>
        <div className="border-t border-brand-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-brand-white/30">© 2026 Verdant ESG. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[12px] text-brand-white/30 hover:text-brand-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[12px] text-brand-white/30 hover:text-brand-white/60 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
