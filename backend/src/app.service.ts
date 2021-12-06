import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { PrismaService } from "./prisma.service";
import {
  getAllWeekDateDays,
  getCurrentDate,
  getCurrentMonth,
} from "./utils/date";
import {
  formatReportData,
  sumProductsByCategory,
  sumProductsOfShopping,
} from "./utils/helpers";
import { findItemsByFromToDate, findLastFiveItems } from "./utils/selectors";

@Injectable()
export class AppService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async getUserFromMemoryCache() {
    return this.cacheManager.get("username");
  }

  async setUserInMemoryCache(username: string) {
    return this.cacheManager.set("username", username, { ttl: 0 });
  }

  async getLastFiveItems(username: string) {
    const products = await this.prisma.product.findMany(
      findLastFiveItems(username)
    );
    const shopping = await this.prisma.shopping.findMany(
      findLastFiveItems(username)
    );

    return { products, shopping };
  }

  async getAllWeekdays(username: string) {
    const weekdays = getAllWeekDateDays();

    const values = await Promise.all(
      weekdays.map(async (day) => {
        const value = await this.prisma.shopping.findMany(
          findItemsByFromToDate({ from: day, username })
        );

        return sumProductsOfShopping(value);
      })
    );

    return values;
  }

  async getTodayWeekMonth(username: string) {
    const [startMonth, endMonth] = getCurrentMonth();
    const current = getCurrentDate();
    const weekdays = getAllWeekDateDays();

    const today = await this.prisma.shopping.findMany(
      findItemsByFromToDate({ from: current, username })
    );
    const week = await this.prisma.shopping.findMany(
      findItemsByFromToDate({ from: weekdays[0], to: weekdays[6], username })
    );
    const month = await this.prisma.shopping.findMany(
      findItemsByFromToDate({ from: startMonth, to: endMonth, username })
    );

    return [today, week, month].map(sumProductsOfShopping);
  }

  async getCategories(username: string) {
    const shopping = await this.prisma.shopping.findMany({
      where: { User: { username } },
      include: { products: true },
    });

    const categories = ["ECONOMIC", "ELECTRONIC", "HOMEMADE"];

    return categories.map((category) =>
      sumProductsByCategory(shopping, category)
    );
  }

  async getProductsAndShopping(username: string) {
    const shopping = await this.prisma.shopping.findMany({
      where: { User: { username } },
      include: { products: true },
    });
    const products = await this.prisma.product.findMany({
      where: { User: { username } },
    });

    return [products.length, shopping.length];
  }

  async getReport(username: string) {
    const shopping = await this.prisma.shopping.findMany({
      where: { User: { username } },
      include: { products: true },
    });

    return formatReportData(shopping);
  }

  async getStatistics(username: string) {
    const allWeekdays = await this.getAllWeekdays(username);
    const todayWeekMonth = await this.getTodayWeekMonth(username);
    const categories = await this.getCategories(username);
    const productsAndShopping = await this.getProductsAndShopping(username);

    return {
      todayWeekMonth,
      allWeekdays,
      categories,
      productsAndShopping,
    };
  }
}
