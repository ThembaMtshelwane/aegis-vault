export type Rarity = "Common" | "Rare" | "Very Rare" | "Legendary";
export type ItemType = "Weapon" | "Armor" | "Item" | "Spell Component" | "Tome";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: ItemType;
  image: string;
  description: string;
  rarity: Rarity;
  requiresAttunement: boolean;
  stats?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Vorpal Longsword +3",
    price: 24000,
    category: "Weapon",
    image:
      "https://i.pinimg.com/736x/06/a9/4a/06a94aa2dc6c03b7ffb801062d6f3cf6.jpg",
    description:
      "This legendary blade hums with arcane energy. On a natural 20, it decapitates the target instantly.",
    rarity: "Legendary",
    requiresAttunement: true,
    stats: [
      "+3 to attack and damage rolls",
      "Critical hits decapitate on humanoids",
      "Ignores slashing resistance",
    ],
  },
  {
    id: "2",
    name: "Mithral Chainmail",
    price: 800,
    category: "Armor",
    image:
      "https://i.pinimg.com/1200x/bf/d4/85/bfd48562c39ac1e4c8bde3b78d473891.jpg",
    description:
      "Forged by dwarven smiths, this lightweight armor offers protection without hindering stealth.",
    rarity: "Rare",
    requiresAttunement: false,
    stats: ["AC 16", "No Stealth disadvantage", "No Strength requirement"],
  },
  {
    id: "3",
    name: "Bag of Holding",
    price: 4000,
    category: "Item",
    image:
      "https://i.pinimg.com/736x/72/21/ce/7221ce60dacf031e1653aa96fab9416b.jpg",
    description:
      "This bag has an interior space considerably larger than its outside dimensions.",
    rarity: "Rare",
    requiresAttunement: false,
    stats: ["Holds 500 lbs", "64 cubic feet capacity", "Weighs only 15 lbs"],
  },
  {
    id: "4",
    name: "Diamond Dust",
    price: 100,
    category: "Spell Component",
    image:
      "https://i.pinimg.com/1200x/c4/21/40/c42140b924c74ff683bcf4d70f1d5378.jpg",
    description:
      "Finely ground diamond powder, essential for resurrection magic and protective wards.",
    rarity: "Common",
    requiresAttunement: false,
    stats: [
      "Used in Greater Restoration",
      "Required for Stoneskin",
      "Component for Glyph of Warding",
    ],
  },
  {
    id: "5",
    name: "Tome of Clear Thought",
    price: 50000,
    category: "Tome",
    image:
      "https://i.pinimg.com/736x/18/a9/f6/18a9f6f7a9791917bea3f608a0274e25.jpg",
    description:
      "This ancient tome contains memory and logic exercises. Reading it increases your Intelligence.",
    rarity: "Very Rare",
    requiresAttunement: false,
    stats: [
      "+2 Intelligence permanently",
      "Requires 48 hours to read",
      "Recharges in 100 years",
    ],
  },
  {
    id: "6",
    name: "Cloak of Elvenkind",
    price: 5000,
    category: "Item",
    image:
      "https://i.pinimg.com/736x/6b/a4/0a/6ba40a7e074f98c4125475806642b900.jpg",
    description:
      "Woven with elven magic, this cloak shifts colors to match your surroundings.",
    rarity: "Rare",
    requiresAttunement: true,
    stats: [
      "Advantage on Stealth checks",
      "Disadvantage on Perception to spot you",
      "Hood must be up",
    ],
  },
  {
    id: "7",
    name: "Flame Tongue Greatsword",
    price: 12000,
    category: "Weapon",
    image:
      "https://i.pinimg.com/736x/60/fc/fc/60fcfc5a9e617c99d94540f2cb83469b.jpg",
    description:
      "When you speak this sword's command word, flames erupt from the blade.",
    rarity: "Rare",
    requiresAttunement: true,
    stats: [
      "+2d6 fire damage when ignited",
      "Sheds bright light 40 ft",
      "Command word activation",
    ],
  },
  {
    id: "8",
    name: "Plate Armor of Etherealness",
    price: 48000,
    category: "Armor",
    image:
      "https://i.pinimg.com/736x/3c/80/df/3c80dffc34dfa1d9429bdf02e67ae1e0.jpg",
    description:
      "This ornate plate armor allows the wearer to become ethereal.",
    rarity: "Legendary",
    requiresAttunement: true,
    stats: ["AC 18", "Cast Etherealness 1/day", "10 minute duration"],
  },
  {
    id: "9",
    name: "Pearl of Power",
    price: 6000,
    category: "Item",
    image:
      "https://i.pinimg.com/1200x/a6/c3/ce/a6c3ce2f97a48544368201efe60c5258.jpg",
    description:
      "This lustrous black pearl allows you to regain an expended spell slot.",
    rarity: "Rare",
    requiresAttunement: true,
    stats: [
      "Regain 1 spell slot (3rd or lower)",
      "Once per dawn",
      "Action to use",
    ],
  },
  {
    id: "10",
    name: "Ruby Dust (500gp)",
    price: 500,
    category: "Spell Component",
    image:
      "https://i.pinimg.com/1200x/10/fe/78/10fe78aa207e5a8c6ffcf5d7b551f92c.jpg",
    description:
      "Crushed ruby of the finest quality, used in powerful conjuration and abjuration spells.",
    rarity: "Rare",
    requiresAttunement: false,
    stats: [
      "Used in Forbiddance",
      "Required for Continual Flame",
      "Component for Force Cage",
    ],
  },
  {
    id: "11",
    name: "Manual of Bodily Health",
    price: 50000,
    category: "Tome",
    image:
      "https://i.pinimg.com/1200x/36/78/26/3678264a9d7fb91a4b02bc3fc829b1d2.jpg",
    description:
      "This tome describes fitness exercises and dietary instructions for improving physical health.",
    rarity: "Very Rare",
    requiresAttunement: false,
    stats: [
      "+2 Constitution permanently",
      "Requires 48 hours to read",
      "Recharges in 100 years",
    ],
  },
  {
    id: "12",
    name: "Ring of Protection",
    price: 3500,
    category: "Item",
    image:
      "https://i.pinimg.com/1200x/95/c6/ce/95c6cecdd08d8df5b66891e733c8d71e.jpg",
    description: "A simple silver ring inscribed with protective runes.",
    rarity: "Rare",
    requiresAttunement: true,
    stats: ["+1 AC", "+1 to all saving throws", "Worn on finger"],
  },
];

export const rarityColors: Record<Rarity, string> = {
  Common: "bg-muted text-muted-foreground",
  Rare: "bg-blue-900/50 text-blue-300 border-blue-500/30",
  "Very Rare": "bg-purple-900/50 text-purple-300 border-purple-500/30",
  Legendary:
    "bg-gradient-to-r from-amber-900/50 to-orange-900/50 text-gold border-gold/30",
};
