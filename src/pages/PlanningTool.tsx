import ServicePageMagazine from "@/components/ServicePageMagazine";

const PlanningTool = () => (
  <ServicePageMagazine
    subtitle="Resources"
    title="London Planning Permission Tool"
    description="Navigate planning sustainability requirements with our interactive guidance tool."
    intro="Our planning permission tool helps developers, architects, and planning consultants quickly understand the sustainability requirements for their projects. By entering key project details, you can identify which assessments, reports, and certifications may be required by your local planning authority — saving time and ensuring nothing is missed."
    processSteps={[
      { title: "Project Details", desc: "Enter your project type, location, and key parameters to get started." },
      { title: "Requirements Check", desc: "Our tool identifies applicable sustainability planning requirements." },
      { title: "Guidance Report", desc: "Receive a summary of required assessments, reports, and certifications." },
      { title: "Expert Support", desc: "Connect with our team for detailed advice on meeting requirements." },
    ]}
    features={[
      { title: "Energy Strategy Requirements", desc: "Identify whether an energy strategy or carbon reduction plan is required." },
      { title: "BREEAM Requirements", desc: "Check whether BREEAM certification is required or encouraged by the local authority." },
      { title: "Biodiversity Net Gain", desc: "Understand BNG requirements and metric calculation needs for your project." },
      { title: "Overheating Assessment", desc: "Determine whether a CIBSE TM59/TM52 overheating assessment is required." },
    ]}
  />
);

export default PlanningTool;
