import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { CartCard } from "./CartCard";
import type { ICartItem } from "../../types/cart.types";
import { OrderSummary } from "../Order/OrderSummary";
import {
  useClearCartMutation,
  useDecrementCartItemMutation,
  useIncrementCartItemMutation,
  useRemoveFromCartMutation,
} from "../../store/cart";

const CartContent = ({
  initialItems,
}: {
  initialItems: ICartItem[] | null;
}) => {
  const [incrementCartItem] = useIncrementCartItemMutation();
  const [decrementCartItem] = useDecrementCartItemMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  const [clearCart] = useClearCartMutation();
  const navigate = useNavigate();
  const [items, setItems] = useState<ICartItem[]>(initialItems || []);

  const handleRemoveItemFromCart = async (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product._id !== productId));
    await removeFromCart({ productId })
      .unwrap()
      .catch((error) => {
        console.error("Failed to remove item from cart:", error);
      });
  };

  const handleUpdateQuantity = async (
    productId: string,
    newQuantity: number,
    type: "inc" | "dec"
  ) => {
    // 1. Instant UI Update (Optimistic)
    if (newQuantity <= 0) {
      handleRemoveItemFromCart(productId);
    } else {
      setItems((prev) =>
        prev.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }

    try {
      if (type === "inc") {
        await incrementCartItem({ productId }).unwrap();
      } else {
        await decrementCartItem({ productId }).unwrap();
      }
    } catch (error) {
      console.error("Failed to sync with server:", error);
    }
  };

  const handleClearCart = async () => {
    setItems([]);
    await clearCart()
      .unwrap()
      .catch((error) => {
        console.error("Failed to clear cart:", error);
      });
  };
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-4 mb-8 ">
          <div
            onClick={() => navigate(-1)}
            className="cursor-pointer text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </div>
          <h1 className="font-display text-3xl text-foreground">Your Cart</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartCard
                key={item.product._id}
                item={item}
                onRemove={handleRemoveItemFromCart}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <OrderSummary
              items={items}
              totalPrice={totalPrice}
              onClear={handleClearCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
