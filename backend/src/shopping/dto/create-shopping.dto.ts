import { Product } from ".prisma/client";

export class CreateShoppingDto {
  name: string;
  products: Product[];
  User?: {
    username: string;
  };
}
