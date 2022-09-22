import express from "express";

import * as dotenv from "dotenv";
dotenv.config();

import { dbConnect } from "./config/db.config.js";
dbConnect();

const app = express();

app.use(express.json());

// CONFIGUREM O SEUS ROTEADORES AQUI!

app.listen(Number(process.env.PORT), () => {
  console.log(`Server running at port ${process.env.PORT}`);
});

