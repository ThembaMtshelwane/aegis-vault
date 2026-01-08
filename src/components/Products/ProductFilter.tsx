import { Search, X } from "lucide-react";
import type { ItemType, Rarity } from "../../data/products";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedRarity: Rarity | null;
  onRarityChange: (rarity: Rarity | null) => void;
  selectedCategory: ItemType | null;
  onCategoryChange: (category: ItemType | null) => void;
}

const rarities: Rarity[] = ["Common", "Rare", "Very Rare", "Legendary"];
const categories: ItemType[] = [
  "Weapon",
  "Armor",
  "Maps",
  "Spell Component",
  "Tome",
];

const ProductFilter = ({
  searchQuery,
  onSearchChange,
  selectedRarity,
  onRarityChange,
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) => {
  const hasFilters = searchQuery || selectedRarity || selectedCategory;

  const clearFilters = () => {
    onSearchChange("");
    onRarityChange(null);
    onCategoryChange(null);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-card border-border"
        />
      </div>

      <div>
        <h3 className="font-display text-sm tracking-wide text-muted-foreground mb-3 mt-8">
          Rarity
        </h3>
        <div className="flex flex-wrap gap-2">
          {rarities.map((rarity) => (
            <Button
              key={rarity}
              variant={selectedRarity === rarity ? "gold" : "outline"}
              size="sm"
              onClick={() =>
                onRarityChange(selectedRarity === rarity ? null : rarity)
              }
              className="text-xs"
            >
              {rarity}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm tracking-wide text-muted-foreground mb-3">
          Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "gold" : "outline"}
              size="sm"
              onClick={() =>
                onCategoryChange(
                  selectedCategory === category ? null : category
                )
              }
              className="text-xs"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4 mr-1" />
          Clear Filters
        </Button>
      )}
    </div>
  );
};

export default ProductFilter;
