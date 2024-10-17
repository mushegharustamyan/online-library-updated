import dotenv from "dotenv";
import express from "express";
import connectionInit from "./db/configs.js";
import sequelize from "./db/sequelize.js";
import { configureApp } from "./utils/app.js";

dotenv.config();
const app = express();

const port = process.env.PORT;

configureApp(app)

app.listen(port, async () => {
  console.log(`listen ${port}`);
  try {
    await connectionInit();
    await sequelize.sync({ alter: false, force: false });
  } catch (e) {
    console.log(e);
  }
});
