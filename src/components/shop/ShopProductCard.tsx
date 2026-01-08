import { Link } from "react-router";
import { Card, CardContent, CardFooter } from "../ui/Card";
import { Button } from "../ui/Button";
import { Eye, Sparkles } from "lucide-react";
import { type Product, rarityColors } from "../../data/products";
import { cn } from "../../lib/utils";
import { Badge } from "../ui/Badge";

interface ShopProductCardProps {
  product: Product;
}

const ShopProductCard = ({ product }: ShopProductCardProps) => {
  return (
    <Card variant="mystic" className="group overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <Link to={`/products/${product.id}`}>
            <Button
              variant="gold"
              size="sm"
              className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <Eye className="w-4 h-4" />
              View Details
            </Button>
          </Link>
        </div>
        {/* Rarity Badge */}
        <div className="absolute top-3 left-3">
          <Badge
            className={cn(
              "text-xs font-display tracking-wide border",
              rarityColors[product.rarity]
            )}
          >
            {product.rarity}
          </Badge>
        </div>
        {/* Attunement Badge */}
        {product.requiresAttunement && (
          <div className="absolute top-3 right-3">
            <Badge
              variant="outline"
              className="bg-background/80 backdrop-blur-sm text-xs border-primary/50"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Attunement
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="pt-5">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-display text-lg tracking-wide text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <span className="font-display text-xl text-gold">
          {product.price.toLocaleString()} gp
        </span>
        <Link to={`/shop/${product.id}`}>
          <Button variant="outline" size="sm">
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ShopProductCard;
