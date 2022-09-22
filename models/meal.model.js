import { Schema, model } from "mongoose";

const mealSchema = new Schema({});

const MealModel = model("Meal", userSchema);

export { MealModel };
