import { useGetCartQuery } from "../store/cart";
import Empty from "../components/ui/Empty";
import CartContent from "../components/Cart/CartContent";
import Loading from "../components/Loading";

const Cart = () => {
  const { data: cart, isLoading, isFetching } = useGetCartQuery();

  if (isLoading && isFetching) {
    return <Loading />;
  }

  if (!cart || cart.items.length === 0) {
    return <Empty name="Your cart is empty" />;
  }

  return <CartContent initialItems={cart?.items || []} />;
};

export default Cart;
