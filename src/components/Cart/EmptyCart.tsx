import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "../ui/Button";
import { Link } from "react-router";

const EmptyCart = () => {
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
};

export default EmptyCart;
