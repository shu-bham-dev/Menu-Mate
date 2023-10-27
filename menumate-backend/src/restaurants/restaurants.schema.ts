import * as mongoose from 'mongoose';

export const RestaurantSchema = new mongoose.Schema({
  name: String,
  contact: String,
  email: String,
  address: String,
  city: String,
  state: String,
  logoURL: String,
});
