import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateShoppingDto } from "./dto/create-shopping.dto";
import { UpdateShoppingDto } from "./dto/update-shopping.dto";

@Injectable()
export class ShoppingService {
  constructor(private prisma: PrismaService) {}

  create(shoppingCreateInput: CreateShoppingDto) {
    return this.prisma.shopping.create({
      data: {
        name: shoppingCreateInput.name,
        products: {
          connect: shoppingCreateInput.products,
        },
      },
      include: {
        products: true,
      },
    });
  }

  findAll() {
    return this.prisma.shopping.findMany({
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
