import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  findAll() {
    return this.prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdateProductDto) {
    return this.prisma.product.update({
      where: {
        id,
      },
      data,
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
