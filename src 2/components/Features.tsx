import FeatureCard from "./FeatureCard";
import { Network, Zap, Shield, Clock, Globe, Award, Crown, Users } from "lucide-react";

interface FeaturesProps {
  className?: string;
}

const Features = ({ className }: FeaturesProps = {}) => {
  return <section className="py-12 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <FeatureCard icon={Network} title="GLOBAL REACH" description="Worldwide connections at your service" />
          <FeatureCard icon={Zap} title="SEAMLESS EXECUTION" description="Effortless logistics coordination" />
          <FeatureCard icon={Shield} title="ABSOLUTE DISCRETION" description="Complete confidentiality assured" />
          <FeatureCard icon={Clock} title="IMMEDIATE RESPONSE" description="Available at a moment's notice" />
          <FeatureCard icon={Globe} title="UNRESTRICTED ACCESS" description="Premium services in every city" />
          <FeatureCard icon={Award} title="OPERATIONS EXCELLENCE" description="Uncompromising quality guaranteed" />
          <FeatureCard icon={Crown} title="PRIORITY HANDLING" description="Personalized attention to every detail" />
          <FeatureCard icon={Users} title="PRIVATE NETWORK" description="Network of distinguished members" />
        </div>
      </div>
    </section>;
};
export default Features;