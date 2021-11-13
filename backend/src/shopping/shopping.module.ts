import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { ShoppingController } from "./shopping.controller";
import { ShoppingService } from "./shopping.service";

@Module({
  controllers: [ShoppingController],
  providers: [ShoppingService, PrismaService],
})
export class ShoppingModule {}
