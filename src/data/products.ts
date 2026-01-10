import type { Rarity } from "../types/product.types";

export const rarityColors: Record<Rarity, string> = {
  Common: "bg-muted text-muted-foreground",
  Rare: "bg-blue-900/50 text-blue-300 border-blue-500/30",
  "Very Rare": "bg-purple-900/50 text-purple-300 border-purple-500/30",
  Legendary:
    "bg-gradient-to-r from-amber-900/50 to-orange-900/50 text-gold border-gold/30",
};
