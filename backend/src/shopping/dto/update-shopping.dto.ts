import { Product } from "@prisma/client";

export class UpdateShoppingDto {
  name: string;
  products: Product[];
}
