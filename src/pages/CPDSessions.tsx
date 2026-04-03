import ServicePageTemplate from "@/components/ServicePageTemplate";

const CPDSessions = () => (
  <ServicePageTemplate
    subtitle="Resources"
    title="Sustainable Buildings Knowledge Sharing & CPD Sessions"
    description="Continuing Professional Development sessions on sustainability topics for your team."
    intro="Our RIBA and CIBSE-approved CPD sessions deliver practical, up-to-date knowledge on key sustainability topics. Whether for architects, engineers, developers, or corporate teams, our expert-led presentations cover everything from BREEAM and energy performance to ESG frameworks and carbon management — helping your team stay ahead of evolving regulations and best practice."
    processSteps={[
      { title: "Topic Selection", desc: "Choose from our library of CPD sessions or request a bespoke topic for your team." },
      { title: "Scheduling", desc: "Flexible scheduling — delivered in-person at your offices or virtually." },
      { title: "Delivery", desc: "Expert-led, interactive sessions with real-world case studies and Q&A." },
      { title: "Certification", desc: "Attendees receive CPD certificates for professional development records." },
    ]}
    features={[
      { title: "BREEAM & Green Buildings", desc: "Understanding BREEAM certification and sustainable building design." },
      { title: "Net Zero Carbon", desc: "Practical guidance on carbon footprinting, reduction, and offsetting." },
      { title: "ESG for Business", desc: "Introduction to ESG frameworks, reporting, and strategy development." },
      { title: "Biodiversity Net Gain", desc: "Understanding BNG requirements and delivering ecological enhancements." },
    ]}
    ctaTitle="Book a CPD Session"
    ctaDesc="Contact us to schedule a CPD session for your team — available in-person or virtually."
  />
);

export default CPDSessions;
