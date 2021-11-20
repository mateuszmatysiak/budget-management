import { IProduct } from "./product";
import { IShopping } from "./shopping";

export interface ILast {
  products: IProduct[];
  shopping: IShopping[];
}
