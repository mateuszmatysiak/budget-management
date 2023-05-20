import { PrismaService } from "../prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    findAll(username: string): import(".prisma/client").PrismaPromise<(import(".prisma/client").Product & {
        history: import(".prisma/client").ProductHistory[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        history: import(".prisma/client").ProductHistory[];
    }>;
    update(id: number, data: CreateProductDto): Promise<import(".prisma/client").Product & {
        history: import(".prisma/client").ProductHistory[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    createCategoriesAndTypes(): Promise<void>;
    getCategories(): import(".prisma/client").PrismaPromise<import(".prisma/client").ProductCategory[]>;
    getTypes(): import(".prisma/client").PrismaPromise<import(".prisma/client").ProductType[]>;
    findAllCategoryAndTypes(): Promise<{
        categories: import(".prisma/client").ProductCategory[];
        types: import(".prisma/client").ProductType[];
    }>;
}
