import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel) {}

  async findAll() {
    const user = await this.userModel.find();
    return user;
  }

  async create(userData) {
    try {
      console.log('Inside service try');
      const user = await new this.userModel(userData);
      if (!user) {
        throw new Error('Unable to create new user');
      }
      user.save();
    } catch (error) {
      console.log('Inside service errro');
      return error.message;
    }
  }
}
