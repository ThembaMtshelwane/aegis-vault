import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Card } from "../components/ui/Card";
import { orders } from "../types/order.types";

const OrderDetails = () => {
  const order = orders[0];
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/orders"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-display text-3xl text-foreground">
              Order #{order._id.slice(0, 8).toUpperCase()}
            </h1>
            <p className="text-sm text-muted-foreground">
              Placed on{" "}
              {new Date(order.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-xl text-foreground mb-2">Items</h2>
            {order.items.map((item) => (
              <Card
                key={item.product._id}
                className="p-4 bg-card/50 border-border flex gap-4"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        to={`/shop/${item.product._id}`}
                        className="font-display text-lg text-foreground hover:text-primary transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      {/* <p
                        className={`text-sm ${rarityTextColors[item.rarity] || "text-muted-foreground"}`}
                      >
                        {item.rarity}
                      </p> */}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </span>
                    <p className="font-display text-primary">
                      {(item.price * item.quantity).toLocaleString()} gp
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-card/50 border-border sticky top-24">
              <h2 className="font-display text-xl text-foreground mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  {/* <Badge
                    className={`capitalize border ${statusColors[order.status] || ""}`}
                  >
                    {order.status}
                  </Badge> */}
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Items</span>
                  <span className="text-foreground">{order.items.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span className="text-foreground">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="font-display text-foreground">Total</span>
                  <span className="font-display text-xl text-primary">
                    {order.totalPrice.toLocaleString()} gp
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderDetails;
