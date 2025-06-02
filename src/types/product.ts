export interface Products {
  count: number;
  tags?: Product[] | null;
}

export interface Product {
  id: string;
  known?: number;
  name: string;
  products?: number;
  sameAs?: string[] | null;
  url?: string;
  brands?: string;
  categories?: string;
  image_url?: string;
  nutrition_grades?: string;
  ecoscore_grade?: string;
  ingredients_text?: string;
}

export interface Category {
  id: string;
  known: number;
  name: string;
  products: number;
  url: string;
  sameAs?: string[]; // Optional since not all entries have this
}

export interface OpenFoodFactsProduct {
  id?: string;
  code?: string;
  product_name?: string;
  product_name_en?: string;
  brands?: string;
  categories?: string;
  image_front_url?: string;
  image_url?: string;
  nutrition_grades?: string;
  ecoscore_grade?: string;
  ingredients_text?: string;
}

export interface SearchResponse {
  products: OpenFoodFactsProduct[];
}

export interface CategoryResponse {
  products: OpenFoodFactsProduct[];
}
