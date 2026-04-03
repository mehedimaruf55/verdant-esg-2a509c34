import ServicePageTemplate from "@/components/ServicePageTemplate";

const WELLCertification = () => (
  <ServicePageTemplate
    subtitle="Built Environment"
    title="WELL Certification"
    description="Create healthier, more productive spaces with WELL Building Standard certification."
    intro="The WELL Building Standard focuses on enhancing health and well-being through the built environment. Our WELL-accredited professionals help you navigate the certification process, integrating evidence-based strategies across air, water, nourishment, light, movement, thermal comfort, sound, materials, mind, community, and innovation."
    processSteps={[
      { title: "Feasibility Study", desc: "Assessing your project's potential for WELL certification and identifying key opportunities." },
      { title: "Design Integration", desc: "Embedding WELL features into architectural and MEP design from the outset." },
      { title: "Documentation", desc: "Preparing all required documentation, policies, and performance testing evidence." },
      { title: "Performance Verification", desc: "On-site testing and verification to confirm compliance with WELL requirements." },
    ]}
    features={[
      { title: "WELL Core", desc: "Certification for base building and core systems in commercial developments." },
      { title: "WELL Interiors", desc: "Interior fit-out certification focused on occupant health and well-being." },
      { title: "WELL Health-Safety Rating", desc: "Evidence-based verification of health and safety protocols for facilities." },
      { title: "WELL Performance Rating", desc: "Ongoing monitoring and verification of building performance metrics." },
    ]}
  />
);

export default WELLCertification;
