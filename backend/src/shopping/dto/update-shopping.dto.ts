import { PartialType } from "@nestjs/mapped-types";
import { CreateShoppingDto } from "./create-shopping.dto";

export class UpdateShoppingDto extends PartialType(CreateShoppingDto) {}
