"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_middleware_1 = require("./app.middleware");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma.service");
const products_module_1 = require("./products/products.module");
const shopping_module_1 = require("./shopping/shopping.module");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(app_middleware_1.AppMiddleware).forRoutes("*");
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            products_module_1.ProductsModule,
            shopping_module_1.ShoppingModule,
            users_module_1.UsersModule,
            common_1.CacheModule.register({ isGlobal: true }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map