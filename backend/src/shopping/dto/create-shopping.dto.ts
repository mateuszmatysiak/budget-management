import { ShoppingProduct } from ".prisma/client";

export class CreateShoppingDto {
  name: string;
  products: ShoppingProduct[];
  User?: {
    username: string;
  };
}
