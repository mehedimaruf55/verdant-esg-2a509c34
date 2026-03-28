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
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-500 ${
        scrolled
          ? "bg-background/40 backdrop-blur-xl border border-border/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
          : "bg-background/20 backdrop-blur-md border border-border/15"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between h-20 px-6 lg:px-10">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Verdant ESG" className="h-10" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative px-5 py-2 text-[13px] font-bold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-primary group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
          <div className="ml-6 h-5 w-px bg-border" />
          <a
            href="#contact"
            className="ml-6 px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.2em] bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
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
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-2xl"
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
                  className="text-sm font-bold uppercase tracking-[0.15em] text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 text-center px-5 py-3 text-[12px] font-bold uppercase tracking-[0.2em] bg-foreground text-background rounded-full"
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
