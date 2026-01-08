import { ShoppingCart, Menu, Sparkles, LogOut, LogIn } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Trinkets", href: "#trinkets" },
    { name: "Collectibles", href: "#collectibles" },
    { name: "Ancient Tomes", href: "#books" },
    { name: "About", href: "#about" },
  ];

  const user = null;
  const signOut = () => console.log("sign out");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="px-4 mx-auto border">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-primary animate-glow" />
            <span className="font-display text-xl md:text-2xl tracking-wider text-foreground group-hover:text-primary transition-colors">
              Aegis Vault
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm mr-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-display tracking-wide text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 gap-x-6">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {/* <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-display">
                3
              </span> */}
            </Link>

            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut()}
                className="hidden md:flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            ) : (
              <Button
                variant="mystic"
                size="sm"
                asChild
                className="hidden md:flex"
              >
                <a href="/login">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </a>
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 font-display text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-border mt-3">
              {user ? (
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 py-3 font-display text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              ) : (
                <a
                  href="/login"
                  className="flex items-center gap-2 py-3 font-display text-sm tracking-wide text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </a>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
