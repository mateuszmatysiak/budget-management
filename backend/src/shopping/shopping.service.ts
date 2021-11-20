import { Shopping } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateShoppingDto } from "./dto/create-shopping.dto";
import { UpdateShoppingDto } from "./dto/update-shopping.dto";

@Injectable()
export class ShoppingService {
  constructor(private prisma: PrismaService) {}

  create(createdShopping: CreateShoppingDto) {
    return this.prisma.shopping.create({
      data: {
        name: createdShopping.name,
        products: {
          connect: createdShopping.products,
        },
        User: {
          connect: createdShopping.User,
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
    });
  }

  update(id: number, data: UpdateShoppingDto) {
    return this.prisma.shopping.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        products: {
          set: data.products,
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
