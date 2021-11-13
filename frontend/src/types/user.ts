import { IProduct } from "./product";
import { IShopping } from "./shopping";

export interface IUser {
  id: number;
  username: string;
  shopping: IShopping[];
  products: IProduct[];
}
