import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  findOne(@Param("username") username: string) {
    return this.usersService.findOne(username);
  }

  @Patch(":username")
  update(@Param("username") id: string, @Body() updatedUser: UpdateUserDto) {
    return this.usersService.update(+id, updatedUser);
  }

  @Delete(":username")
  remove(@Param("username") username: string) {
    return this.usersService.remove(username);
  }
}
