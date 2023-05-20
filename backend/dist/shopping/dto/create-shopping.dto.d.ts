import { ShoppingProduct } from "@prisma/client";
export declare class CreateShoppingDto {
    name: string;
    products: ShoppingProduct[];
    User?: {
        username: string;
    };
}
