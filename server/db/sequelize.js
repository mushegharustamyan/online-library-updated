import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("library", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
