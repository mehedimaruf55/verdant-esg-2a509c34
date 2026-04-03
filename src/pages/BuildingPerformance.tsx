import ServicePageTemplate from "@/components/ServicePageTemplate";

const BuildingPerformance = () => (
  <ServicePageTemplate
    subtitle="Built Environment"
    title="Building Performance"
    description="Optimise your building's energy performance with data-driven analysis and expert guidance."
    intro="Understanding how your building performs is critical to reducing operational costs and carbon emissions. Our building performance services encompass energy modelling, thermal analysis, and post-occupancy evaluation to ensure your buildings operate as efficiently as intended, bridging the performance gap between design and reality."
    processSteps={[
      { title: "Energy Modelling", desc: "Dynamic thermal simulation to predict and optimise building energy performance." },
      { title: "Performance Testing", desc: "Air tightness testing, thermographic surveys, and systems commissioning verification." },
      { title: "Post-Occupancy Evaluation", desc: "Assessing actual building performance against design predictions." },
      { title: "Optimisation", desc: "Identifying improvements to reduce energy consumption and operational carbon." },
    ]}
    features={[
      { title: "EPC & DEC Certificates", desc: "Energy Performance Certificates and Display Energy Certificates for compliance." },
      { title: "Part L Compliance", desc: "Building Regulations Part L compliance modelling and reporting." },
      { title: "SAP & SBEM Calculations", desc: "Standardised energy calculations for domestic and non-domestic buildings." },
      { title: "Air Tightness Testing", desc: "Permeability testing to verify building envelope performance." },
    ]}
  />
);

export default BuildingPerformance;
