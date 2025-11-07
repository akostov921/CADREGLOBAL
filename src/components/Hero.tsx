import heroJet from "@/assets/hero-jet.jpg";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background - fallback to image if video not available */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale" poster={heroJet}>
        <source src="/hero-jet-video.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback image */}
      <div className="absolute inset-0 bg-cover bg-center grayscale" style={{
      backgroundImage: `url(${heroJet})`
    }} />
      
      {/* Color tint overlay to match site colors */}
      <div className="absolute inset-0 bg-primary/30 mix-blend-color" />
      
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <p className="text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-playfair">Beyond Concierge</p>
          </div>
          
          <h1 className="text-xl md:text-2xl lg:text-4xl tracking-tight mb-33 leading-tight font-playfair whitespace-nowrap">
            STRATEGIC MOBILITY ABSOLUTE DISCRETION
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mt-8 mb-10 leading-relaxed">
            Global mobility and lifestyle operations for private clients and executives. Your single point of accountability for seamless coordination, anywhere in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" onClick={() => window.location.href = '/subscription'}>
              Get Started
            </Button>
            
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              
              
              
            </div>
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;