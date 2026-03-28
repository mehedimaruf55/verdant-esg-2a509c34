import logo from "@/assets/verdant-esg-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-green-dark py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <img src={logo} alt="Verdant ESG" className="h-8 brightness-0 invert" />
            <p className="mt-3 text-[13px] text-brand-white/50">
              © 2026 Verdant ESG. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-[14px] text-brand-white/70 hover:text-brand-white transition-colors">About</a>
            <a href="#services" className="text-[14px] text-brand-white/70 hover:text-brand-white transition-colors">Services</a>
            <a href="#why" className="text-[14px] text-brand-white/70 hover:text-brand-white transition-colors">Why Verdant</a>
            <a href="#contact" className="text-[14px] text-brand-white/70 hover:text-brand-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
