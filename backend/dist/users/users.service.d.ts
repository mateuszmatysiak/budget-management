import { PrismaService } from "../prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        products: import(".prisma/client").Product[];
        shopping: import(".prisma/client").Shopping[];
    })[]>;
}
