import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import type { ICartItem } from "../../types/cart.types";

interface OrderSummaryProps {
  items: ICartItem[];
  totalPrice: number;
  onClear: () => void;
}

export const OrderSummary = ({
  items,
  totalPrice,
  onClear,
}: OrderSummaryProps) => {
  const currencyFormatter = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  });

  return (
    <Card className="p-6 bg-card/50 border-border sticky top-24">
      <h2 className="font-display text-xl text-foreground mb-4">
        Order Summary
      </h2>
      <div className="space-y-3 mb-6">
        {items.map(({ product, quantity }) => (
          <div key={product._id} className="flex justify-between text-sm">
            <span className="text-muted-foreground truncate pr-2">
              {product.name} × {quantity}
            </span>
            <span className="text-foreground shrink-0">
              {currencyFormatter.format(product.price * quantity)}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-4 mb-6">
        <div className="flex justify-between">
          <span className="font-display text-foreground">Total</span>
          <span className="font-display text-xl text-primary">
            {currencyFormatter.format(totalPrice)}
          </span>
        </div>
      </div>
      <Button variant="mystic" className="w-full mb-3">
        Proceed to Checkout
      </Button>
      <Button
        variant="ghost"
        className="w-full text-muted-foreground"
        onClick={onClear}
      >
        Clear Cart
      </Button>
    </Card>
  );
};
