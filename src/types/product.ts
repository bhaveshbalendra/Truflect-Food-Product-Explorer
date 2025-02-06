export interface Products {
  count: number;
  tags?: Product[] | null;
}
export interface Product {
  id: string;
  known: number;
  name: string;
  products: number;
  sameAs?: string[] | null;
  url: string;
}

export interface Category {
  id: string;
  known: number;
  name: string;
  products: number;
  url: string;
  sameAs?: string[]; // Optional since not all entries have this
}
