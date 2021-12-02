import { IProduct, ProductCategoryType, ProductType } from "./product";
import { IUser } from "./user";

export interface IShopping {
  id?: number;
  name: string;
  products: (IShoppingProduct | IProduct)[];
  createdAt?: string;
  updatedAt?: string;
  User?: IUser;
  userUsername?: number;
}

export interface IShoppingProduct {
  id?: number;
  name: string;
  price: string;
  category: ProductCategoryType;
  type: ProductType;
  productId: number;
  shoppingId: number;
  createdAt?: string;
  updatedAt?: string;
}
