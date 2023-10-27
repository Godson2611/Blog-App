/** @format */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routers from "./src/routers/router.js";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", Routers);

mongoose
  .connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening to PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
