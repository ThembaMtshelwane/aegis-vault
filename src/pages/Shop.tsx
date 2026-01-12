import { useMemo, useState } from "react";

import ProductFilter from "../components/Products/ProductFilter";
import ShopProductCard from "../components/shop/ShopProductCard";
import { useGetProductsQuery } from "../store/features/product";
import type { ItemType, Rarity } from "../types/product.types";
import Pagination from "../components/ui/Pagination";
import Loading from "../components/Loading";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRarity, setSelectedRarity] = useState<Rarity | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ItemType | null>(
    null
  );
  const { data: productsData, isLoading } = useGetProductsQuery({
    search: searchQuery,
    rarity: selectedRarity || undefined,
    category: selectedCategory || undefined,
    limit: 12,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    if (!productsData?.data.data) return [];
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleRarityChange = (value: Rarity | null) => {
    setSelectedRarity(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: ItemType | null) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  if (isLoading) return <Loading />;

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
                  onSearchChange={handleSearchChange}
                  selectedRarity={selectedRarity}
                  onRarityChange={handleRarityChange}
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </div>
            </aside>

            {/* Products Grid */}
            <section className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing{" "}
                  <span className="text-foreground font-medium">
                    {filteredProducts?.length} of{" "}
                    {productsData?.data.pagination.totalCount}
                  </span>{" "}
                  items
                </p>
              </div>

              {filteredProducts?.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts?.map((product) => (
                    <ShopProductCard product={product} key={product._id} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="font-display text-xl text-muted-foreground mb-2">
                    No items found
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your filters or search query.
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={0}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
