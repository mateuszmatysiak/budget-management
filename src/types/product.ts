export type ProductCategoryType = "ECONOMIC" | "ELECTRONIC" | "HOMEMADE";

export interface ProductData {
  id: number;
  name: string;
  price: string;
  category: ProductCategoryType;
}
