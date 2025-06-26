import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Index from "./pages/Index";
import Services from "./pages/Services";
import IndustriesSection from "./pages/Industries";
import SEOService from "./pages/SEOService";
import PPCService from "./pages/PPCService";
import SocialMediaService from "./pages/SocialMediaService";
import OnlineMarketingService from "./pages/OnlineMarketingService";
import FreeAudit from "./pages/FreeAudit";
import NotFound from "./pages/NotFound";
import CyberSecurityService from "./pages/CyberSecurityService";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading ? (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<IndustriesSection />} />
              <Route path="/services/seo" element={<SEOService />} />
              <Route path="/services/ppc" element={<PPCService />} />
              <Route path="/services/social-media" element={<SocialMediaService />} />
              <Route path="/services/online-marketing" element={<OnlineMarketingService />} />
              <Route path="/services/cyber-security" element={<CyberSecurityService />} />
              <Route path="/free-audit" element={<FreeAudit />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
