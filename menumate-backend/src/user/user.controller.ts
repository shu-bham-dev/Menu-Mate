import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() user) {
    console.log(user, '<<<<<');
    return this.userService.create(user);
  }

  @Get(':id')
  findUsersByRestaurantId(@Param('id') id: string) {
    return {};
  }
}
