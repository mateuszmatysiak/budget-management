"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ShoppingService = class ShoppingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
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
    findAll(username) {
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
    findOne(id) {
        return this.prisma.shopping.findUnique({
            where: {
                id,
            },
            include: {
                products: true,
            },
        });
    }
    async update(id, data) {
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
    remove(id) {
        return this.prisma.shopping.delete({
            where: {
                id,
            },
            include: {
                products: true,
            },
        });
    }
};
ShoppingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShoppingService);
exports.ShoppingService = ShoppingService;
//# sourceMappingURL=shopping.service.js.map