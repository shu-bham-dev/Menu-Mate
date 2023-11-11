import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/user.dto';
import {
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel) {}

  async findAll() {
    const user = await this.userModel.find();
    return user;
  }

  async create(userData: CreateUserDto) {
    try {
      const user = await new this.userModel(userData);
      if (!user) {
        throw new BadRequestException('Unable to create new user');
      }
      user.save();
      return user;
    } catch (error) {
      throw new ForbiddenException('Unable to create new user');
    }
  }

  async getUserById(id: string) {
    const user = await this.userModel.findById(id);
    if (user) {
      return user;
    }
    throw new NotFoundException('User not found');
  }
}
