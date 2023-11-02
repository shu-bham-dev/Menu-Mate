import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
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

  async findAll() {
    const all = this.restaurantModel.find();
    return all;
  }

  async findById(id: string) {
    const restaurant = await this.restaurantModel.findById(id);
    if (!restaurant) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }
    return restaurant;
  }

  async update(id: string, payload: any) {
    try {
      const updatedRestaurant = await this.restaurantModel
        .findByIdAndUpdate(id, payload, { new: true })
        .exec();

      return updatedRestaurant;
    } catch (error) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }
  }
}
