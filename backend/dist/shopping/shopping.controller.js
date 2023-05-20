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
exports.ShoppingController = void 0;
const common_1 = require("@nestjs/common");
const create_shopping_dto_1 = require("./dto/create-shopping.dto");
const update_shopping_dto_1 = require("./dto/update-shopping.dto");
const shopping_service_1 = require("./shopping.service");
let ShoppingController = class ShoppingController {
    constructor(shoppingService) {
        this.shoppingService = shoppingService;
    }
    async create(createdShopping, res) {
        const shopping = await this.shoppingService.create(Object.assign(Object.assign({}, createdShopping), { User: {
                username: res.locals.username,
            } }));
        return res.status(common_1.HttpStatus.OK).json(shopping);
    }
    async findAll(res) {
        const shopping = await this.shoppingService.findAll(res.locals.username);
        return res.status(common_1.HttpStatus.OK).json(shopping);
    }
    async findOne(id) {
        const shoppingItem = await this.shoppingService.findOne(+id);
        if (!shoppingItem)
            throw new common_1.NotFoundException(`Nie znaleziono listy zakupowej o id: ${id}`);
        return shoppingItem;
    }
    update(id, updateShoppingDto) {
        return this.shoppingService.update(+id, updateShoppingDto);
    }
    remove(id) {
        return this.shoppingService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shopping_dto_1.CreateShoppingDto, Object]),
    __metadata("design:returntype", Promise)
], ShoppingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShoppingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_shopping_dto_1.UpdateShoppingDto]),
    __metadata("design:returntype", void 0)
], ShoppingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingController.prototype, "remove", null);
ShoppingController = __decorate([
    (0, common_1.Controller)("shopping"),
    __metadata("design:paramtypes", [shopping_service_1.ShoppingService])
], ShoppingController);
exports.ShoppingController = ShoppingController;
//# sourceMappingURL=shopping.controller.js.map