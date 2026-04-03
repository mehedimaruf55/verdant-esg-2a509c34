import ServicePageTemplate from "@/components/ServicePageTemplate";

const LifeCycleAssessment = () => (
  <ServicePageTemplate
    subtitle="Built Environment"
    title="Life Cycle Assessment"
    description="Understand the full environmental impact of your buildings and products across their entire lifecycle."
    intro="Life Cycle Assessment (LCA) evaluates environmental impacts from cradle to grave — covering raw material extraction, manufacturing, construction, operation, and end-of-life. Our LCA services help you make informed decisions about materials, design options, and operational strategies to minimise your overall environmental footprint."
    processSteps={[
      { title: "Goal & Scope Definition", desc: "Defining the purpose, boundaries, and functional unit of the assessment." },
      { title: "Inventory Analysis", desc: "Collecting data on all material and energy inputs and outputs across the lifecycle." },
      { title: "Impact Assessment", desc: "Evaluating environmental impacts including carbon, resource depletion, and toxicity." },
      { title: "Interpretation", desc: "Analysing results and providing actionable recommendations for improvement." },
    ]}
    features={[
      { title: "Whole Life Carbon Assessment", desc: "Comprehensive carbon assessment across all lifecycle stages per RICS methodology." },
      { title: "Comparative LCA", desc: "Comparing design options and material choices to identify lowest-impact solutions." },
      { title: "Environmental Product Declarations", desc: "Supporting EPD development for construction products and materials." },
      { title: "Circular Economy Assessment", desc: "Evaluating opportunities for material reuse, recycling, and waste reduction." },
    ]}
  />
);

export default LifeCycleAssessment;
