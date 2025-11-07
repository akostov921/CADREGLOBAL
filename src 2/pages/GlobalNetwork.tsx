import { Link } from "react-router-dom";
import { Globe, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GlobalNetwork = () => {
  const regions = [
    {
      name: "North America",
      cities: ["New York", "Los Angeles", "Miami", "San Francisco", "Chicago", "Toronto"],
      description: "Full-service operations across major metropolitan areas"
    },
    {
      name: "Europe",
      cities: ["London", "Paris", "Monaco", "Geneva", "Milan", "Zurich"],
      description: "Established partnerships with luxury providers and private aviation"
    },
    {
      name: "Asia Pacific",
      cities: ["Dubai", "Singapore", "Hong Kong", "Tokyo", "Sydney"],
      description: "24/7 ground support and coordination in key business hubs"
    },
    {
      name: "Latin America & Caribbean",
      cities: ["São Paulo", "Mexico City", "Turks & Caicos", "St. Barts", "Costa Rica"],
      description: "Preferred access to exclusive resorts and private islands"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-playfair font-light mb-4 text-foreground tracking-wide">
              Global Network
            </h1>
            <p className="text-lg text-foreground/60 font-light tracking-wide">
              Worldwide reach. Local precision.
            </p>
            <div className="h-px w-32 bg-accent mx-auto mt-6"></div>
          </div>

          {/* Stats Section */}
          <div className="text-center mb-20">
            <p className="text-foreground/60 text-sm tracking-wide">
              Access in 50+ cities. 100+ vetted partners. 24/7 operations. Single point of accountability.
            </p>
          </div>

          {/* Main Content */}
          <div className="mb-20">
            <p className="text-foreground/70 leading-relaxed mb-16 max-w-3xl">
              Cadré Global operates through an exclusive network of vetted service providers, private aviation 
              operators, private accommodations, security firms, and ground coordinators across major cities worldwide. 
              We maintain direct relationships and preferred access to ensure seamless execution regardless of location.
            </p>

            {/* Regions */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {regions.map((region) => (
                <div key={region.name}>
                  <h3 className="text-2xl font-playfair font-light mb-1.5 text-foreground">{region.name}</h3>
                  <p className="text-foreground/60 leading-relaxed text-lg">
                    {region.cities.join(" | ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-light mb-12 text-foreground">Operational Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Private Aviation Network</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Direct relationships with charter operators globally</li>
                  <li>• Access to 1,000+ aircraft types</li>
                  <li>• Ground handling and FBO coordination</li>
                  <li>• Custom flight routing and optimization</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Private Accommodations</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Five-star hotels and resorts worldwide</li>
                  <li>• Private villas and estates</li>
                  <li>• VIP access and room upgrades</li>
                  <li>• Custom in-room arrangements</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Ground Transportation</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Executive car services in all major cities</li>
                  <li>• Security-vetted drivers</li>
                  <li>• Yacht and helicopter charters</li>
                  <li>• Real-time tracking and coordination</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Local Expertise</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• On-ground representatives in key cities</li>
                  <li>• Restaurant reservations and event access</li>
                  <li>• Cultural and language support</li>
                  <li>• Emergency response protocols</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 24/7 Operations */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-light mb-8 text-foreground">24/7 Operations</h2>
            <p className="text-foreground/70 leading-relaxed mb-6 max-w-3xl">
              Our operations team monitors your itinerary in real-time across all time zones. Whether you are 
              landing in Tokyo at 3 AM or need last-minute arrangements in Monaco, we are always available.
            </p>
            <p className="text-foreground/70 leading-relaxed max-w-3xl">
              All members receive direct access to our operations center via secure communication channels.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link to="/subscription">
              <Button variant="hero" size="lg">
                Join Our Network
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GlobalNetwork;
