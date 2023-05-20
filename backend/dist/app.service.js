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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const date_1 = require("./utils/date");
const helpers_1 = require("./utils/helpers");
const selectors_1 = require("./utils/selectors");
let AppService = class AppService {
    constructor(prisma, cacheManager) {
        this.prisma = prisma;
        this.cacheManager = cacheManager;
    }
    async getUserFromMemoryCache() {
        return this.cacheManager.get("username");
    }
    async setUserInMemoryCache(username) {
        return this.cacheManager.set("username", username, { ttl: 0 });
    }
    async getLastFiveItems(username) {
        const products = await this.prisma.product.findMany((0, selectors_1.findLastFiveItems)(username));
        const shopping = await this.prisma.shopping.findMany((0, selectors_1.findLastFiveItems)(username));
        return { products, shopping };
    }
    async getAllWeekdays(username) {
        const weekdays = (0, date_1.getAllWeekDateDays)();
        const values = await Promise.all(weekdays.map(async (day) => {
            const value = await this.prisma.shopping.findMany((0, selectors_1.findItemsByFromToDate)({ from: day, username }));
            return (0, helpers_1.sumProductsOfShopping)(value);
        }));
        return values;
    }
    async getTodayWeekMonth(username) {
        const [startMonth, endMonth] = (0, date_1.getCurrentMonth)();
        const current = (0, date_1.getCurrentDate)();
        const weekdays = (0, date_1.getAllWeekDateDays)();
        const today = await this.prisma.shopping.findMany((0, selectors_1.findItemsByFromToDate)({ from: current, username }));
        const week = await this.prisma.shopping.findMany((0, selectors_1.findItemsByFromToDate)({ from: weekdays[0], to: weekdays[6], username }));
        const month = await this.prisma.shopping.findMany((0, selectors_1.findItemsByFromToDate)({ from: startMonth, to: endMonth, username }));
        return [today, week, month].map(helpers_1.sumProductsOfShopping);
    }
    async getCategories(username) {
        const shopping = await this.prisma.shopping.findMany({
            where: { User: { username } },
            include: { products: true },
        });
        const categories = ["ECONOMIC", "ELECTRONIC", "HOMEMADE"];
        return categories.map((category) => (0, helpers_1.sumProductsByCategory)(shopping, category));
    }
    async getProductsAndShopping(username) {
        const shopping = await this.prisma.shopping.findMany({
            where: { User: { username } },
            include: { products: true },
        });
        const products = await this.prisma.product.findMany({
            where: { User: { username } },
        });
        return [products.length, shopping.length];
    }
    async getReport(username) {
        const shopping = await this.prisma.shopping.findMany({
            where: { User: { username } },
            include: { products: true },
        });
        return (0, helpers_1.formatReportData)(shopping);
    }
    async getStatistics(username) {
        const allWeekdays = await this.getAllWeekdays(username);
        const todayWeekMonth = await this.getTodayWeekMonth(username);
        const categories = await this.getCategories(username);
        const productsAndShopping = await this.getProductsAndShopping(username);
        return {
            todayWeekMonth,
            allWeekdays,
            categories,
            productsAndShopping,
        };
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map