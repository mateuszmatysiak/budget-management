import {
  CACHE_MANAGER,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Response,
  UseGuards,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthorizationGuard } from "./authorization/authorization.guard";
import { Cache } from "cache-manager";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/last")
  async getLastItems(@Response() res) {
    const last = await this.appService.getLastItems(res.locals.username);
    return res.status(HttpStatus.OK).json(last);
  }

  // @UseGuards(AuthorizationGuard)
  @Get("/statistics")
  async getStatistics(@Response() res) {
    const statistics = await this.appService.getStatistics(res.locals.username);
    return res.status(HttpStatus.OK).json(statistics);
  }

  @Get("in-memory")
  async getUserFromMemoryCache() {
    return await this.appService.getUserFromMemoryCache;
  }

  @Post("in-memory")
  async addUserInMemoryCache(@Param("username") username: string) {
    return await this.appService.setUserInMemoryCache(username);
  }
}
