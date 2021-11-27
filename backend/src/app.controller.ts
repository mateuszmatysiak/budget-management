import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Response,
} from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("last")
  async getLastItems(@Response() res) {
    const last = await this.appService.getLastFiveItems(res.locals.username);
    return res.status(HttpStatus.OK).json(last);
  }

  @Get("statistics")
  async getStatistics(@Response() res) {
    const statistics = await this.appService.getStatistics(res.locals.username);
    return res.status(HttpStatus.OK).json(statistics);
  }

  @Get("cache")
  async getUserFromMemoryCache() {
    return await this.appService.getUserFromMemoryCache;
  }

  @Post("cache")
  async addUserInMemoryCache(@Param("username") username: string) {
    return await this.appService.setUserInMemoryCache(username);
  }
}
