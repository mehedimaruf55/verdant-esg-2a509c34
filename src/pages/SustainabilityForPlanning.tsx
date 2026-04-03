import ServicePageTemplate from "@/components/ServicePageTemplate";

const SustainabilityForPlanning = () => (
  <ServicePageTemplate
    subtitle="Built Environment"
    title="Sustainability for Planning"
    description="Expert sustainability guidance to navigate the planning process with confidence."
    intro="Our sustainability for planning service helps developers and architects integrate environmental considerations from the earliest stages of design. We ensure your projects meet local authority requirements and achieve planning consent by providing comprehensive sustainability statements, energy strategies, and environmental impact assessments."
    processSteps={[
      { title: "Pre-Application Review", desc: "We assess your site and project to identify sustainability requirements and opportunities early." },
      { title: "Strategy Development", desc: "Creating comprehensive sustainability and energy strategies aligned with planning policy." },
      { title: "Documentation", desc: "Preparing all required sustainability documentation for planning submission." },
      { title: "Liaison & Support", desc: "Working with planning officers and consultants to address queries and conditions." },
    ]}
    features={[
      { title: "Sustainability Statements", desc: "Comprehensive statements demonstrating compliance with local and national planning policy." },
      { title: "Energy Strategies", desc: "Detailed energy strategies showing how developments will minimise carbon emissions." },
      { title: "Overheating Assessments", desc: "CIBSE TM59/TM52 compliant overheating risk assessments for residential and commercial projects." },
      { title: "Whole Life Carbon Assessments", desc: "Evaluating embodied and operational carbon across the full lifecycle of developments." },
    ]}
  />
);

export default SustainabilityForPlanning;
