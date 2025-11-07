import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpossiblePossible from "@/components/ImpossiblePossible";
import Services from "@/components/Services";
import AdditionalServices from "@/components/AdditionalServices";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import ChatAssistance from "@/components/ChatAssistance";
import GlobalNetwork from "@/components/GlobalNetwork";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <AdditionalServices className="py-px" />
      <Features />
      <Partners />
      <CTA />
      <Footer />
    </div>;
};
export default Index;