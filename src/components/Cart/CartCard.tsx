import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { rarityColors } from "../../data/products";
import type { ICartItem } from "../../types/cart.types";

interface CartCardProps {
  item: ICartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export const CartCard = ({
  item,
  onRemove,
  onUpdateQuantity,
}: CartCardProps) => {
  const { product, quantity } = item;

  const formattedPrice = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(product.price * quantity);

  return (
    <Card className="p-4 bg-card/50 border-border flex gap-4 flex-col sm:flex-row">
      <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg text-foreground truncate">
              {product.name}
            </h3>
            <span className={`text-sm ${rarityColors[product.rarity]}`}>
              {product.rarity}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(product._id)}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity(product._id, quantity - 1)}
            >
              <Minus className="w-3 h-3" />
            </Button>
            <span className="w-8 text-center font-display">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity(product._id, quantity + 1)}
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
          <p className="font-display text-primary">{formattedPrice}</p>
        </div>
      </div>
    </Card>
  );
};
