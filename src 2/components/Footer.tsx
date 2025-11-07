import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState("");
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const {
        supabase
      } = await import("@/integrations/supabase/client");
      const {
        error
      } = await supabase.functions.invoke("send-contact-email", {
        body: {
          type: "newsletter",
          data: {
            email
          }
        }
      });
      if (error) throw error;
      const {
        toast
      } = await import("@/components/ui/use-toast");
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter."
      });
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      const {
        toast
      } = await import("@/components/ui/use-toast");
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    }
  };
  return <footer id="contact" className="bg-secondary border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-light tracking-wider mb-4">Cadré Global</h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">Private client mobility and lifestyle operations.
Precision. Discretion. Execution.</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+1234567890" className="hover:text-foreground transition-colors">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:contact@cadreglobal.net" className="hover:text-foreground transition-colors">contact@cadreglobal.net</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:executive@cadreglobal.net" className="hover:text-foreground transition-colors">executive@cadreglobal.net</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:partners@cadreglobal.net" className="hover:text-foreground transition-colors">partners@cadreglobal.net</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/network" className="text-sm text-muted-foreground hover:text-accent transition-colors">Global Network</a></li>
              <li><a href="/subscription" className="text-sm text-muted-foreground hover:text-accent transition-colors">Membership</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive offers and insider access.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} className="bg-background/50 border-border" required />
              <Button type="submit" variant="outline" className="w-full">
                Subscribe
              </Button>
            </form>
            
            {/* Social Proof */}
            <div className="mt-6 pt-6 border-t border-border/50">
              
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Cadré Global. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
              <span className="text-sm text-muted-foreground">© 2025 Cadré Global. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;