import { ArrowLeft } from "lucide-react";
import {  useNavigate } from "react-router";
import { OrderCard, type IOrder } from "./OrderCard";

const OrdersContent = ({ initialOrders }: { initialOrders: IOrder[] }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background bg-mystic-pattern">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col gap-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return
          </button>
          <h1 className="font-display text-4xl text-foreground text-gradient-gold w-fit">
            Order History
          </h1>
          <p className="text-muted-foreground">
            Review your past acquisitions and magical relics.
          </p>
        </div>

        <div className="max-w-4xl space-y-4">
          {initialOrders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersContent;
