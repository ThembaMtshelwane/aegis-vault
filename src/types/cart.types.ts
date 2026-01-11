import type { Product } from "./product.types";

export interface ICartItem {
  product: Product;
  quantity: number;
  price: number; // item price * quantity
}

export interface ICart {
  userId: string;
  items: ICartItem[];
  totalPrice: number; // sum of all item prices in the items array
}
