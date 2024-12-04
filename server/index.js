import dotenv from "dotenv";
import express from "express";
import connectionInit from "./db/configs.js";
import sequelize from "./db/sequelize.js";
import { configureApp } from "./utils/app.js";
import migrations from "./db/migrations.js";

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;

configureApp(app);

app.listen(port, async () => {
  console.log(`listen ${port}`);
  try {
    await connectionInit();
    await sequelize.sync({ alter: true, force: false });
    await migrations.migrateRoles();
    await migrations.syncModels();
    await migrations.migrateDefaultPermissions()
  } catch (e) {
    console.log(e);
  }
});
