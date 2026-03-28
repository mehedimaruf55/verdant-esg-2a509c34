import logo from "@/assets/verdant-esg-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-green-dark border-t border-brand-green-light/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top row */}
        <div className="py-14 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <img src={logo} alt="Verdant ESG" className="h-8 brightness-0 invert" />
            <p className="mt-4 text-[14px] text-brand-white/50 leading-relaxed max-w-xs">
              A sustainability consultancy grounded in reality — delivering measurable ESG impact.
            </p>
          </div>
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-brand-white/40 mb-5">Navigation</h4>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-[14px] text-brand-white/70 hover:text-brand-white transition-colors">About</a>
              <a href="#services" className="text-[14px] text-brand-white/70 hover:text-brand-white transition-colors">Services</a>
              <a href="#why" className="text-[14px] text-brand-white/70 hover:text-brand-white transition-colors">Why Verdant</a>
              <a href="#contact" className="text-[14px] text-brand-white/70 hover:text-brand-white transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-brand-white/40 mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-[14px] text-brand-white/70">
              <a href="mailto:hello@verdantesg.com" className="hover:text-brand-white transition-colors">hello@verdantesg.com</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-brand-white/40">
            © 2026 Verdant ESG. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[12px] text-brand-white/40 hover:text-brand-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[12px] text-brand-white/40 hover:text-brand-white/70 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
