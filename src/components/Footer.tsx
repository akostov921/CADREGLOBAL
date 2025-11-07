import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  const [email, setEmail] = useState("");
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { type: "newsletter", data: { email } }
      });
      if (error) throw error;
      const { toast } = await import("@/components/ui/use-toast");
      toast({ title: "Subscribed!", description: "Thank you for subscribing to our newsletter." });
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      const { toast } = await import("@/components/ui/use-toast");
      toast({ title: "Error", description: "Failed to subscribe. Please try again.", variant: "destructive" });
    }
  };
  return <footer className="site-footer bg-secondary text-accent-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="footer-brand font-playfair font-semibold">
              <a href="/" aria-label="Cadré Global home" className="hover:underline">Cadré Global</a>
            </div>
            <div className="footer-tagline mt-2">
              Private client mobility and lifestyle operations. Precision. Discretion. Execution.
            </div>

            <div className="mt-6 footer-contact space-y-1 text-muted-foreground">
              <div><a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></div>
              <div><a href="mailto:contact@cadreglobal.net" className="hover:underline">contact@cadreglobal.net</a></div>
              <div><a href="mailto:executive@cadreglobal.net" className="hover:underline">executive@cadreglobal.net</a></div>
              <div><a href="mailto:partners@cadreglobal.net" className="hover:underline">partners@cadreglobal.net</a></div>
              <div><a href="https://maps.google.com/?q=New+York,+NY+10001" target="_blank" rel="noopener noreferrer" className="hover:underline">New York, NY 10001</a></div>
            </div>
          </div>

          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="footer-links space-y-2 text-muted-foreground">
              <li><a className="hover:underline" href="/about">About Us</a></li>
              <li><a className="hover:underline" href="/global-network">Global Network</a></li>
              <li><a className="hover:underline" href="/subscription">Membership</a></li>
              <li><a className="hover:underline" href="/contact">Contact</a></li>
              <li><a className="hover:underline" href="/legal">Legal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for exclusive offers and insider access.</p>

            <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleNewsletterSubmit}>
              <Input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} className="newsletter-input rounded-md bg-input/60 text-accent-foreground placeholder:text-muted-foreground w-full" required />
              <Button type="submit" variant="outline" className="newsletter-btn bg-accent text-accent-foreground rounded-md shadow-sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground">
          <div>© 2025 Cadré Global. All rights reserved.</div>
          <div className="footer-legal space-x-4">
            <a className="hover:underline" href="/privacy-policy">Privacy Policy</a>
            <a className="hover:underline" href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;