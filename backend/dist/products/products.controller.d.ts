import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAllCategoriesAndTypes(): Promise<{
        categories: import(".prisma/client").ProductCategory[];
        types: import(".prisma/client").ProductType[];
    }>;
    createCategoriesAndTypes(): Promise<void>;
    create(createdProduct: CreateProductDto, res: any): Promise<any>;
    findAll(res: any): Promise<any>;
    findOne(id: string): Promise<import(".prisma/client").Product & {
        history: import(".prisma/client").ProductHistory[];
    }>;
    update(id: string, updatedProduct: UpdateProductDto): Promise<import(".prisma/client").Product & {
        history: import(".prisma/client").ProductHistory[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
}
