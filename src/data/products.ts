export type Rarity = "Common" | "Uncommon" | "Rare" | "Very Rare" | "Legendary";
export type ItemType =
  | "Weapon"
  | "Armor"
  | "Wondrous Item"
  | "Spell Component"
  | "Tome";

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
      "https://images.unsplash.com/photo-1528711832280-f6840c696d7d?w=400&h=400&fit=crop",
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
      "https://images.unsplash.com/photo-1562751362-404243c2eea3?w=400&h=400&fit=crop",
    description:
      "Forged by dwarven smiths, this lightweight armor offers protection without hindering stealth.",
    rarity: "Uncommon",
    requiresAttunement: false,
    stats: ["AC 16", "No Stealth disadvantage", "No Strength requirement"],
  },
  {
    id: "3",
    name: "Bag of Holding",
    price: 4000,
    category: "Wondrous Item",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description:
      "This bag has an interior space considerably larger than its outside dimensions.",
    rarity: "Uncommon",
    requiresAttunement: false,
    stats: ["Holds 500 lbs", "64 cubic feet capacity", "Weighs only 15 lbs"],
  },
  {
    id: "4",
    name: "Diamond Dust (100gp)",
    price: 100,
    category: "Spell Component",
    image:
      "https://images.unsplash.com/photo-1551122089-4e3e72477432?w=400&h=400&fit=crop",
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
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
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
    category: "Wondrous Item",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    description:
      "Woven with elven magic, this cloak shifts colors to match your surroundings.",
    rarity: "Uncommon",
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
      "https://images.unsplash.com/photo-1555400082-dd62d8fea4fe?w=400&h=400&fit=crop",
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
      "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=400&h=400&fit=crop",
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
    category: "Wondrous Item",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop",
    description:
      "This lustrous black pearl allows you to regain an expended spell slot.",
    rarity: "Uncommon",
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
      "https://images.unsplash.com/photo-1583937443566-6ae2eaa1679c?w=400&h=400&fit=crop",
    description:
      "Crushed ruby of the finest quality, used in powerful conjuration and abjuration spells.",
    rarity: "Uncommon",
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
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
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
    category: "Wondrous Item",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
    description: "A simple silver ring inscribed with protective runes.",
    rarity: "Rare",
    requiresAttunement: true,
    stats: ["+1 AC", "+1 to all saving throws", "Worn on finger"],
  },
];

export const rarityColors: Record<Rarity, string> = {
  Common: "bg-muted text-muted-foreground",
  Uncommon: "bg-secondary text-secondary-foreground",
  Rare: "bg-blue-900/50 text-blue-300 border-blue-500/30",
  "Very Rare": "bg-purple-900/50 text-purple-300 border-purple-500/30",
  Legendary:
    "bg-gradient-to-r from-amber-900/50 to-orange-900/50 text-gold border-gold/30",
};
