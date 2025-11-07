import { cn } from "@/lib/utils";
interface ServiceCardProps {
  image: string;
  title: string;
  featured?: boolean;
}
const ServiceCard = ({
  image,
  title,
  featured = false
}: ServiceCardProps) => {
  return <div className={cn("group relative overflow-hidden rounded-sm transition-all duration-300", featured ? "md:col-span-2 md:row-span-2" : "")} style={{
    height: featured ? "600px" : "300px"
  }}>
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{
      backgroundImage: `url(${image})`
    }} />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      
      
      {featured && <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />}
    </div>;
};
export default ServiceCard;