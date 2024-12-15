import dotenv from "dotenv";
import express from "express";
import connectionInit from "./db/configs.js";
import sequelize from "./db/sequelize.js";
import { configureApp } from "./utils/app.js";
import migrations from "./db/migrations.js";

dotenv.config();
export default app = express();
app.use(express.json());
const port = process.env.PORT;

configureApp(app);

app.listen(port, async () => {
  try {
    await connectionInit();
    await sequelize.sync({ alter: true, force: true });
    await migrations.migrateRoles();
    await migrations.syncModels();
    await migrations.migrateDefaultPermissions();
    await migrations.migrateAdmin();
    console.log(`listen ${port}`);
  } catch (e) {
    console.log(e)
  }
});
