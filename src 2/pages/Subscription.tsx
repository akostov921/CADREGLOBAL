import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
interface PlanFeature {
  text: string;
  included: boolean;
}
interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
}
const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  highlighted = false
}: PricingCardProps) => {
  const navigate = useNavigate();
  
  const handleSelectPlan = async () => {
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          type: "plan_selection",
          data: { plan: title }
        }
      });

      if (error) throw error;

      const { toast } = await import("@/components/ui/use-toast");
      toast({
        title: "Plan Selected!",
        description: `${title} plan notification sent. Proceeding to application...`,
      });
      
      navigate('/membership');
    } catch (error) {
      console.error("Plan selection error:", error);
      const { toast } = await import("@/components/ui/use-toast");
      toast({
        title: "Error",
        description: "Failed to select plan. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  return <div className="rounded-2xl border border-foreground/5 bg-foreground/[0.025] p-8 md:p-10 transition-colors hover:bg-foreground/[0.03]">
      <div className="text-xl uppercase tracking-wide text-foreground/80 font-semibold">{title}</div>
      <div className="mt-1 text-lg text-foreground/70">{price} / {period}</div>
      <div className="mt-2 text-sm text-foreground/50">{description}</div>

      <ul className="mt-6 space-y-2 text-[15px] leading-7 text-foreground/70">
        {features.map((feature, index) => (
          feature.included && (
            <li key={index}>— {feature.text}</li>
          )
        ))}
      </ul>

      <Button 
        variant="outline" 
        size="lg" 
        className="mt-8 w-full rounded-xl px-5 py-3 text-sm tracking-wide bg-foreground/10 hover:bg-foreground/15 border-foreground/10"
        onClick={handleSelectPlan}
      >
        Apply for {title === "GUEST" ? "Guest Access" : title === "MEMBER" ? "Membership" : "Principal Access"}
      </Button>
    </div>;
};
const Subscription = () => {
  const navigate = useNavigate();
  const plans: PricingCardProps[] = [{
    title: "GUEST",
    price: "$0",
    period: "year",
    description: "Application required. Limited access.",
    features: [{
      text: "Commissioned billing on all services",
      included: true
    }, {
      text: "Request handling during standard hours",
      included: true
    }, {
      text: "Email-based communication channel",
      included: true
    }, {
      text: "Access to flight, property, and transfer coordination",
      included: true
    }]
  }, {
    title: "MEMBER",
    price: "$2,500",
    period: "year",
    description: "For frequent travelers requiring priority execution.",
    highlighted: true,
    features: [{
      text: "Reduced commissions across services",
      included: true
    }, {
      text: "Direct access to operations team",
      included: true
    }, {
      text: "Priority routing and faster response windows",
      included: true
    }, {
      text: "Dedicated point of contact",
      included: true
    }, {
      text: "Courtesy upgrades when available",
      included: true
    }]
  }, {
    title: "PRINCIPAL",
    price: "$10,000",
    period: "year",
    description: "For principals and executives requiring full operational support.",
    features: [{
      text: "0% commissions on services coordinated through us",
      included: true
    }, {
      text: "24/7 private operational line",
      included: true
    }, {
      text: "Guaranteed availability and expedited execution",
      included: true
    }, {
      text: "End-to-end mobility & lifestyle command",
      included: true
    }, {
      text: "Global coordination with vendor oversight",
      included: true
    }]
  }];
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6 text-foreground">
            MEMBERSHIP
            <br />
            <span className="font-semibold">ACCESS</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Membership is granted following application review.
          </p>
          <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto">
            Each tier defines access level, operational priority, and commission structure.
          </p>
        </div>
      </section>
      
      <section className="pt-12 md:pt-16 pb-8 md:pb-12 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => <PricingCard key={index} {...plan} />)}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-4 text-foreground">
            Membership Placement Consultation
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Unsure which tier fits your needs? Speak with our membership team.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-xl px-5 py-3 text-sm tracking-wide bg-foreground/10 hover:bg-foreground/15 border-foreground/10"
            onClick={() => navigate('/membership')}
          >
            Schedule Consultation
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Subscription;