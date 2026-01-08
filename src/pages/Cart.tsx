import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { rarityColors, type Product } from "../data/products";
import { useState } from "react";
import { Link } from "react-router";

interface CartItem {
  product: Product;
  quantity: number;
}

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      product: {
        id: "1",
        name: "Vorpal Longsword +3",
        price: 24000,
        category: "Weapon",
        image:
          "https://images.unsplash.com/photo-1528711832280-f6840c696d7d?w=400&h=400&fit=crop",
        description:
          "This legendary blade hums with arcane energy. On a natural 20, it decapitates the target instantly.",
        rarity: "Legendary",
        requiresAttunement: true,
        stats: [
          "+3 to attack and damage rolls",
          "Critical hits decapitate on humanoids",
          "Ignores slashing resistance",
        ],
      },
      quantity: 0,
    },
    {
      product: {
        id: "3",
        name: "Bag of Holding",
        price: 4000,
        category: "Item",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        description:
          "This bag has an interior space considerably larger than its outside dimensions.",
        rarity: "Rare",
        requiresAttunement: false,
        stats: [
          "Holds 500 lbs",
          "64 cubic feet capacity",
          "Weighs only 15 lbs",
        ],
      },
      quantity: 0,
    },
  ]);

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  //   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <h1 className="font-display text-2xl text-foreground mb-2">
              Your cart is empty
            </h1>
            <p className="text-muted-foreground mb-6">
              Discover magical items in our shop
            </p>
            <Button variant="mystic" asChild>
              <Link to="/shop">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shoppingg
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
                key={product.id}
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
                      onClick={() => removeFromCart(product.id)}
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
                        onClick={() => updateQuantity(product.id, quantity - 1)}
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
                        onClick={() => updateQuantity(product.id, quantity + 1)}
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
                    key={product.id}
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

export default Cart;
