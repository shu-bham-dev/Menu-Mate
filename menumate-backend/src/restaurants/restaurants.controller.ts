import { Body, Controller, Post } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './restaurants.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  create(@Body() createRestaurant: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurant);
  }
}
