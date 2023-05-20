export declare class CreateProductDto {
    name: string;
    price: string;
    category: string;
    type: string;
    history: {
        price: string;
        createdAt: string;
    }[];
    userUsername?: string;
}
