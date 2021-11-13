import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/last")
  getLastItems() {
    return this.appService.getLastItems();
  }

  @Get("/me")
  getMe(@Param("username") username: string) {
    return this.appService.getMe(username);
  }
}
