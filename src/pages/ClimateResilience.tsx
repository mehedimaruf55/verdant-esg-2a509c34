import ServicePageTemplate from "@/components/ServicePageTemplate";

const ClimateResilience = () => (
  <ServicePageTemplate
    subtitle="Corporate Sustainability"
    title="Climate Resilience"
    description="Prepare your organisation for the physical and transition risks of climate change."
    intro="Climate change presents both physical and transition risks to businesses across all sectors. Our climate resilience services help you understand your exposure, develop adaptation strategies, and build organisational resilience. From climate risk assessments to scenario analysis, we provide the insights needed to future-proof your business."
    processSteps={[
      { title: "Risk Identification", desc: "Screening physical and transition climate risks across your operations and value chain." },
      { title: "Scenario Analysis", desc: "Modelling climate impacts under different warming scenarios (1.5°C, 2°C, 4°C)." },
      { title: "Adaptation Planning", desc: "Developing practical adaptation measures to mitigate identified risks." },
      { title: "Monitoring & Review", desc: "Establishing ongoing monitoring frameworks and regular strategy reviews." },
    ]}
    features={[
      { title: "Climate Risk Assessment", desc: "Comprehensive assessment of physical and transition risks to your business." },
      { title: "Climate Scenario Analysis", desc: "Quantitative modelling under multiple climate scenarios for strategic planning." },
      { title: "Adaptation Strategies", desc: "Practical and implementable adaptation plans for buildings, supply chains, and operations." },
      { title: "Climate-Related Disclosures", desc: "Supporting TCFD/ISSB-aligned climate risk disclosure and reporting." },
    ]}
  />
);

export default ClimateResilience;
