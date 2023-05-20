import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        products: import(".prisma/client").Product[];
        shopping: import(".prisma/client").Shopping[];
    })[]>;
}
