import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-3">PARAMOUNT</h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              We Serve Happiness. A trusted food and retail brand in Kerala with multiple outlets serving quality food and fresh products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/businesses", label: "Our Businesses" },
                { to: "/menu", label: "Menu" },
                { to: "/locations", label: "Locations" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
              <a href="tel:09946666541" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                099466 66541
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                Kadambazhipuram Junction, Kadampazhipuram, Kerala 678633
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Opens at 11:00 AM
              </div>
              <a href="mailto:info@paramountgroup.in" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                info@paramountgroup.in
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Opening Hours</h4>
            <div className="text-sm text-secondary-foreground/70 space-y-2">
              <div className="flex justify-between">
                <span>Mon – Sat</span>
                <span>11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>11:00 AM – 11:00 PM</span>
              </div>
              <div className="border-t border-secondary-foreground/10 pt-2 mt-3">
                <p className="text-xs text-secondary-foreground/50">Hours may vary by location</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/40">
            © {new Date().getFullYear()} Paramount Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919946666541"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-secondary-foreground/40 hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-secondary-foreground/20">|</span>
            <span className="text-xs text-secondary-foreground/40">
              Made with ❤️ in Kerala
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
