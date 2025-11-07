import flightBooking from "@/assets/flight-booking.jpg";
import hotelReservations from "@/assets/hotel-reservations.jpg";
import transferArrangements from "@/assets/transfer-arrangements.jpg";
import vipExperiences from "@/assets/vip-experiences.jpg";
import lifestyleManagement from "@/assets/lifestyle-management.jpg";
import { Button } from "@/components/ui/button";
interface ServiceItemProps {
  image: string;
  title: string;
  description: string;
}
const ServiceItem = ({
  image,
  title,
  description
}: ServiceItemProps) => {
  return <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="aspect-[2/3] relative">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 grayscale" style={{
        backgroundImage: `url(${image})`
      }} />
        <div className="absolute inset-0 bg-primary/30 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-xl font-light tracking-wide mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>;
};
interface AdditionalServicesProps {
  className?: string;
}
const AdditionalServices = ({
  className
}: AdditionalServicesProps = {}) => {
  return <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-playfair">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6 font-playfair">PRIVATE CLIENT OPERATIONS</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every movement coordinated. Every detail handled. Zero friction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceItem 
            image={flightBooking} 
            title="Air & Ground Mobility" 
            description="Private air, commercial, or ground — arranged, optimized, and executed."
          />
          
          <ServiceItem 
            image={hotelReservations} 
            title="Property & Accommodation Coordination" 
            description="Residences, villas, or hotels secured and prepared before arrival."
          />
          
          <ServiceItem 
            image={transferArrangements} 
            title="Secure Transfers & Logistics" 
            description="Route planning, security coordination, and door-to-door execution."
          />
          
          <ServiceItem 
            image={vipExperiences} 
            title="Access & Arrangements" 
            description="Closed-door access, confidential reservations, unobtainable requests."
          />
        </div>

        <div className="text-center">
          
        </div>
      </div>
    </section>;
};
export default AdditionalServices;