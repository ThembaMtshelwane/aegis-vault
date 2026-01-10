export type Rarity = "Common" | "Rare" | "Very Rare" | "Legendary";
export type ItemType = "Weapon" | "Armor" | "Item" | "Spell Component" | "Tome";

export interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  category: ItemType;
  image: string;
  description: string;
  rarity: Rarity;
  requiresAttunement: boolean;
  stats?: string[];
}
