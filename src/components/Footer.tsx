import logo from "@/assets/verdant-esg-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Verdant ESG" className="h-6" />
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#why" className="hover:text-foreground transition-colors">Why Verdant</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Verdant ESG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
