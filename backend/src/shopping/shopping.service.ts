import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateShoppingDto } from "./dto/create-shopping.dto";
import { UpdateShoppingDto } from "./dto/update-shopping.dto";

@Injectable()
export class ShoppingService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateShoppingDto) {
    return this.prisma.shopping.create({
      data: {
        name: data.name,
        products: {
          create: data.products,
        },
        User: {
          connect: data.User,
        },
      },
      include: {
        products: true,
      },
    });
  }

  findAll(username: string) {
    return this.prisma.shopping.findMany({
      where: {
        User: {
          username,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        products: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.shopping.findUnique({
      where: {
        id,
      },
      include: {
        products: true,
      },
    });
  }

  async update(id: number, data: UpdateShoppingDto) {
    const existingProducts = data.products.filter((item) => !item.productId);
    const newProducts = data.products.filter((item) => item.productId);

    return await this.prisma.shopping.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        products: {
          set: existingProducts,
          create: newProducts,
        },
      },
      include: {
        products: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.shopping.delete({
      where: {
        id,
      },
      include: {
        products: true,
      },
    });
  }
}
