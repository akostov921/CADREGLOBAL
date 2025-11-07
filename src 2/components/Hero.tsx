import heroJet from "@/assets/hero-jet.jpg";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <section className="relative">
      {/* Background image + dark overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroJet}
          alt=""
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <p className="mb-4 tracking-widest text-sm">BEYOND CONCIERGE</p>

        <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-tight mb-8 leading-tight font-playfair">
          STRATEGIC MOBILITY ABSOLUTE DISCRETION
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Global mobility and lifestyle operations for private clients and
          executives. Your single point of accountability for seamless
          coordination, anywhere in the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            variant="hero"
            size="lg"
            onClick={() => (window.location.href = "/subscription")}
          >
            Get Started
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex -space-x-2"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;