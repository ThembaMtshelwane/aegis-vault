import heroBg from "../../assets/hero-bg.jpg";
import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/50 to-background" />
      </div>

      <Navbar/>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-3xl mx-auto">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-primary" />
            <Sparkles className="w-5 h-5 text-gold animate-glow" />
            <div className="w-12 h-px bg-linear-to-l from-transparent to-primary" />
          </div>

          {/* Subtitle */}
          <p
            className="font-display text-sm md:text-base tracking-[0.3em] text-primary mb-4 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            PURVEYORS OF THE PECULIAR
          </p>

          {/* Main Title */}
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wide mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-gradient-gold">Aegis</span>{" "}
            <span className="text-foreground">Vault</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Discover ancient treasures, mystical trinkets, and forbidden
            knowledge from realms beyond. Each artifact holds secrets waiting to
            be unveiled.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="mystic" size="xl">
              <Sparkles className="w-5 h-5" />
              Explore Collection
            </Button>
            <Button variant="outline" size="lg">
              View New Arrivals
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-30 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#featured"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="font-display text-xs tracking-widest">SCROLL</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
