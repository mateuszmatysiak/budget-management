import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() productCreateInput: CreateProductDto) {
    return this.productsService.create(productCreateInput);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() productUpdateInput: CreateProductDto
  ) {
    return this.productsService.update(+id, productUpdateInput);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.remove(+id);
  }
}
