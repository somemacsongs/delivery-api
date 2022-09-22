import { Schema, model } from "mongoose";

const consumerSchema = new Schema({});

const ConsumerModel = model("Consumer", userSchema);

export { ConsumerModel };
