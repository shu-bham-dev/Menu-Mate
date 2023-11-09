import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel) {}

  async findAll() {
    const user = await this.userModel.find();
    return user;
  }

  async create(userData: CreateUserDto) {
    try {
      console.log('Inside service try');
      const user = await new this.userModel(userData);
      if (!user) {
        throw new Error('Unable to create new user');
      }
      user.save();
      return user;
    } catch (error) {
      console.log('Inside service err');
      return error.message;
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
