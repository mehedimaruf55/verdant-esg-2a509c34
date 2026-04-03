import ServicePageTemplate from "@/components/ServicePageTemplate";

const CarbonCreditsOffsetting = () => (
  <ServicePageTemplate
    subtitle="Services"
    title="Carbon Credits & Offsetting"
    description="Access high-quality carbon credits and offsetting solutions to mitigate your residual emissions."
    intro="Once you've reduced your emissions as far as practically possible, credible carbon offsetting plays a vital role in your Net Zero journey. We help you navigate the complex carbon credit market, sourcing verified, high-quality credits from nature-based and engineered removal projects that deliver real, measurable climate impact."
    processSteps={[
      { title: "Emission Analysis", desc: "Understanding your residual emissions that require offsetting after reduction efforts." },
      { title: "Credit Selection", desc: "Curating a portfolio of high-quality credits aligned with your values and sector." },
      { title: "Procurement", desc: "Securing credits from verified projects with robust monitoring and verification." },
      { title: "Certification", desc: "Third-party certification of your carbon neutral or net zero claims." },
    ]}
    features={[
      { title: "Nature-Based Solutions", desc: "Credits from reforestation, afforestation, and habitat restoration projects." },
      { title: "Engineered Removal", desc: "Biochar, direct air capture, and other technology-based carbon removal credits." },
      { title: "Avoidance Credits", desc: "Renewable energy, clean cookstove, and other emission avoidance projects." },
      { title: "Portfolio Strategy", desc: "Building a diversified offset portfolio aligned with best practice and science." },
    ]}
  />
);

export default CarbonCreditsOffsetting;
