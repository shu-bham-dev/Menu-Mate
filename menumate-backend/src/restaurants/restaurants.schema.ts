import * as mongoose from 'mongoose';
import { MenuSchema } from 'src/menu/menu.schema';

export const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: String,
    email: String,
    address: String,
    city: String,
    state: String,
    logoURL: String,
    menu: {
      type: MenuSchema,
      required: true,
    },
  },
  { timestamps: true },
);
