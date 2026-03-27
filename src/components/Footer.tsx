import logo from "@/assets/verdant-esg-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-brand-white/10 py-10 bg-brand-green-dark">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Verdant ESG" className="h-5 brightness-0 invert opacity-60" />
        <div className="flex items-center gap-8 text-[13px] text-brand-white/50">
          <a href="#about" className="hover:text-brand-white transition-colors">About</a>
          <a href="#services" className="hover:text-brand-white transition-colors">Services</a>
          <a href="#why" className="hover:text-brand-white transition-colors">Why Verdant</a>
          <a href="#contact" className="hover:text-brand-white transition-colors">Contact</a>
        </div>
        <p className="text-xs text-brand-white/30">© 2026 Verdant ESG</p>
      </div>
    </footer>
  );
};

export default Footer;
