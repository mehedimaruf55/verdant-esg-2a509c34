import ServicePageTemplate from "@/components/ServicePageTemplate";

const EventCarbonFootprint = () => (
  <ServicePageTemplate
    subtitle="Net Zero Carbon"
    title="Carbon Footprint your Events"
    description="Measure and offset the carbon impact of your events for truly sustainable gatherings."
    intro="Events generate significant carbon emissions from travel, energy, catering, accommodation, and materials. Our event carbon footprint service provides accurate measurement, practical reduction advice, and credible offsetting solutions — helping you deliver events that align with your sustainability commitments and meet growing attendee expectations."
    processSteps={[
      { title: "Pre-Event Planning", desc: "Estimating expected emissions and integrating sustainability into event planning." },
      { title: "Data Collection", desc: "Gathering data on travel, energy, catering, waste, and materials during the event." },
      { title: "Carbon Calculation", desc: "Accurate measurement of total event emissions using recognised methodologies." },
      { title: "Offset & Certify", desc: "Offsetting residual emissions through verified projects and providing certification." },
    ]}
    features={[
      { title: "Event Carbon Measurement", desc: "Comprehensive emission calculations covering all aspects of your event." },
      { title: "Sustainable Event Planning", desc: "Guidance on reducing emissions through venue selection, catering, and logistics." },
      { title: "Carbon Neutral Certification", desc: "Third-party certified carbon neutral events through credible offset projects." },
      { title: "Attendee Engagement", desc: "Tools and communications to engage attendees in your sustainability efforts." },
    ]}
  />
);

export default EventCarbonFootprint;
