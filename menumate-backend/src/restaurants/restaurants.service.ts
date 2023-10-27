import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RestaurantSchema } from './restaurants.schema';
import { CreateRestaurantDto } from './restaurants.dto';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel('Restaurant')
    private readonly restaurantModel,
  ) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    const createdRestaurant = new this.restaurantModel(createRestaurantDto);
    return createdRestaurant.save();
  }
}
