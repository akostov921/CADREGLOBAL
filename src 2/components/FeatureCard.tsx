import { LucideIcon } from "lucide-react";
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
const FeatureCard = ({
  icon: Icon,
  title,
  description
}: FeatureCardProps) => {
  return <div className="text-center">
      
      <h3 className="text-xl font-semibold uppercase tracking-wider mb-2">
        {title}
      </h3>
      <p className="text-xl text-muted-foreground">
        {description}
      </p>
    </div>;
};
export default FeatureCard;