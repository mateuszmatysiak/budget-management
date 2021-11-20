import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  findAll(username: string) {
    return this.prisma.product.findMany({
      where: {
        userUsername: username,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        history: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        history: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
  }

  async update(id: number, data: CreateProductDto) {
    const { price, createdAt } = await this.findOne(id);

    return await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        ...data,
        createdAt: new Date(),
        history: {
          create: {
            price,
            createdAt,
          },
        },
      },
      include: {
        history: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
