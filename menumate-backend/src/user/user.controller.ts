import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll() {
    return {};
  }

  @Post()
  createUser(@Body() user) {
    return {};
  }

  @Get(':id')
  findUsersByRestaurantId(@Param('id') id: string) {
    return {};
  }
}
