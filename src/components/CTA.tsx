import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const CTA = () => {
  const navigate = useNavigate();
  const handleRequestAccess = async () => {
    try {
      const {
        supabase
      } = await import("@/integrations/supabase/client");
      const {
        error
      } = await supabase.functions.invoke("send-contact-email", {
        body: {
          type: "request_access",
          data: {}
        }
      });
      if (error) throw error;
      const {
        toast
      } = await import("@/components/ui/use-toast");
      toast({
        title: "Request Sent!",
        description: "We'll be in touch shortly."
      });
      navigate('/subscription');
    } catch (error) {
      console.error("Request access error:", error);
      const {
        toast
      } = await import("@/components/ui/use-toast");
      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
        variant: "destructive"
      });
    }
  };
  return <section id="contact" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-6 text-center">
        
        
        <Button variant="hero" size="lg" onClick={handleRequestAccess}>
          Request Access
        </Button>
      </div>
    </section>;
};
export default CTA;