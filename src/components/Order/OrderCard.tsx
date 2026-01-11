import { Card } from "../ui/Card";
import { ChevronRight, Package } from "lucide-react";
import { Link } from "react-router";

export interface IOrder {
  _id: string;
  createdAt: string;
  totalPrice: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
}
interface OrderCardProps {
  order: IOrder;
}

export const OrderCard = ({ order }: OrderCardProps) => {
  const formattedDate = new Date(order.createdAt).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const currencyFormatter = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  });

  return (
    <Card className="p-6 bg-card/50 border-border hover:border-primary/50 transition-all group">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Package className="w-6 h-6 text-primary animate-float" />
          </div>
          <div>
            <h3 className="font-display text-lg text-foreground">
              Order #{order._id.slice(-6).toUpperCase()}
            </h3>
            <p className="text-sm text-muted-foreground">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-8">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total Value</p>
            <p className="font-display text-primary text-lg">
              {currencyFormatter.format(order.totalPrice)}
            </p>
          </div>

          <Link
            to={`/orders/${order._id}`}
            className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Status:
        </span>
        <span
          className={`text-xs uppercase tracking-widest font-bold ${
            order.status === "delivered" ? "text-secondary" : "text-accent"
          }`}
        >
          {order.status}
        </span>
      </div>
    </Card>
  );
};
