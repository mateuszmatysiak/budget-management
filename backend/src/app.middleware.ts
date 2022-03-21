import {
  Injectable,
  NestMiddleware,
} from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma.service";

@Injectable()
export class AppMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService, private appService: AppService) {}

  async use(req: Request, res: Response, next: NextFunction) {
  
    res.locals.username = "test@gmail.com";

    next();
  }
}
