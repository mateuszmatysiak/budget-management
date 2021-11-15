import { IProduct } from "./product";
import { IUser } from "./user";

export interface IShopping {
  id?: number;
  name: string;
  products: IProduct[];
  createdAt?: string;
  updatedAt?: string;
  User?: IUser;
  userId?: number;
}
