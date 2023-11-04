import * as mongoose from 'mongoose';
import { MenuListDto } from './dto/menu.dto';

export const MenuListSchema = new mongoose.Schema({
  category: String,
  name: String,
  description: String,
  isVeg: Boolean,
  price: Number,
  image: String,
});

export const MenuSchema = new mongoose.Schema(
  {
    menuList: [MenuListSchema],
    restaurantId: String,
  },
  { timestamps: true },
);
