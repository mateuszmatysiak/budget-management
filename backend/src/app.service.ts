import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { lastDayOfMonth, startOfMonth } from "date-fns";
import { PrismaService } from "./prisma.service";
import { CreateShoppingDto } from "./shopping/dto/create-shopping.dto";
import { Cache } from "cache-manager";

@Injectable()
export class AppService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async getLastItems(username: string) {
    const products = await this.prisma.product.findMany({
      take: 5,
      where: {
        User: {
          username,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const shopping = await this.prisma.shopping.findMany({
      take: 5,
      where: {
        User: {
          username,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { products, shopping };
  }

  sumProductsOfShopping(arr: CreateShoppingDto[]) {
    return arr
      .flatMap((shoppingItem) => shoppingItem.products)
      .reduce((sum, product) => sum + parseFloat(product.price), 0);
  }

  sumProductsByCategory(arr: CreateShoppingDto[], category: string) {
    const products = arr.flatMap((shoppingItem) => shoppingItem.products);
    return products
      .filter((product) => product.category === category)
      .reduce((sum, product) => sum + parseFloat(product.price), 0);
  }

  formatDate(date: Date) {
    return date.toLocaleDateString().split(".").reverse().join("-");
  }

  getFromTo({
    from,
    to,
    username,
  }: {
    from: string;
    to?: string;
    username: string;
  }) {
    return {
      where: {
        createdAt: {
          gt: `${from}T00:00:00.001Z`,
          lt: `${to ?? from}T23:59:59.591Z`,
        },
        User: {
          username,
        },
      },
      include: {
        products: true,
      },
    };
  }

  getAllWeekDays(date: Date) {
    const week: string[] = new Array();

    date.setDate(date.getDate() - date.getDay() + 1);
    for (var i = 0; i < 7; i++) {
      week.push(this.formatDate(new Date(date)));
      date.setDate(date.getDate() + 1);
    }
    return week;
  }

  getCurrentMonth(date: Date) {
    const [year, month, day] = this.formatDate(startOfMonth(date)).split("-");
    const end = this.formatDate(lastDayOfMonth(date));

    return [`${year}-${month}-0${day}`, end];
  }

  async getStatistics(username: string) {
    const date = new Date();

    const allShopping = await this.prisma.shopping.findMany({
      where: {
        User: {
          username,
        },
      },
      include: {
        products: true,
      },
    });
    const allProducts = await this.prisma.product.findMany({
      where: {
        User: {
          username,
        },
      },
    });

    const current = this.formatDate(date);
    const [mo, tu, we, th, fr, sa, su] = this.getAllWeekDays(date);
    const [start, end] = this.getCurrentMonth(date);

    const today = await this.prisma.shopping.findMany(
      this.getFromTo({ from: current, username })
    );
    const week = await this.prisma.shopping.findMany(
      this.getFromTo({ from: mo, to: su, username })
    );
    const month = await this.prisma.shopping.findMany(
      this.getFromTo({ from: start, to: end, username })
    );

    const monday = await this.prisma.shopping.findMany(
      this.getFromTo({ from: mo, username })
    );
    const tuesday = await this.prisma.shopping.findMany(
      this.getFromTo({ from: tu, username })
    );
    const wednesday = await this.prisma.shopping.findMany(
      this.getFromTo({ from: we, username })
    );
    const thuesday = await this.prisma.shopping.findMany(
      this.getFromTo({ from: th, username })
    );
    const friday = await this.prisma.shopping.findMany(
      this.getFromTo({ from: fr, username })
    );
    const saturday = await this.prisma.shopping.findMany(
      this.getFromTo({ from: sa, username })
    );
    const sunday = await this.prisma.shopping.findMany(
      this.getFromTo({ from: su, username })
    );

    return {
      todayWeekMonth: [
        this.sumProductsOfShopping(today),
        this.sumProductsOfShopping(week),
        this.sumProductsOfShopping(month),
      ],
      allWeekdays: [
        this.sumProductsOfShopping(monday),
        this.sumProductsOfShopping(tuesday),
        this.sumProductsOfShopping(wednesday),
        this.sumProductsOfShopping(thuesday),
        this.sumProductsOfShopping(friday),
        this.sumProductsOfShopping(saturday),
        this.sumProductsOfShopping(sunday),
      ],
      categories: [
        this.sumProductsByCategory(allShopping, "HOMEMADE"),
        this.sumProductsByCategory(allShopping, "ELECTRONIC"),
        this.sumProductsByCategory(allShopping, "ECONOMIC"),
      ],
      productsAndShopping: [allProducts.length, allShopping.length],
    };
  }

  async getUserFromMemoryCache() {
    return this.cacheManager.get("username");
  }

  async setUserInMemoryCache(username: string) {
    return this.cacheManager.set("username", username, { ttl: 0 });
  }
}
