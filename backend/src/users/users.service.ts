import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        products: true,
        shopping: true,
      },
    });
  }

  findOne(username: string) {
    return this.prisma.user.findUnique({ where: { username: "test" } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(username: string) {
    return this.prisma.user.delete({ where: { username: "test" } });
  }
}
