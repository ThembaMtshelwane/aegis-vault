import { useMemo, useState } from "react";
import { type ItemType, type Rarity } from "../data/products";
import ProductFilter from "../components/Products/ProductFilter";
import ShopProductCard from "../components/shop/ShopProductCard";
import { useGetProductsQuery } from "../store/features/product";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRarity, setSelectedRarity] = useState<Rarity | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ItemType | null>(
    null
  );
  const {
    data: productsData,
    isLoading,
    error,
  } = useGetProductsQuery({
    search: searchQuery,
    rarity: selectedRarity || undefined,
    category: selectedCategory || undefined,
  });

  const filteredProducts = useMemo(() => {
    if (!productsData?.data?.data) {
      return [];
    }
    return productsData?.data.data.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRarity =
        !selectedRarity || product.rarity === selectedRarity;
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesRarity && matchesCategory;
    });
  }, [searchQuery, selectedRarity, selectedCategory, productsData]);

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 mt-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-display tracking-[0.3em] text-primary mb-2 uppercase">
              Browse Our Wares
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-4">
              The Armory
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From common adventuring supplies to legendary artifacts, find
              everything you need for your next quest.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-lg border border-border p-6">
                <h2 className="font-display text-lg tracking-wide mb-6">
                  Find What you're looking for
                </h2>
                <ProductFilter
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedRarity={selectedRarity}
                  onRarityChange={setSelectedRarity}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </div>
            </aside>

            {isLoading && <p>Loading products...</p>}
            {/* Products Grid */}
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Loading featured products...
                </p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-destructive mb-2">Failed to load products</p>
                <p className="text-sm text-muted-foreground">
                  Please try again later
                </p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product._id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ShopProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
