import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from "@nestjs/common";
import fetch from "cross-fetch";
import { NextFunction, Request, Response } from "express";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma.service";

@Injectable()
export class AppMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService, private appService: AppService) {}

  async initialUser(username: string) {
    const user = await this.prisma.user.findUnique({ where: { username } });

    if (!user) return await this.prisma.user.create({ data: { username } });
    else return user;
  }

  async use(req: Request, res: Response, next: NextFunction) {
    let cachedUser: any = await this.appService.getUserFromMemoryCache();

    if (!cachedUser) {
      cachedUser = await fetch(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
        headers: {
          Authorization: req.headers.authorization,
        },
      }).then(async (res) => {
        if (res.status === 401) {
          throw new UnauthorizedException();
        }

        const data = await res.json();
        if (res.ok) {
          await this.appService.setUserInMemoryCache(data.email);
          return data;
        } else {
          return Promise.reject(data);
        }
      });
    }

    const user = await this.initialUser(
      typeof cachedUser === "string" ? cachedUser : cachedUser.email
    );

    res.locals.username = await user.username;

    next();
  }
}
