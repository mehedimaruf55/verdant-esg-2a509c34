import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import PressMedia from "./pages/PressMedia.tsx";
import Partners from "./pages/Partners.tsx";
import Services from "./pages/Services.tsx";
import CorporateSustainability from "./pages/CorporateSustainability.tsx";
import BuiltEnvironment from "./pages/BuiltEnvironment.tsx";
import NetZeroCarbon from "./pages/NetZeroCarbon.tsx";
import AssuranceCertification from "./pages/AssuranceCertification.tsx";
import SustainabilityForPlanning from "./pages/SustainabilityForPlanning.tsx";
import EnvironmentalAssessment from "./pages/EnvironmentalAssessment.tsx";
import BREEAMCertification from "./pages/BREEAMCertification.tsx";
import WELLCertification from "./pages/WELLCertification.tsx";
import BuildingPerformance from "./pages/BuildingPerformance.tsx";
import Biodiversity from "./pages/Biodiversity.tsx";
import LifeCycleAssessment from "./pages/LifeCycleAssessment.tsx";
import ESGConsulting from "./pages/ESGConsulting.tsx";
import RealEstateESG from "./pages/RealEstateESG.tsx";
import ClimateResilience from "./pages/ClimateResilience.tsx";
import TCFDTNFDAdvisory from "./pages/TCFDTNFDAdvisory.tsx";
import PPN002 from "./pages/PPN002.tsx";
import PPN006 from "./pages/PPN006.tsx";
import PPN016 from "./pages/PPN016.tsx";
import BusinessCarbonFootprint from "./pages/BusinessCarbonFootprint.tsx";
import BuildingCarbonFootprint from "./pages/BuildingCarbonFootprint.tsx";
import ProductCarbonFootprint from "./pages/ProductCarbonFootprint.tsx";
import EventCarbonFootprint from "./pages/EventCarbonFootprint.tsx";
import CarbonCreditsOffsetting from "./pages/CarbonCreditsOffsetting.tsx";
import Biochar from "./pages/Biochar.tsx";
import Team from "./pages/Team.tsx";
import Insights from "./pages/Insights.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import Careers from "./pages/Careers.tsx";
import Resources from "./pages/Resources.tsx";
import CPDSessions from "./pages/CPDSessions.tsx";
import Masterclass from "./pages/Masterclass.tsx";
import PlanningTool from "./pages/PlanningTool.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/about/press-and-media" element={<PressMedia />} />
          <Route path="/about/our-partners" element={<Partners />} />
          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/corporate-sustainability" element={<CorporateSustainability />} />
          <Route path="/services/built-environment" element={<BuiltEnvironment />} />
          <Route path="/services/net-zero-carbon" element={<NetZeroCarbon />} />
          <Route path="/services/assurance-certification" element={<AssuranceCertification />} />
          <Route path="/services/sustainability-for-planning" element={<SustainabilityForPlanning />} />
          <Route path="/services/environmental-assessment" element={<EnvironmentalAssessment />} />
          <Route path="/services/breeam-certification" element={<BREEAMCertification />} />
          <Route path="/services/well-certification" element={<WELLCertification />} />
          <Route path="/services/building-performance" element={<BuildingPerformance />} />
          <Route path="/services/biodiversity" element={<Biodiversity />} />
          <Route path="/services/life-cycle-assessment" element={<LifeCycleAssessment />} />
          <Route path="/services/esg-consulting" element={<ESGConsulting />} />
          <Route path="/services/real-estate-esg" element={<RealEstateESG />} />
          <Route path="/services/climate-resilience" element={<ClimateResilience />} />
          <Route path="/services/tcfd-tnfd-advisory" element={<TCFDTNFDAdvisory />} />
          <Route path="/services/ppn-002" element={<PPN002 />} />
          <Route path="/services/ppn-006" element={<PPN006 />} />
          <Route path="/services/ppn-016" element={<PPN016 />} />
          <Route path="/services/business-carbon-footprint" element={<BusinessCarbonFootprint />} />
          <Route path="/services/building-carbon-footprint" element={<BuildingCarbonFootprint />} />
          <Route path="/services/product-carbon-footprint" element={<ProductCarbonFootprint />} />
          <Route path="/services/event-carbon-footprint" element={<EventCarbonFootprint />} />
          <Route path="/services/carbon-credits-offsetting" element={<CarbonCreditsOffsetting />} />
          <Route path="/services/biochar" element={<Biochar />} />
          {/* Team */}
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          {/* Content */}
          <Route path="/insights" element={<Insights />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Resources */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/cpd-sessions" element={<CPDSessions />} />
          <Route path="/resources/masterclass" element={<Masterclass />} />
          <Route path="/resources/planning-tool" element={<PlanningTool />} />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
