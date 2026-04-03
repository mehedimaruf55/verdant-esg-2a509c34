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
import Team from "./pages/Team.tsx";
import Insights from "./pages/Insights.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import Careers from "./pages/Careers.tsx";
import Resources from "./pages/Resources.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/corporate-sustainability" element={<CorporateSustainability />} />
          <Route path="/services/built-environment" element={<BuiltEnvironment />} />
          <Route path="/services/net-zero-carbon" element={<NetZeroCarbon />} />
          <Route path="/services/assurance-certification" element={<AssuranceCertification />} />
          <Route path="/team" element={<Team />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
