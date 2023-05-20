import { PrismaService } from "../prisma.service";
import { CreateShoppingDto } from "./dto/create-shopping.dto";
import { UpdateShoppingDto } from "./dto/update-shopping.dto";
export declare class ShoppingService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateShoppingDto): import(".prisma/client").Prisma.Prisma__ShoppingClient<import(".prisma/client").Shopping & {
        products: import(".prisma/client").ShoppingProduct[];
    }>;
    findAll(username: string): import(".prisma/client").PrismaPromise<(import(".prisma/client").Shopping & {
        products: import(".prisma/client").ShoppingProduct[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ShoppingClient<import(".prisma/client").Shopping & {
        products: import(".prisma/client").ShoppingProduct[];
    }>;
    update(id: number, data: UpdateShoppingDto): Promise<import(".prisma/client").Shopping & {
        products: import(".prisma/client").ShoppingProduct[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ShoppingClient<import(".prisma/client").Shopping & {
        products: import(".prisma/client").ShoppingProduct[];
    }>;
}
