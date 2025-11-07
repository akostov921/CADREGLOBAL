import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ChatAssistance = () => {
  const navigate = useNavigate();
  return <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-accent" />
              <Clock className="w-6 h-6 text-accent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Chat Assistance at Your
              <br />
              <span className="font-semibold">Fingertips</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Just like messaging a friend, ask anything and arrange details through chat effortlessly.
            </p>
            
            <Button variant="hero" size="lg" className="group" onClick={() => navigate('/membership')}>
              Become a Member
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            
          </div>
        </div>
      </div>
    </section>;
};
export default ChatAssistance;