import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-6 text-center">
        <form
          name="request-access"
          method="POST"
          data-netlify="true"
          action="/subscription"   // after submit, go to /subscription
        >
          <input type="hidden" name="form-name" value="request-access" />
          <Button variant="hero" size="lg" type="submit">
            Request Access
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
