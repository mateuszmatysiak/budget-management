"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const shopping_controller_1 = require("./shopping.controller");
const shopping_service_1 = require("./shopping.service");
let ShoppingModule = class ShoppingModule {
};
ShoppingModule = __decorate([
    (0, common_1.Module)({
        controllers: [shopping_controller_1.ShoppingController],
        providers: [shopping_service_1.ShoppingService, prisma_service_1.PrismaService],
    })
], ShoppingModule);
exports.ShoppingModule = ShoppingModule;
//# sourceMappingURL=shopping.module.js.map