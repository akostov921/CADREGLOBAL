import FeatureCard from "./FeatureCard";
import { Globe, Zap, Shield, Clock, MapPin, Award, Star, Users } from "lucide-react";

interface FeaturesProps {
  className?: string;
}

const features = [
  { icon: Globe, title: "GLOBAL REACH", description: "Worldwide connections at your service" },
  { icon: Zap, title: "SEAMLESS EXECUTION", description: "Effortless logistics coordination" },
  { icon: Shield, title: "ABSOLUTE DISCRETION", description: "Complete confidentiality assured" },
  { icon: Clock, title: "IMMEDIATE RESPONSE", description: "Available at a moment's notice" },
  { icon: MapPin, title: "UNRESTRICTED ACCESS", description: "Premium services in every city" },
  { icon: Award, title: "OPERATIONS EXCELLENCE", description: "Uncompromising quality guaranteed" },
  { icon: Star, title: "PRIORITY HANDLING", description: "Personalized attention to every detail" },
  { icon: Users, title: "PRIVATE NETWORK", description: "Network of distinguished members" },
];

const Features = ({ className }: FeaturesProps = {}) => {
  const sectionClass = `${className ?? ""} py-12 bg-secondary`.trim();

  return (
    <section className={sectionClass}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;