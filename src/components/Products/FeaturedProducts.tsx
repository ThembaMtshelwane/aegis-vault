import ProductCard, {type Product } from "../Products/ProductCard";
import { Sparkles } from "lucide-react";

const products: Product[] = [
  {
    id: "1",
    name: "Crystal Scrying Orb",
    price: 89.99,
    category: "Trinkets",
    image:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500&h=500&fit=crop",
    description:
      "A mystical crystal sphere for divination and meditation. Reveals glimpses of what may come.",
  },
  {
    id: "2",
    name: "Grimoire of Shadows",
    price: 145.0,
    category: "Ancient Tomes",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&h=500&fit=crop",
    description:
      "Leather-bound tome containing forgotten incantations and arcane wisdom from the 15th century.",
  },
  {
    id: "3",
    name: "Enchanted Pocket Watch",
    price: 125.0,
    category: "Collectibles",
    image:
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500&h=500&fit=crop",
    description:
      "Antique brass timepiece said to slow time for its bearer during moments of great need.",
  },
  {
    id: "4",
    name: "Raven Skull Pendant",
    price: 55.0,
    category: "Trinkets",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop",
    description:
      "Hand-carved obsidian pendant imbued with protective magic. A guardian companion.",
  },
  {
    id: "5",
    name: "Alchemist's Compendium",
    price: 199.0,
    category: "Ancient Tomes",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop",
    description:
      "Complete guide to transmutation arts with original illustrations and rare formulas.",
  },
  {
    id: "6",
    name: "Vintage Apothecary Set",
    price: 175.0,
    category: "Collectibles",
    image:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&h=500&fit=crop",
    description:
      "Complete set of Victorian-era glass vials and brass implements for the modern mystic.",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="featured" className="py-20 md:py-28 bg-mystic-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-px bg-linear-to-r from-transparent to-primary" />
            <Sparkles className="w-5 h-5 text-gold animate-shimmer" />
            <div className="w-16 h-px bg-linear-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
            Featured Artifacts
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hand-selected treasures from our ever-changing collection. Each
            piece carries its own story.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
