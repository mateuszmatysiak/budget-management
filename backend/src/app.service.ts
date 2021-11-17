import { Injectable } from "@nestjs/common";
import { lastDayOfMonth, startOfMonth } from "date-fns";
import { PrismaService } from "./prisma.service";
import { CreateShoppingDto } from "./shopping/dto/create-shopping.dto";

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getLastItems() {
    const lastProductsPromise = this.prisma.product.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });
    const lastShoppingItemsPromise = this.prisma.shopping.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });

    return await Promise.all([lastProductsPromise, lastShoppingItemsPromise]);
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

  getFromTo(from: string, to?: string) {
    return {
      where: {
        createdAt: {
          gt: `${from}T00:00:00.001Z`,
          lt: `${to ?? from}T23:59:59.591Z`,
        },
      },
      include: {
        products: true,
      },
    };
  }

  getByCategory(from: string, to?: string) {
    return {
      where: {
        createdAt: {
          gt: `${from}T00:00:00.001Z`,
          lt: `${to ?? from}T23:59:59.591Z`,
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

  async getStatistics() {
    const date = new Date();

    const allShopping = await this.prisma.shopping.findMany({
      include: {
        products: true,
      },
    });
    const allProducts = await this.prisma.product.findMany({});

    const current = this.formatDate(date);
    const [mo, tu, we, th, fr, sa, su] = this.getAllWeekDays(date);
    const [start, end] = this.getCurrentMonth(date);

    const today = await this.prisma.shopping.findMany(this.getFromTo(current));
    const week = await this.prisma.shopping.findMany(this.getFromTo(mo, su));
    const month = await this.prisma.shopping.findMany(
      this.getFromTo(start, end)
    );

    const monday = await this.prisma.shopping.findMany(this.getFromTo(mo));
    const tuesday = await this.prisma.shopping.findMany(this.getFromTo(tu));
    const wednesday = await this.prisma.shopping.findMany(this.getFromTo(we));
    const thuesday = await this.prisma.shopping.findMany(this.getFromTo(th));
    const friday = await this.prisma.shopping.findMany(this.getFromTo(fr));
    const saturday = await this.prisma.shopping.findMany(this.getFromTo(sa));
    const sunday = await this.prisma.shopping.findMany(this.getFromTo(su));

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

  getMe(username: string) {
    if (username) {
      return this.prisma.user.findUnique({
        where: {
          username,
        },
      });
    }
  }
}
