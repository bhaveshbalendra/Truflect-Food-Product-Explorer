import React from "react";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getNutritionGradeColor = (grade?: string) => {
    if (!grade) return "bg-gray-500";

    switch (grade.toLowerCase()) {
      case "a":
        return "bg-green-500";
      case "b":
        return "bg-lime-500";
      case "c":
        return "bg-yellow-500";
      case "d":
        return "bg-orange-500";
      case "e":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getEcoScoreColor = (grade?: string) => {
    if (!grade) return "bg-gray-500";

    switch (grade.toLowerCase()) {
      case "a":
        return "bg-green-500";
      case "b":
        return "bg-lime-500";
      case "c":
        return "bg-yellow-500";
      case "d":
        return "bg-orange-500";
      case "e":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {product.image_url && (
        <div className="h-48 overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {product.brands && (
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Brands:</span> {product.brands}
          </p>
        )}

        {product.categories && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            <span className="font-medium">Categories:</span>{" "}
            {product.categories}
          </p>
        )}

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {product.nutrition_grades && (
              <div className="flex items-center">
                <span className="text-xs font-medium text-gray-600 mr-1">
                  Nutri:
                </span>
                <span
                  className={`px-2 py-1 rounded text-white text-xs font-bold ${getNutritionGradeColor(
                    product.nutrition_grades
                  )}`}
                >
                  {product.nutrition_grades.toUpperCase()}
                </span>
              </div>
            )}

            {product.ecoscore_grade && (
              <div className="flex items-center">
                <span className="text-xs font-medium text-gray-600 mr-1">
                  Eco:
                </span>
                <span
                  className={`px-2 py-1 rounded text-white text-xs font-bold ${getEcoScoreColor(
                    product.ecoscore_grade
                  )}`}
                >
                  {product.ecoscore_grade.toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>

        {product.ingredients_text && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              <span className="font-medium">Ingredients:</span>
              <span className="block mt-1 line-clamp-2">
                {product.ingredients_text.length > 100
                  ? `${product.ingredients_text.substring(0, 100)}...`
                  : product.ingredients_text}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
