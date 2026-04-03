import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import logo from "@/assets/verdant-esg-logo.png";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; children?: { label: string; href: string }[] }[];
};

const navLinks: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company", href: "/about" },
      { label: "Press & Media", href: "/about" },
      { label: "Our Partners", href: "/about" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Overview", href: "/services" },
      {
        label: "Built Environment",
        href: "/services/built-environment",
        children: [
          { label: "Sustainability for Planning", href: "/services/built-environment" },
          { label: "Environmental Assessment", href: "/services/built-environment" },
          { label: "Building Performance", href: "/services/built-environment" },
          { label: "Biodiversity", href: "/services/built-environment" },
          { label: "Life Cycle Assessment", href: "/services/built-environment" },
        ],
      },
      {
        label: "Corporate Sustainability",
        href: "/services/corporate-sustainability",
        children: [
          { label: "ESG Consulting", href: "/services/corporate-sustainability" },
          { label: "Real Estate ESG", href: "/services/corporate-sustainability" },
          { label: "Net Zero Carbon", href: "/services/net-zero-carbon" },
          { label: "Climate Resilience", href: "/services/corporate-sustainability" },
          { label: "TCFD & TNFD Advisory", href: "/services/corporate-sustainability" },
          { label: "PPN Compliance Services", href: "/services/corporate-sustainability" },
        ],
      },
      {
        label: "Net Zero Carbon Consultants",
        href: "/services/net-zero-carbon",
        children: [
          { label: "Carbon Footprint your Business", href: "/services/net-zero-carbon" },
          { label: "Carbon Footprint your Buildings", href: "/services/net-zero-carbon" },
          { label: "Carbon Footprint your Products", href: "/services/net-zero-carbon" },
          { label: "Carbon Footprint your Events", href: "/services/net-zero-carbon" },
        ],
      },
      { label: "Carbon Credits and Offsetting", href: "/services/net-zero-carbon" },
      { label: "Certification", href: "/services/assurance-certification" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Resources", href: "/resources" },
  {
    label: "Team",
    href: "/team",
    children: [
      { label: "Meet the Team", href: "/team" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

/* ─── Dropdown (recursive, supports fly-out submenus) ─── */
const DropdownPanel = ({
  items,
  level = 0,
}: {
  items: NonNullable<NavItem["children"]>;
  level?: number;
}) => {
  const [openSub, setOpenSub] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenSub(label);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenSub(null), 120);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: level === 0 ? 16 : 0, x: level > 0 ? -10 : 0, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      exit={{ opacity: 0, y: level === 0 ? 10 : 0, x: level > 0 ? -6 : 0, scale: 0.96 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${
        level === 0
          ? "top-full left-0 mt-6"
          : "top-[-8px] left-full ml-2"
      } min-w-[270px] z-50`}
    >
      <div className="rounded-2xl bg-white/98 lg:bg-white/95 lg:backdrop-blur-3xl lg:backdrop-saturate-[1.8] border border-white/60 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.7)_inset,0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="py-2.5 px-1.5">
          {items.map((item, idx) => {
            const hasChildren = !!item.children;
            const isActive = openSub === item.label;

            return (
              <motion.div
                key={item.label}
                className="relative"
                initial={level === 0 ? { opacity: 0, y: 6 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: level === 0 ? idx * 0.03 : 0, duration: 0.2 }}
                onMouseEnter={() => hasChildren ? handleEnter(item.label) : setOpenSub(null)}
                onMouseLeave={handleLeave}
              >
                <a
                  href={item.href}
                  className={`group relative flex items-center justify-between px-4 py-3 rounded-xl text-[15px] transition-all duration-200 ${
                    isActive
                      ? "text-brand-green-dark bg-brand-green-dark/[0.12] font-medium"
                      : "text-brand-black/80 hover:text-brand-green-dark hover:bg-brand-green-dark/[0.06] font-normal"
                  }`}
                >
                  <span>{item.label}</span>
                  {hasChildren && (
                    <ChevronRight
                      size={14}
                      className={`transition-all duration-200 ${
                        isActive
                          ? "opacity-90 translate-x-0.5 text-brand-green-dark"
                          : "opacity-20 group-hover:opacity-50"
                      }`}
                    />
                  )}
                </a>

                {hasChildren && idx < items.length - 1 && (
                  <div className="mx-4 my-1.5 h-px bg-brand-black/[0.04]" />
                )}

                <AnimatePresence>
                  {hasChildren && isActive && (
                    <DropdownPanel items={item.children!} level={level + 1} />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Mobile Sub-Menu (with nested accordion) ─── */
const MobileSubMenu = ({
  items,
  level = 0,
  onClose,
}: {
  items: NonNullable<NavItem["children"]>;
  level?: number;
  onClose: () => void;
}) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className="overflow-hidden"
    >
      <div className={`${level === 0 ? "pl-3 ml-2 border-l-2 border-brand-green-light/20" : "pl-3 ml-1 border-l border-brand-green-light/10"}`}>
        {items.map((child) => (
          <div key={child.label}>
            <div className="flex items-center justify-between">
              <a
                href={child.href}
                onClick={() => !child.children && onClose()}
                className={`flex-1 py-2 text-[13px] transition-colors ${
                  level === 0
                    ? "text-brand-black/75 hover:text-brand-green-dark font-medium"
                    : "text-brand-black/60 hover:text-brand-green-dark"
                }`}
              >
                {child.label}
              </a>
              {child.children && (
                <button
                  onClick={() => setExpanded(expanded === child.label ? null : child.label)}
                  className="p-1.5 text-brand-black/40 hover:text-brand-green-dark transition-colors"
                >
                  <ChevronDown
                    size={11}
                    className={`transition-transform duration-200 ${expanded === child.label ? "rotate-180" : ""}`}
                  />
                </button>
              )}
            </div>
            <AnimatePresence>
              {child.children && expanded === child.label && (
                <MobileSubMenu items={child.children} level={level + 1} onClose={onClose} />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Main Navbar ─── */
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
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none px-3 lg:px-0">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
        className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          scrolled
            ? "mt-2 lg:mt-2.5 w-full max-w-6xl rounded-xl bg-white/50 backdrop-blur-lg backdrop-saturate-150 lg:bg-white/60 lg:backdrop-blur-xl lg:backdrop-saturate-[1.8] border border-white/30 lg:border-white/40 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.3)_inset]"
            : "mt-2 lg:mt-3 w-full max-w-6xl rounded-xl bg-white/35 backdrop-blur-md backdrop-saturate-125 lg:bg-white/40 lg:backdrop-blur-lg lg:backdrop-saturate-[1.5] border border-white/25 lg:border-white/30 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)]"
        }`}
      >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-700 ${
          scrolled ? "px-4 lg:px-6 h-[60px] lg:h-[68px]" : "px-5 lg:px-8 h-16 lg:h-[80px]"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Verdant ESG"
            className={`transition-all duration-500 ${scrolled ? "h-12 lg:h-14" : "h-14 lg:h-16"}`}
          />
        </a>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center">
          {navLinks.map((l) => (
            <div
              key={l.label}
              className="relative"
              onMouseEnter={() => l.children ? handleMouseEnter(l.label) : setActiveDropdown(null)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={l.href}
                className={`relative flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-200 group ${
                  activeDropdown === l.label
                    ? "text-brand-green-dark bg-brand-green-dark/[0.08]"
                    : "text-black hover:text-brand-green-dark hover:bg-brand-green-dark/[0.05]"
                }`}
              >
                {l.label}
                {l.children && (
                  <ChevronDown
                    size={11}
                    className={`transition-all duration-300 ${
                      activeDropdown === l.label
                        ? "opacity-100 rotate-180 text-brand-green-dark"
                        : "opacity-40 group-hover:opacity-70"
                    }`}
                  />
                )}
              </a>
              <AnimatePresence>
                {l.children && activeDropdown === l.label && (
                  <DropdownPanel items={l.children} />
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Divider + CTA */}
          <div className="ml-3 h-5 w-px bg-gradient-to-b from-transparent via-brand-black/10 to-transparent" />
          <a
            href="/contact"
            className="ml-3 px-5 py-2 text-[12px] font-bold uppercase tracking-[0.14em] bg-brand-green-dark text-brand-white rounded-full hover:bg-brand-green-light hover:shadow-[0_4px_20px_-4px_rgba(106,186,69,0.4)] transition-all duration-300 active:scale-[0.97]"
          >
            Contact
          </a>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-1.5 text-brand-black/70 hover:text-brand-green-dark transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={18} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden"
          >
            <div className="border-t border-brand-black/[0.06]" />
            <div className="px-4 py-4 flex flex-col gap-0.5 max-h-[65vh] overflow-y-auto">
              {navLinks.map((l, i) => (
                <div key={l.label}>
                  <div className="flex items-center justify-between">
                    <motion.a
                      href={l.href}
                      onClick={() => !l.children && setOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                      className="flex-1 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-black/85 hover:text-brand-green-dark transition-colors"
                    >
                      {l.label}
                    </motion.a>
                    {l.children && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.04 + 0.1 }}
                        onClick={() => setMobileExpanded(mobileExpanded === l.label ? null : l.label)}
                        className="p-1.5 text-brand-black/40 hover:text-brand-green-dark transition-colors rounded-lg hover:bg-brand-green-light/[0.06]"
                      >
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-250 ${mobileExpanded === l.label ? "rotate-180" : ""}`}
                        />
                      </motion.button>
                    )}
                  </div>
                  <AnimatePresence>
                    {l.children && mobileExpanded === l.label && (
                      <MobileSubMenu items={l.children} onClose={() => setOpen(false)} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <motion.a
                href="/contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-3 text-center px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] bg-brand-green-dark text-brand-white rounded-full hover:bg-brand-green-light transition-all duration-300"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
