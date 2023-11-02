import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './restaurants.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  create(@Body() createRestaurant: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurant);
  }

  @Get()
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<any> {
    const restaurant = this.restaurantsService.findById(id);
    return restaurant;
  }

  @Put(':id')
  update(@Param('id') id: string, payload: any) {
    const updatedRestaurant = this.restaurantsService.update(id, payload);
    return updatedRestaurant;
  }
}
