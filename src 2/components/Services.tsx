import privateAirSea from "@/assets/private-air-sea.jpg";
import luxuryAccommodation from "@/assets/luxury-accommodation.jpg";
import vipExperiences from "@/assets/vip-experiences.jpg";
import executiveTravel from "@/assets/executive-travel.jpg";
import securityProtection from "@/assets/security-protection.jpg";
import eliteStaff from "@/assets/elite-staff.jpg";
import bespokeExperiences from "@/assets/bespoke-experiences.jpg";
import lifestyleManagement from "@/assets/lifestyle-management.jpg";
interface ServiceCategory {
  image: string;
  title: string;
  services: string[];
}
const serviceCategories: ServiceCategory[] = [{
  image: privateAirSea,
  title: "Private Air & Sea Mobility",
  services: ["Private Jets", "Helicopters", "Yacht Charters", "Superyacht Management"]
}, {
  image: luxuryAccommodation,
  title: "Luxury Accommodation",
  services: ["Exclusive Hotels", "Private Villa Rentals", "Resort Bookings", "Elite Residence Stays"]
}, {
  image: vipExperiences,
  title: "VIP Access & Experiences",
  services: ["Premium Event Tickets", "Exclusive Award Show Access", "Celebrity Meet & Greets", "Bespoke Entertainment"]
}, {
  image: executiveTravel,
  title: "Executive Travel & Logistics",
  services: ["Luxury Ground Transport", "High-end Car Rentals", "Premium Airfare", "Travel Itinerary Management"]
}, {
  image: securityProtection,
  title: "Security & Protection",
  services: ["Personal Bodyguards", "Secure Transport", "VIP Protection Services", "Risk Assessment"]
}, {
  image: eliteStaff,
  title: "Elite Staff & Personnel",
  services: ["Private Chefs", "Nannies & Tutors", "Personal Doctors", "Interpreters"]
}, {
  image: bespokeExperiences,
  title: "Bespoke Experiences",
  services: ["Extreme Travel Adventures", "Wildlife Expeditions", "Cultural Experiences", "Celebrity Booking"]
}, {
  image: lifestyleManagement,
  title: "Specialized Lifestyle Management",
  services: ["Legal & Financial Referrals", "Wellness & Medical Tourism", "Fashion Sourcing", "Special Requests"]
}];
const Services = () => {
  return <section id="services" className="py-20 bg-[#0A0A1F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4 text-white">
            EXCLUSIVE SERVICE CATEGORIES
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => <div key={index} className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{
              backgroundImage: `url(${category.image})`
            }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
                
                
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;