import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma.service";
export declare class AppMiddleware implements NestMiddleware {
    private prisma;
    private appService;
    constructor(prisma: PrismaService, appService: AppService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
