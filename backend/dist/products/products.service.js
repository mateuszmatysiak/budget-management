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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.product.create({ data });
    }
    findAll(username) {
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
    findOne(id) {
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
    async update(id, data) {
        const { price, createdAt } = await this.findOne(id);
        return await this.prisma.product.update({
            where: {
                id,
            },
            data: Object.assign(Object.assign({}, data), { createdAt: new Date(), history: {
                    create: {
                        price,
                        createdAt,
                    },
                } }),
            include: {
                history: {
                    orderBy: {
                        createdAt: "desc",
                    },
                },
            },
        });
    }
    remove(id) {
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
        }
        else
            return { categories, types };
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map