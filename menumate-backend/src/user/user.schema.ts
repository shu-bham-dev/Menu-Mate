import { RestaurantSchema } from 'src/restaurants/restaurants.schema';

export class UserSchema {
  name: string;
  phone: string;
  username: string;
  password: string;
  email: string;
  role: string;
  //   restaurantId: {
  //     type: RestaurantSchema,
  //     required: true,
  //   };
}
