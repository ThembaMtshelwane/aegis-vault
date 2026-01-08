import { Button } from "../components/ui/Button";
import { Gem, BookOpen, Clock, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Gem,
    title: "Mystical Trinkets",
    description:
      "Crystals, amulets, and enchanted objects to enhance your daily rituals.",
    count: 47,
    href: "#trinkets",
  },
  {
    icon: Clock,
    title: "Odd Collectibles",
    description: "Curious antiques and peculiar artifacts from forgotten eras.",
    count: 32,
    href: "#collectibles",
  },
  {
    icon: BookOpen,
    title: "Ancient Tomes",
    description:
      "Rare books, grimoires, and scrolls containing arcane knowledge.",
    count: 24,
    href: "#books",
  },
];

const CategorySection = () => {
  return (
    <section id="categories" className="py-20 md:py-28 bg-muted">
      <div className="lg:container  mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find what calls to you. Our collection is organized to guide your
            mystical journey.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <a
              key={category.title}
              href={category.href}
              className="group relative p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/40 hover:shadow-glow hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl tracking-wide text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gold font-display">
                  {category.count} items
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-linear-to-b from-primary/50 to-transparent" />
                <div className="absolute top-0 right-0 w-8 h-px bg-linear-to-l from-primary/50 to-transparent" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Collections
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
