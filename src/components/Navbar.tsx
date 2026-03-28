import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/verdant-esg-logo.png";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; children?: { label: string; href: string }[] }[];
};

const navLinks: NavItem[] = [
  {
    label: "About",
    href: "#about",
    children: [
      { label: "Company", href: "#" },
      { label: "Press & Media", href: "#" },
      { label: "Our Partners", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Overview", href: "#services" },
      {
        label: "Built Environment",
        href: "#",
        children: [
          { label: "Sustainability Planning", href: "#" },
          { label: "Environmental Assessment", href: "#" },
          { label: "Building Performance", href: "#" },
          { label: "Biodiversity", href: "#" },
          { label: "Life Cycle Assessment", href: "#" },
        ],
      },
      {
        label: "Corporate Sustainability",
        href: "#",
        children: [
          { label: "ESG Consulting", href: "#" },
          { label: "Real Estate ESG", href: "#" },
          { label: "Climate Resilience", href: "#" },
          { label: "TCFD & TNFD Advisory", href: "#" },
        ],
      },
      {
        label: "Net Zero Carbon",
        href: "#",
        children: [
          { label: "Carbon Footprint Business", href: "#" },
          { label: "Carbon Footprint Buildings", href: "#" },
          { label: "Carbon Footprint Products", href: "#" },
          { label: "Carbon Footprint Events", href: "#" },
        ],
      },
      { label: "Carbon Credits & Offsetting", href: "#" },
      { label: "Certification", href: "#" },
      { label: "PPN Compliance Services", href: "#" },
    ],
  },
  { label: "Projects", href: "#" },
  { label: "Insights", href: "#" },
  {
    label: "Team",
    href: "#",
    children: [
      { label: "Meet the Team", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

const DropdownMenu = ({ items, level = 0 }: { items: NonNullable<NavItem["children"]>; level?: number }) => {
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: level === 0 ? 8 : 0, x: level > 0 ? -4 : 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: level === 0 ? 8 : 0, x: level > 0 ? -4 : 0 }}
      transition={{ duration: 0.2 }}
      className={`absolute ${level === 0 ? "top-full left-1/2 -translate-x-1/2 mt-2" : "top-0 left-full ml-1"} min-w-[220px] glass-strong rounded-xl py-2 shadow-lg border border-border z-50`}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && setOpenSub(item.label)}
          onMouseLeave={() => setOpenSub(null)}
        >
          <a
            href={item.href}
            className="flex items-center justify-between px-4 py-2.5 text-[13px] text-brand-black/80 hover:text-brand-green-dark hover:bg-brand-green-light/10 transition-colors"
          >
            {item.label}
            {item.children && <ChevronDown size={12} className="-rotate-90 ml-2 opacity-50" />}
          </a>
          <AnimatePresence>
            {item.children && openSub === item.label && (
              <DropdownMenu items={item.children} level={level + 1} />
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-2xl ${
        scrolled
          ? "top-3 left-[5%] right-[5%] glass-strong"
          : "top-4 left-4 right-4 glass"
      }`}
    >
      <div className={`mx-auto flex items-center justify-between px-6 lg:px-8 transition-all duration-700 ${
        scrolled ? "h-14" : "h-20"
      }`}>
        <a href="/" className="flex items-center">
          <img src={logo} alt="Verdant ESG" className="h-10" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <div
              key={l.label}
              className="relative"
              onMouseEnter={() => l.children && handleMouseEnter(l.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={l.href}
                className="relative flex items-center gap-1 px-4 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-black/70 hover:text-brand-green-dark transition-colors duration-300 group"
              >
                {l.label}
                {l.children && <ChevronDown size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-brand-green-dark group-hover:w-3/4 transition-all duration-300" />
              </a>
              <AnimatePresence>
                {l.children && activeDropdown === l.label && (
                  <DropdownMenu items={l.children} />
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="ml-3 h-5 w-px bg-brand-black/10" />
          <a
            href="#contact"
            className="ml-3 px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.15em] bg-brand-green-dark text-brand-white rounded-full hover:bg-brand-green-light transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-brand-black"
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
            className="lg:hidden overflow-hidden border-t border-brand-black/5 glass-strong rounded-b-2xl max-h-[70vh] overflow-y-auto"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <div key={l.label}>
                  <div className="flex items-center justify-between">
                    <motion.a
                      href={l.href}
                      onClick={() => !l.children && setOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex-1 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-brand-black"
                    >
                      {l.label}
                    </motion.a>
                    {l.children && (
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === l.label ? null : l.label)}
                        className="p-2 text-brand-black/50"
                      >
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${mobileExpanded === l.label ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {l.children && mobileExpanded === l.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 border-l-2 border-brand-green-light/30 ml-1"
                      >
                        {l.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-[13px] text-brand-black/70 hover:text-brand-green-dark transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 text-center px-5 py-3 text-[12px] font-bold uppercase tracking-[0.15em] bg-brand-green-dark text-brand-white rounded-full"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
