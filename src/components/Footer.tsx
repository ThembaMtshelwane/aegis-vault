import { Sparkles, Moon, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-muted border-t border-border py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-display text-lg tracking-wider">
                Mystic Emporium
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Purveyors of the peculiar, dealers in the arcane. Since the autumn
              of ages past.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-wide mb-4 text-foreground">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                "Trinkets",
                "Collectibles",
                "Ancient Tomes",
                "New Arrivals",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-sm tracking-wide mb-4 text-foreground">
              Support
            </h4>
            <ul className="space-y-2">
              {["Contact Us", "Shipping", "Returns", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mystical Hours */}
          <div>
            <h4 className="font-display text-sm tracking-wide mb-4 text-foreground">
              Mystical Hours
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Moon className="w-4 h-4 text-primary" />
                <span>Dusk till Dawn</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span>Full Moons: Always Open</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mystic Emporium. All enchantments
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Pact
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Binding
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
