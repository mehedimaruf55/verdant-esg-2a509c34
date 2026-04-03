import ServicePageTemplate from "@/components/ServicePageTemplate";

const Masterclass = () => (
  <ServicePageTemplate
    subtitle="Resources"
    title="Masterclass"
    description="In-depth masterclass sessions on advanced sustainability topics for professionals."
    intro="Our sustainability masterclasses go beyond introductory CPD to provide deep, expert-level knowledge on critical topics. Designed for professionals who need a thorough understanding of complex sustainability challenges, these sessions combine technical expertise with practical case studies and hands-on workshops."
    processSteps={[
      { title: "Needs Assessment", desc: "Understanding your team's knowledge level and learning objectives." },
      { title: "Content Design", desc: "Tailoring masterclass content to your sector, projects, and specific challenges." },
      { title: "Interactive Delivery", desc: "Half-day or full-day sessions with workshops, case studies, and group exercises." },
      { title: "Follow-Up Support", desc: "Post-session resources, recordings, and ongoing Q&A support." },
    ]}
    features={[
      { title: "Carbon Management Masterclass", desc: "Advanced training on Scope 1, 2, and 3 measurement, reduction, and reporting." },
      { title: "Sustainable Design Masterclass", desc: "Deep dive into passive design, low-carbon materials, and circular economy principles." },
      { title: "ESG Strategy Masterclass", desc: "Building and implementing a credible ESG framework for your organisation." },
      { title: "Climate Risk Masterclass", desc: "Understanding and managing physical and transition climate risks." },
    ]}
    ctaTitle="Enquire About a Masterclass"
    ctaDesc="Get in touch to discuss a tailored masterclass for your team or organisation."
  />
);

export default Masterclass;
