import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import GreenClaimsRiskAudit from "./pages/services/GreenClaimsRiskAudit.tsx";
import OngoingComplianceSupport from "./pages/services/OngoingComplianceSupport.tsx";
import SupplyChainTransparencyReview from "./pages/services/SupplyChainTransparencyReview.tsx";
import RegulatoryResponseReadiness from "./pages/services/RegulatoryResponseReadiness.tsx";
import AIAssistedGreenClaimsScreening from "./pages/services/AIAssistedGreenClaimsScreening.tsx";
import Resources from "./pages/Resources.tsx";
import EightGreenwashingRisks from "./pages/resources/EightGreenwashingRisks.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/green-claims-risk-audit" element={<GreenClaimsRiskAudit />} />
            <Route path="/services/ongoing-compliance-support" element={<OngoingComplianceSupport />} />
            <Route path="/services/supply-chain-transparency-review" element={<SupplyChainTransparencyReview />} />
            <Route path="/services/regulatory-response-readiness" element={<RegulatoryResponseReadiness />} />
            <Route path="/services/ai-assisted-green-claims-screening" element={<AIAssistedGreenClaimsScreening />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/8-greenwashing-risks" element={<EightGreenwashingRisks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
