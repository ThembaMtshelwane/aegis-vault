import { useGetCartQuery } from "../store/cart";
import EmptyCart from "../components/Cart/EmptyCart";
import CartContent from "../components/Cart/CartContent";
import Loading from "../components/Loading";

const Cart = () => {
  const { data: cart, isLoading, isFetching } = useGetCartQuery();

  if (isLoading && isFetching) {
    return <Loading />;
  }

  if (!cart || cart.items.length === 0) {
    return <EmptyCart />;
  }

  return <CartContent initialItems={cart?.items || []} />;
};

export default Cart;
