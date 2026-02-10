import Empty from "../components/ui/Empty";
import OrdersContent from "../components/Order/OrderContent";
import { orders } from "../types/order.types";

const Orders = () => {

  // const orders: IOrder[] = [];

  if (!orders || orders.length === 0) {
    return <Empty name={"Your order history is empty"} />;
  }

  return <OrdersContent initialOrders={orders} />;
};

export default Orders;
