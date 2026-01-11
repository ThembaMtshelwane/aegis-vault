import { useGetCartQuery } from "../store/cart";
import EmptyCart from "../components/Cart/EmptyCart";
import CartContent from "../components/Cart/CartContent";

const Cart = () => {
  const { data: cart, isLoading } = useGetCartQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return <EmptyCart />;
  }

  console.log("Car:", cart);

  return <CartContent initialItems={cart?.items || []} />;
};

export default Cart;
