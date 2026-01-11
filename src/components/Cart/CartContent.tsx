import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { CartCard } from "./CartCard";
import type { ICartItem } from "../../types/cart.types";
import { OrderSummary } from "../Order/OrderSummary";

const CartContent = ({
  initialItems,
}: {
  initialItems: ICartItem[] | null;
}) => {
  const [items, setItems] = useState<ICartItem[]>(initialItems || []);

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product._id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) return removeFromCart(productId);
    setItems((prev) =>
      prev.map((item) =>
        item.product._id === productId ? { ...item, quantity } : item
      )
    );
  };

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
            {items.map((item) => (
              <CartCard
                key={item.product._id}
                item={item}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <OrderSummary
              items={items}
              totalPrice={totalPrice}
              onClear={() => setItems([])}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
