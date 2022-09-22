import { Schema, model } from "mongoose";

const restaurantSchema = new Schema({});

const RestaurantModel = model("Restaurant", userSchema);

export { RestaurantModel };
