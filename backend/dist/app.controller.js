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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getLastItems(res) {
        const last = await this.appService.getLastFiveItems(res.locals.username);
        return res.status(common_1.HttpStatus.OK).json(last);
    }
    async getStatistics(res) {
        const statistics = await this.appService.getStatistics(res.locals.username);
        return res.status(common_1.HttpStatus.OK).json(statistics);
    }
    async getReport(res) {
        const report = await this.appService.getReport(res.locals.username);
        return res.status(common_1.HttpStatus.OK).json(report);
    }
    async getUserFromMemoryCache() {
        return await this.appService.getUserFromMemoryCache;
    }
    async addUserInMemoryCache(username) {
        return await this.appService.setUserInMemoryCache(username);
    }
};
__decorate([
    (0, common_1.Get)("last"),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getLastItems", null);
__decorate([
    (0, common_1.Get)("statistics"),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getStatistics", null);
__decorate([
    (0, common_1.Get)("report"),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getReport", null);
__decorate([
    (0, common_1.Get)("cache"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUserFromMemoryCache", null);
__decorate([
    (0, common_1.Post)("cache"),
    __param(0, (0, common_1.Param)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addUserInMemoryCache", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map