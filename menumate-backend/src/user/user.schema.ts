import { RestaurantSchema } from 'src/restaurants/restaurants.schema';
import * as Mongoose from 'mongoose';

export const UserSchema = new Mongoose.Schema(
  {
    name: String,
    phone: String,
    username: String,
    password: String,
    email: String,
    role: String,
    retaurantID: {
      type: RestaurantSchema,
      required: true,
    },
  },
  { timestamps: true },
);
