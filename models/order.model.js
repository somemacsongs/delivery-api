import { Schema, model } from "mongoose";

const orderSchema = new Schema({});

const OrderModel = model("Order", userSchema);

export { OrderModel };
