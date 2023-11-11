import mongoose from 'mongoose';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Get(':id')
  findUsersByRestaurantId(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid user ID format');
    }
    return this.userService.getUserById(id);
  }
}
