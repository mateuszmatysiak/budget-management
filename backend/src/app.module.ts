import { CacheModule, MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppMiddleware } from "./app.middleware";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma.service";
import { ProductsModule } from "./products/products.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ProductsModule,
    ShoppingModule,
    UsersModule,
    CacheModule.register({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes("*");
  }
}
