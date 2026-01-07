import { Card, CardContent, CardFooter } from "../ui/Card";
import { Button } from "../ui/Button";
import { ShoppingCart, Eye } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
          <Button
            variant="gold"
            size="sm"
            className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye className="w-4 h-4" />
            Quick View
          </Button>
        </div>
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-xs font-display tracking-wide text-primary rounded-full border border-primary/30">
            {product.category}
          </span>
        </div>
      </div>

      <CardContent className="pt-5">
        <h3 className="font-display text-lg tracking-wide text-foreground mb-1 group-hover:text-primary transition-colors truncate">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <span className="font-display text-xl text-gold">
          ${product.price.toFixed(2)}
        </span>
        <Button variant="outline" size="sm">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
