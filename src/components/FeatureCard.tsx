import React from "react";

interface FeatureCardProps {
  icon?: React.ComponentType<React.ComponentProps<"svg">>; // expect a lucide icon component
  title: string;
  description?: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className = "" }: FeatureCardProps) => {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      {/* render icon component if provided */}
      {Icon ? (
        <div className="flex-shrink-0">
          <Icon className="w-7 h-7 text-accent opacity-90" aria-hidden="true" />
        </div>
      ) : null}

      <div>
        <h4 className="text-sm font-medium tracking-wide">{title}</h4>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
};
export default FeatureCard;