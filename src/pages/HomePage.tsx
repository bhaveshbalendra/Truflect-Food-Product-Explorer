import React, { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { foodApi } from "../store/service/foodApi";

type ViewMode = "categories" | "search" | "category-products";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("categories");

  const { data: categories = [], isLoading: categoriesLoading } =
    foodApi.useGetAllCategoriesQuery();

  const { data: searchResults = [], isLoading: searchLoading } =
    foodApi.useSearchProductsQuery(searchQuery, {
      skip: !searchQuery || viewMode !== "search",
    });

  const { data: categoryProducts = [], isLoading: categoryLoading } =
    foodApi.useGetProductsByCategoryQuery(selectedCategory, {
      skip: !selectedCategory || viewMode !== "category-products",
    });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setViewMode("search");
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setViewMode("category-products");
  };

  const handleBackToCategories = () => {
    setViewMode("categories");
    setSearchQuery("");
    setSelectedCategory("");
  };

  const displayedCategories = categories.slice(0, 20); // Show first 20 categories

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">
            🍽️ Food Product Explorer
          </h1>

          <SearchBar
            onSearch={handleSearch}
            isLoading={searchLoading}
            placeholder="Search for food products..."
          />

          {(viewMode === "search" || viewMode === "category-products") && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleBackToCategories}
                className="px-4 py-2 text-white transition-colors bg-gray-600 rounded-lg hover:bg-gray-700"
              >
                ← Back to Categories
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Categories View */}
        {viewMode === "categories" && (
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Browse Food Categories
            </h2>

            {categoriesLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-12 h-12 border-b-2 border-blue-500 rounded-full animate-spin"></div>
                <span className="ml-3 text-gray-600">
                  Loading categories...
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {displayedCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    onClick={handleCategoryClick}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Search Results View */}
        {viewMode === "search" && (
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Search Results for "{searchQuery}"
            </h2>

            {searchLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-12 h-12 border-b-2 border-blue-500 rounded-full animate-spin"></div>
                <span className="ml-3 text-gray-600">
                  Searching products...
                </span>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="py-12 text-center">
                <div className="mb-4 text-6xl">🔍</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  No products found
                </h3>
                <p className="text-gray-500">
                  Try searching with different keywords or browse categories
                  instead.
                </p>
              </div>
            ) : (
              <div>
                <p className="mb-6 text-gray-600">
                  Found {searchResults.length} products
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {searchResults.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Category Products View */}
        {viewMode === "category-products" && (
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 capitalize">
              Products in{" "}
              {selectedCategory.replace(/^en:/, "").replace(/-/g, " ")}
            </h2>

            {categoryLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-12 h-12 border-b-2 border-blue-500 rounded-full animate-spin"></div>
                <span className="ml-3 text-gray-600">Loading products...</span>
              </div>
            ) : categoryProducts.length === 0 ? (
              <div className="py-12 text-center">
                <div className="mb-4 text-6xl">📦</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  No products found in this category
                </h3>
                <p className="text-gray-500">
                  This category might not have available products in the
                  database.
                </p>
              </div>
            ) : (
              <div>
                <p className="mb-6 text-gray-600">
                  Found {categoryProducts.length} products
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
