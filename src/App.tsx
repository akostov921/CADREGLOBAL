import MembershipSuccess from "@/pages/MembershipSuccess";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Subscription from "./pages/Subscription";
import MembershipApplication from "./pages/MembershipApplication";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import GlobalNetwork from "./pages/GlobalNetwork";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
        <Routes>
  <Route path="/membership/success" element={<MembershipSuccess />} />

<Route path="/membership/success" element={<MembershipSuccess />} />

          <Route path="/" element={<Index />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/membership" element={<MembershipApplication />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/network" element={<GlobalNetwork />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;

import MembershipSuccess from "@/pages/MembershipSuccess";
