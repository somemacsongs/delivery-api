import express from "express";
import * as dotenv from "dotenv";
import { dbConnect } from "./config/db.config.js";
import { orderRouter } from "./routes/order.routes.js"

dotenv.config();
dbConnect();
const app = express();

app.use(express.json());

app.use("/order", orderRouter)

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up at port ${process.env.PORT}`);
});
