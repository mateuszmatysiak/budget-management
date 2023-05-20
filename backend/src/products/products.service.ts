import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
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

  async createCategoriesAndTypes() {
    await this.prisma.productCategory.createMany({
      data: [
        { name: "ECONOMIC", label: "Gospodarcze" },
        { name: "ELECTRONIC", label: "Elektroniczne" },
        { name: "HOMEMADE", label: "Domowe" },
      ],
    });

    await this.prisma.productType.createMany({
      data: [
        { name: "KG", label: "Kg" },
        { name: "PIECE", label: "Sztuka" },
      ],
    });
  }

  getCategories() {
    return this.prisma.productCategory.findMany();
  }
  getTypes() {
    return this.prisma.productType.findMany();
  }

  async findAllCategoryAndTypes() {
    const categories = await this.getCategories();
    const types = await this.getTypes();

    if (!categories.length && !types.length) {
      await this.createCategoriesAndTypes();
      const categories = await this.getCategories();
      const types = await this.getTypes();

      return {
        categories,
        types,
      };
    } else return { categories, types };
  }
}
