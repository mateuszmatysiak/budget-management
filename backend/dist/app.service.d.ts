import { Cache } from "cache-manager";
import { PrismaService } from "./prisma.service";
export declare class AppService {
    private prisma;
    private cacheManager;
    constructor(prisma: PrismaService, cacheManager: Cache);
    getUserFromMemoryCache(): Promise<unknown>;
    setUserInMemoryCache(username: string): Promise<string>;
    getLastFiveItems(username: string): Promise<{
        products: import(".prisma/client").Product[];
        shopping: import(".prisma/client").Shopping[];
    }>;
    getAllWeekdays(username: string): Promise<number[]>;
    getTodayWeekMonth(username: string): Promise<number[]>;
    getCategories(username: string): Promise<number[]>;
    getProductsAndShopping(username: string): Promise<number[]>;
    getReport(username: string): Promise<{
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
    }[]>;
    getStatistics(username: string): Promise<{
        todayWeekMonth: number[];
        allWeekdays: number[];
        categories: number[];
        productsAndShopping: number[];
    }>;
}
