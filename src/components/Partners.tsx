interface PartnersProps {
  className?: string;
}
const Partners = ({
  className
}: PartnersProps = {}) => {
  const partners = ["Ocean Getaways", "Virtuoso", "Villas of Distinction", "Jet Luxe", "GlobeAir", "Blade", "Burgess Yachts", "Moorings & Sunsail", "Blacklane", "EmpireCLS", "Limos4", "SevenRooms", "Farfetch Private Client", "SHA Wellness Clinic", "British American Household Staffing"];
  return <section className="py-24 bg-secondary overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-accent text-2xl tracking-[0.3em] uppercase mb-6 font-playfair">Trusted Partners</p>
        <p className="text-foreground/60 max-w-3xl mx-auto mb-16 text-base leading-relaxed">
          We maintain direct relationships with the world's leading luxury service providers, 
          private aviation operators, and lifestyle brands to ensure seamless execution and preferred access.
        </p>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-16">
          {partners.map((partner, index) => <div key={index} className="flex items-center justify-center text-center">
              <span className="text-xl md:text-2xl tracking-wider text-foreground/70 hover:text-accent transition-colors duration-300 font-light">
                {partner}
              </span>
            </div>)}
        </div>
        
        <div className="text-center mt-20">
          <p className="text-foreground/50 text-sm tracking-wide">
            Access to 100+ vetted partners worldwide. Preferred rates and priority service guaranteed.
          </p>
        </div>
      </div>
    </section>;
};
export default Partners;