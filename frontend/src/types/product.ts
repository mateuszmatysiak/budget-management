import { IUser } from "./user";

export type ProductCategoryType = "ECONOMIC" | "ELECTRONIC" | "HOMEMADE";
export type ProductType = "KG" | "PIECE";

export interface IProductHistory {
  id?: number;
  price: string;
  productId: string;
  createdAt?: string;
}
export interface IProduct {
  id?: number;
  name: string;
  price: string;
  category: ProductCategoryType;
  type: ProductType;
  createdAt?: string;
  updatedAt?: string;
  User?: IUser;
  userUsername?: number;
  history?: IProductHistory[];
}

export interface IProductCategoriesAndTypes {
  categories: {
    name: string;
    label: string;
  }[];
  types: {
    name: string;
    label: string;
  }[];
}
