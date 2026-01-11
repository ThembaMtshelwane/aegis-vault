import { useState } from "react";
import type { ICartItem } from "../../types/cart.types";
import { Link } from "react-router";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { rarityColors } from "../../data/products";

const CartContent = ({
  initialItems,
}: {
  initialItems: ICartItem[] | null;
}) => {
  const [items, setItems] = useState<ICartItem[]>(initialItems || []);

  console.log("Cart items:", items);
  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product._id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product._id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/shop"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-display text-3xl text-foreground">Your Cart</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <Card
                key={product._id}
                className="p-4 bg-card/50 border-border flex gap-4 flex-col sm:flex-row"
              >
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
                      <span
                        className={`text-sm ${rarityColors[product.rarity]}`}
                      >
                        {product.rarity}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(product._id)}
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
                        onClick={() =>
                          updateQuantity(product._id, quantity - 1)
                        }
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-display">
                        {quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(product._id, quantity + 1)
                        }
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <p className="font-display text-primary">
                      R{" "}
                      {new Intl.NumberFormat("en-ZA", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(product.price * quantity)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 bg-card/50 border-border sticky top-24">
              <h2 className="font-display text-xl text-foreground mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 mb-6">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product._id}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted-foreground truncate pr-2">
                      {product.name} × {quantity}
                    </span>
                    <span className="text-foreground shrink-0">
                      R{" "}
                      {new Intl.NumberFormat("en-ZA", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(product.price * quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-display text-foreground">Total</span>
                  <span className="font-display text-xl text-primary">
                    R{" "}
                    {new Intl.NumberFormat("en-ZA", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(totalPrice)}
                  </span>
                </div>
              </div>
              <Button variant="mystic" className="w-full mb-3">
                Proceed to Checkout
              </Button>
              <Button
                variant="ghost"
                className="w-full text-muted-foreground"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
