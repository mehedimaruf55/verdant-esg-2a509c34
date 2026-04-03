import ServicePageTemplate from "@/components/ServicePageTemplate";

const BuildingCarbonFootprint = () => (
  <ServicePageTemplate
    subtitle="Net Zero Carbon"
    title="Building Carbon Footprint"
    description="Assess and reduce the carbon footprint of your buildings across their entire lifecycle."
    intro="Buildings account for a significant proportion of global carbon emissions. Our building carbon footprint service measures both operational and embodied carbon, providing a complete picture of your building's environmental impact. We help you identify reduction opportunities and develop strategies to achieve net zero carbon buildings."
    processSteps={[
      { title: "Operational Carbon", desc: "Measuring energy-related emissions from building operations and occupancy." },
      { title: "Embodied Carbon", desc: "Assessing carbon emissions from materials, construction, and end-of-life." },
      { title: "Reduction Strategy", desc: "Identifying design and operational changes to minimise whole-life carbon." },
      { title: "Verification", desc: "Third-party verification of your building's carbon performance claims." },
    ]}
    features={[
      { title: "Whole Life Carbon Assessment", desc: "Comprehensive assessment covering all lifecycle stages per RICS methodology." },
      { title: "Operational Energy Modelling", desc: "Predicting and optimising in-use energy consumption and associated emissions." },
      { title: "Material Specification", desc: "Low-carbon material selection guidance to reduce embodied carbon." },
      { title: "Net Zero Carbon Buildings", desc: "Strategies for achieving UKGBC Net Zero Carbon Buildings Framework compliance." },
    ]}
  />
);

export default BuildingCarbonFootprint;
