import { IUser } from "./user";

export type ProductCategoryType = "ECONOMIC" | "ELECTRONIC" | "HOMEMADE";

export interface IProduct {
  id?: string;
  name: string;
  price: string;
  category: ProductCategoryType;
  createdAt?: string;
  updatedAt?: string;
  User?: IUser;
  userId?: number;
}
