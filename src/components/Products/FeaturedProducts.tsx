import { Sparkles } from "lucide-react";
import ShopProductCard from "../shop/ShopProductCard";
import { products } from "../../data/products";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {products.slice(0, 3).map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ShopProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
