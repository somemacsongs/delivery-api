import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { dbConnect } from "./config/db.config.js";
dbConnect();
import { mealRouter } from "./routes/meal.routes.js";

const app = express();

app.use(express.json());

app.use("/", mealRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server running ok at port ${process.env.PORT}`);
});

