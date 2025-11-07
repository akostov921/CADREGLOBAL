import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-playfair font-light mb-4 text-foreground tracking-wide">
              About Cadré Global
            </h1>
            <p className="text-lg text-foreground/60 font-light tracking-wide">
              Precision. Discretion. Accountability.
            </p>
            <div className="h-px w-32 bg-accent mx-auto mt-6"></div>
          </div>

          {/* Stats Section */}
          <div className="text-center mb-20">
            <p className="text-foreground/60 text-sm tracking-wide">
              Selective membership. 24/7 operations. Single point of accountability.
            </p>
          </div>

          {/* Main Content */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-light mb-8 text-foreground">Our Mission</h2>
            <p className="text-foreground/70 leading-relaxed mb-6 max-w-3xl">
              Cadré Global exists to remove friction for principals and executives.
              We operate as an extension of your team—coordinating private aviation, accommodation, 
              executive travel, and lifestyle operations with military-grade precision and absolute discretion.
            </p>
            <p className="text-foreground/70 leading-relaxed max-w-3xl">
              We are not a concierge service. We are a private client operations team managing 
              complex, multi-layered logistics across mobility and lifestyle.
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-light mb-12 text-foreground">Our Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-3">
                <h3 className="text-xl font-playfair text-foreground tracking-wider">Precision</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every variable anticipated. Timing and logistics executed to plan. No detail overlooked.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-playfair text-foreground tracking-wider">Discretion</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Secure channels. Need-to-know access. No noise. Absolute confidentiality maintained.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-playfair text-foreground tracking-wider">Accountability</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Single point of ownership. If something slips, we fix it—immediately. No excuses.
                </p>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-light mb-8 text-foreground">What We Do</h2>
            <p className="text-foreground/70 leading-relaxed mb-12 max-w-3xl">
              We coordinate complex, multi-layered logistics across mobility and lifestyle. 
              Our team handles everything from private aviation and executive travel to lifestyle operations and impossible requests.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Private Aviation</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Charter coordination and routing optimization</li>
                  <li>• Ground handling and FBO management</li>
                  <li>• Multi-leg itinerary coordination</li>
                  <li>• Real-time flight monitoring and support</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Executive Travel</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Multi-city itineraries and seamless transitions</li>
                  <li>• Security logistics and threat assessment</li>
                  <li>• Commercial flight coordination when needed</li>
                  <li>• Ground transportation and local support</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Private Accommodation</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Hotels, villas, and estates—secured access</li>
                  <li>• Custom in-room arrangements and preparations</li>
                  <li>• VIP upgrades and preferred rates</li>
                  <li>• Property inspections and quality control</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Lifestyle Operations</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Personal staffing and household coordination</li>
                  <li>• Event sourcing and access management</li>
                  <li>• "Impossible" requests—handled discreetly</li>
                  <li>• Administrative support and task delegation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Who We Serve Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-light mb-8 text-foreground">Who We Serve</h2>
            <p className="text-foreground/70 leading-relaxed mb-6 max-w-3xl">
              Our membership is selective. We work with principals, executives, entrepreneurs, family offices, 
              and private individuals who value time, privacy, and flawless execution.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-6 max-w-3xl">
              Applications are reviewed case by case. We prioritize clients who require operational 
              excellence and understand the value of a dedicated team managing complexity on their behalf.
            </p>
            <p className="text-foreground/70 leading-relaxed max-w-3xl">
              If you are managing multiple properties, frequent international travel, complex schedules, 
              or simply need a trusted operations partner—we are built for you.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-light mb-8 text-foreground">Why Cadré Global</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Single Point of Contact</h4>
                <p className="text-sm text-foreground/70">
                  No more managing multiple vendors. One team. One interface. Complete accountability.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">24/7 Availability</h4>
                <p className="text-sm text-foreground/70">
                  Our operations center monitors your itinerary across all time zones. We're always available.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Global Network</h4>
                <p className="text-sm text-foreground/70">
                  Access in 50+ cities. 100+ vetted partners. Preferred rates and priority service guaranteed.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Military-Grade Security</h4>
                <p className="text-sm text-foreground/70">
                  All communications encrypted. Need-to-know protocols. Security-cleared team members.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link to="/subscription">
              <Button variant="hero" size="lg">
                Apply for Membership
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
