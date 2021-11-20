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
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get("/categoriesAndTypes")
  findAllCategoriesAndTypes() {
    return this.productsService.findAllCategoryAndTypes();
  }

  @Post("/categoriesAndTypes")
  createCategoriesAndTypes() {
    return this.productsService.createCategoriesAndTypes();
  }

  @Post()
  async create(@Body() createdProduct: CreateProductDto, @Response() res) {
    const product = await this.productsService.create({
      ...createdProduct,
      userUsername: res.locals.username,
    });
    return res.status(HttpStatus.OK).json(product);
  }

  @Get()
  async findAll(@Response() res) {
    const products = await this.productsService.findAll(res.locals.username);
    return res.status(HttpStatus.OK).json(products);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatedProduct: UpdateProductDto) {
    return this.productsService.update(+id, updatedProduct);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.remove(+id);
  }
}
