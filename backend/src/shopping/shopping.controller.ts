import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateShoppingDto } from "./dto/create-shopping.dto";
import { UpdateShoppingDto } from "./dto/update-shopping.dto";
import { ShoppingService } from "./shopping.service";

@Controller("shopping")
export class ShoppingController {
  constructor(private readonly shoppingService: ShoppingService) {}

  @Post()
  create(@Body() shoppingCreateInput: CreateShoppingDto) {
    return this.shoppingService.create(shoppingCreateInput);
  }

  @Get()
  findAll() {
    return this.shoppingService.findAll();
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
