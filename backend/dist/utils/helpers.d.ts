import { CreateShoppingDto } from "src/shopping/dto/create-shopping.dto";
declare function sumProductsOfShopping(arr: CreateShoppingDto[]): number;
declare function sumProductsByCategory(arr: CreateShoppingDto[], category: string): number;
declare function formatReportData(shopping: CreateShoppingDto[]): {
    shoppingName: string;
    id: number;
    name: string;
    price: string;
    category: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    shoppingId: number;
    productId: number;
}[];
export { sumProductsOfShopping, sumProductsByCategory, formatReportData };
