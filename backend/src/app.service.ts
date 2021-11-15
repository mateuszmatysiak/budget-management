import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

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
