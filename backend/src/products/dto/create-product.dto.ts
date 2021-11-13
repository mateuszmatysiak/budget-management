import { Product } from ".prisma/client";

export class CreateProductDto {
  name: string;
  price: string;
  category: string;
}
