import { RestaurantSchema } from 'src/restaurants/restaurants.schema';
import mongoose, * as Mongoose from 'mongoose';

export const UserSchema = new Mongoose.Schema(
  {
    name: String,
    phone: String,
    username: String,
    password: String,
    email: String,
    role: String,
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  },
  { timestamps: true },
);
