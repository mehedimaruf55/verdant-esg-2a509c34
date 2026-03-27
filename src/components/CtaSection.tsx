const CtaSection = () => {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-verdant-cta-bg">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Ready to build a sustainable future?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-md mx-auto">
          Let's start a conversation about your ESG goals and how we can help you achieve them.
        </p>
        <a
          href="mailto:hello@verdantesg.com"
          className="mt-10 inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide rounded-sm hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
