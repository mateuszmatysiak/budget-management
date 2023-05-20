import { CreateShoppingDto } from "./dto/create-shopping.dto";
import { UpdateShoppingDto } from "./dto/update-shopping.dto";
import { ShoppingService } from "./shopping.service";
export declare class ShoppingController {
    private readonly shoppingService;
    constructor(shoppingService: ShoppingService);
    create(createdShopping: CreateShoppingDto, res: any): Promise<any>;
    findAll(res: any): Promise<any>;
    findOne(id: string): Promise<import(".prisma/client").Shopping & {
        products: import(".prisma/client").ShoppingProduct[];
    }>;
    update(id: string, updateShoppingDto: UpdateShoppingDto): Promise<import(".prisma/client").Shopping & {
        products: import(".prisma/client").ShoppingProduct[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ShoppingClient<import(".prisma/client").Shopping & {
        products: import(".prisma/client").ShoppingProduct[];
    }>;
}
