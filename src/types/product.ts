export type ProductCategoryType = "ECONOMIC" | "ELECTRONIC" | "HOMEMADE";

export interface ProductData {
  id: string;
  name: string;
  cost: string;
  category: ProductCategoryType;
}
