import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/verdant-esg-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Verdant", href: "#why" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        scrolled
          ? "top-3 w-[calc(100%-2rem)] max-w-5xl rounded-2xl glass-strong"
          : "top-4 w-[calc(100%-2rem)] max-w-7xl rounded-2xl glass"
      }`}
    >
      <div className={`mx-auto flex items-center justify-between px-6 lg:px-10 transition-all duration-700 ${
        scrolled ? "h-14 max-w-5xl" : "h-20 max-w-7xl"
      }`}>
        <a href="/" className="flex items-center">
          <img src={logo} alt="Verdant ESG" className="h-10" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative px-5 py-2 text-[13px] font-bold uppercase tracking-[0.15em] text-brand-black/70 hover:text-brand-green-dark transition-colors duration-300 group"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-brand-green-dark group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
          <div className="ml-4 h-5 w-px bg-brand-black/10" />
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.2em] bg-brand-green-dark text-brand-white rounded-full hover:bg-brand-green-light transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-brand-black"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-brand-black/5 glass-strong rounded-b-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-sm font-bold uppercase tracking-[0.15em] text-brand-black"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 text-center px-5 py-3 text-[12px] font-bold uppercase tracking-[0.2em] bg-brand-green-dark text-brand-white rounded-full"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
