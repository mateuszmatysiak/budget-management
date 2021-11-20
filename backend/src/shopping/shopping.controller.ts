import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Response,
} from "@nestjs/common";
import { CreateShoppingDto } from "./dto/create-shopping.dto";
import { UpdateShoppingDto } from "./dto/update-shopping.dto";
import { ShoppingService } from "./shopping.service";

@Controller("shopping")
export class ShoppingController {
  constructor(private readonly shoppingService: ShoppingService) {}

  @Post()
  async create(@Body() createdShopping: CreateShoppingDto, @Response() res) {
    const shopping = await this.shoppingService.create({
      ...createdShopping,
      User: {
        username: res.locals.username,
      },
    });
    return res.status(HttpStatus.OK).json(shopping);
  }

  @Get()
  async findAll(@Response() res) {
    const shopping = await this.shoppingService.findAll(res.locals.username);
    return res.status(HttpStatus.OK).json(shopping);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.shoppingService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateShoppingDto: UpdateShoppingDto
  ) {
    return this.shoppingService.update(+id, updateShoppingDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.shoppingService.remove(+id);
  }
}
