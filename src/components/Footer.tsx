import logo from "@/assets/verdant-esg-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-brand-grey/15 py-10 bg-brand-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Verdant ESG" className="h-5 opacity-70" />
        <div className="flex items-center gap-8 text-[13px] text-brand-grey">
          <a href="#about" className="hover:text-brand-black transition-colors">About</a>
          <a href="#services" className="hover:text-brand-black transition-colors">Services</a>
          <a href="#why" className="hover:text-brand-black transition-colors">Why Verdant</a>
          <a href="#contact" className="hover:text-brand-black transition-colors">Contact</a>
        </div>
        <p className="text-xs text-brand-grey/60">© 2026 Verdant ESG</p>
      </div>
    </footer>
  );
};

export default Footer;
