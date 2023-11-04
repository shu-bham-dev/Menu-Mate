import * as mongoose from 'mongoose';

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
    menuList: { type: [MenuListSchema], required: true },
    restaurantId: { type: String, required: true },
  },
  { timestamps: true },
);
