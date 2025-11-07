import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-background/80 backdrop-blur-md"}
        border-b border-border`}>
      <nav className="container mx-auto h-16 md:h-20 px-4">
        <div className="h-full flex items-center justify-between my-0 mx-0 px-0 py-0">
          <NavLink to="/" className="text-2xl font-playfair font-light tracking-wider text-foreground hover:text-accent transition-colors">
            Cadré Global
          </NavLink>

          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </NavLink>
            <NavLink to="/network" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Network
            </NavLink>
            <NavLink to="/subscription" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Membership
            </NavLink>
            <a href="#contact">
              <Button variant="outline" size="sm">
                Contact
              </Button>
            </a>
            <NavLink to="/subscription">
              <Button variant="hero" size="sm">
                Apply Now
              </Button>
            </NavLink>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/98 backdrop-blur-xl border-l border-border">
              <nav className="flex flex-col gap-6 mt-8">
                <NavLink 
                  to="/about" 
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
                <NavLink 
                  to="/network" 
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Network
                </NavLink>
                <NavLink 
                  to="/subscription" 
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Membership
                </NavLink>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact
                  </Button>
                </a>
                <NavLink to="/subscription" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="sm" className="w-full">
                    Apply Now
                  </Button>
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>;
};
export default Header;