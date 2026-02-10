import type { ICartItem } from "./cart.types";

export interface IOrder {
  _id: string;
  userId: string;
  createdAt: string;
  totalPrice: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  items: ICartItem[];
}

export const orders: IOrder[] = [
  {
    _id: "123456",
    userId:"user123",
    createdAt: "2023-01-01T00:00:00Z",
    totalPrice: 123.45,
    status: "delivered",
    items: [
      {
        product: {
          _id: "product1",
          category: "Weapon",
          description: "A legendary sword of immense power.",
          name: "Excalibur Sword",
          rarity: "Legendary",
          slug: "excalibur-sword",
          requiresAttunement: true,
          price: 999.99,
          image: "https://example.com/excalibur.jpg",
        },
        quantity: 1,
        price: 123.45,
      },
      {
        product: {
          _id: "product1",
          category: "Weapon",
          description: "A legendary sword of immense power.",
          name: "Excalibur Sword",
          rarity: "Legendary",
          slug: "excalibur-sword",
          requiresAttunement: true,
          price: 999.99,
          image: "https://example.com/excalibur.jpg",
        },
        quantity: 1,
        price: 123.45,
      },
      {
        product: {
          _id: "product1",
          category: "Weapon",
          description: "A legendary sword of immense power.",
          name: "Excalibur Sword",
          rarity: "Legendary",
          slug: "excalibur-sword",
          requiresAttunement: true,
          price: 999.99,
          image: "https://example.com/excalibur.jpg",
        },
        quantity: 1,
        price: 123.45,
      },
    ],
  },
];
