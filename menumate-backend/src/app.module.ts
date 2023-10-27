import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsController } from './restaurants/restaurants.controller';
import { RestaurantsService } from './restaurants/restaurants.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantSchema } from './restaurants/restaurants.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://shubham:shubham@menumate.hvivgil.mongodb.net/menumate?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: 'Restaurant', schema: RestaurantSchema },
    ]),
  ],
  controllers: [AppController, RestaurantsController],
  providers: [AppService, RestaurantsService],
})
export class AppModule {}
