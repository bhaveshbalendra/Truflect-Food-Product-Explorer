import React from "react";
import { Category } from "../types/product";

interface CategoryCardProps {
  category: Category;
  onClick: (categoryName: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const handleClick = () => {
    onClick(category.name);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 border border-gray-200"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">🍽️</span>
        </div>

        <h3 className="font-semibold text-lg text-gray-800 mb-2 capitalize line-clamp-2">
          {category.name.replace(/^en:/, "").replace(/-/g, " ")}
        </h3>

        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <span className="font-medium">{category.products}</span>
            <span className="ml-1">products</span>
          </div>

          {category.known > 0 && (
            <div className="flex items-center">
              <span className="font-medium">{category.known}</span>
              <span className="ml-1">known</span>
            </div>
          )}
        </div>

        <div className="mt-3 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
          Click to explore
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
