import ServicePageSplit from "@/components/ServicePageSplit";

const BusinessCarbonFootprint = () => (
  <ServicePageSplit
    subtitle="Net Zero Carbon"
    title="Carbon Footprint your Business"
    description="Measure, understand, and reduce your organisation's carbon footprint with expert guidance."
    intro="Understanding your business carbon footprint is the essential first step on the journey to Net Zero. Our team measures your emissions across Scope 1, 2, and 3, providing a clear picture of where your carbon hotspots lie. We then develop a tailored reduction roadmap with science-based targets, practical decarbonisation strategies, and credible offsetting solutions."
    processTitle="Our Carbon Footprint Process"
    processSteps={[
      { title: "Measure", desc: "Comprehensive carbon footprint measurement across all relevant emission scopes." },
      { title: "Reduce", desc: "Developing a prioritised roadmap of decarbonisation solutions and targets." },
      { title: "Offset", desc: "Advising on credible, high-quality carbon offset projects for residual emissions." },
      { title: "Certify", desc: "Third-party verification and certification of your carbon footprint and reductions." },
    ]}
    features={[
      { title: "Scope 1, 2 & 3 Measurement", desc: "Complete greenhouse gas inventory aligned with the GHG Protocol." },
      { title: "Science-Based Targets", desc: "Setting reduction targets aligned with 1.5°C science-based pathways." },
      { title: "Decarbonisation Roadmap", desc: "Practical, prioritised actions to reduce emissions across your operations." },
      { title: "Carbon Reporting", desc: "SECR, ESOS, and other regulatory reporting compliance support." },
    ]}
  />
);

export default BusinessCarbonFootprint;
