import { ArrowLeft, Sparkles, Check, ShoppingCart } from "lucide-react";
import { useParams, Link } from "react-router";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { rarityColors } from "../data/products";
import { cn } from "../lib/utils";
import { Badge } from "../components/ui/Badge";
import { useGetProductQuery } from "../store/features/product";
import { skipToken } from "@reduxjs/toolkit/query";

const ProductDetail = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetProductQuery(id ?? skipToken);

  console.log("Product Data:", product);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">Loading item details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl text-foreground mb-4">
              Item Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The item you're looking for doesn't exist in our inventory.
            </p>
            <Link to="/shop">
              <Button variant="gold">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Shop
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Link
            to="/shop"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border border-border bg-card">
                <img
                  src={product.data?.image}
                  alt={product.data?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <Badge
                  className={cn(
                    "text-sm font-display tracking-wide border",
                    rarityColors[
                      product.data?.rarity as keyof typeof rarityColors
                    ]
                  )}
                >
                  {product.data?.rarity}
                </Badge>
                {product.data?.requiresAttunement && (
                  <Badge
                    variant="outline"
                    className="bg-background/90 backdrop-blur-sm border-primary/50"
                  >
                    <Sparkles className="w-3 h-3 mr-1" />
                    Requires Attunement
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-display tracking-[0.2em] text-primary uppercase mb-2">
                  {product.data?.category}
                </p>
                <h1 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
                  {product.data?.name}
                </h1>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {product.data?.description}
                </p>
              </div>

              {/* Stats Card */}
              {product.data?.stats && product.data.stats.length > 0 && (
                <Card variant="mystic">
                  <CardContent className="pt-6">
                    <h3 className="font-display text-sm tracking-wider text-muted-foreground uppercase mb-4">
                      Item Properties
                    </h3>
                    <ul className="space-y-3">
                      {product.data?.stats.map((stat, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Price & Actions */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl text-gold">
                    R{" "}
                    {new Intl.NumberFormat("en-ZA", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(product.data?.price as number)}
                  </span>
                </div>

                <div className="flex gap-4">
                  <Button variant="gold" size="lg" className="flex-1">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-card rounded-lg border border-border p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Note:</span> All
                  magical items are verified authentic by our resident archmage.
                  Satisfaction guaranteed or your gold back within 30 days
                  (cursed items excluded).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
