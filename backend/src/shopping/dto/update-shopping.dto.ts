import { ShoppingProduct } from "@prisma/client";

export class UpdateShoppingDto {
  name: string;
  products: ShoppingProduct[];
}
