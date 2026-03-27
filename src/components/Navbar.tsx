import logo from "@/assets/verdant-esg-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-6 lg:px-12">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Verdant ESG" className="h-8" />
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
          <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
          <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">Services</a>
          <a href="#why" className="text-foreground/70 hover:text-foreground transition-colors">Why Verdant</a>
          <a href="#contact" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-primary/90 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
