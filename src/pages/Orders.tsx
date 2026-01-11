import type { IOrder } from "../components/Order/OrderCard";
import OrdersContent from "../components/Order/OrderContent";

const Orders = () => {
  //   const { data: orders, isLoading } = useGetOrdersQuery();

  //   if (isLoading) {
  //     return (
  //       <div className="min-h-screen flex items-center justify-center">
  //         <p className="text-muted-foreground animate-shimmer">
  //           Consulting the archives...
  //         </p>
  //       </div>
  //     );
  //   }

  const orders: IOrder[] = [
    {
      _id: "123456",
      createdAt: "2023-01-01T00:00:00Z",
      totalPrice: 123.45,
      status: "delivered",
    },
    {
      _id: "789012",
      createdAt: "2023-02-15T00:00:00Z",
      totalPrice: 678.9,
      status: "shipped",
    },
  ];

  //   if (!orders || orders.length === 0) {
  //     return <EmptyOrders />;
  //   }

  return <OrdersContent initialOrders={orders} />;
};

export default Orders;
