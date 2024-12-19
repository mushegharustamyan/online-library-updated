import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("library", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    charset: "utf8",
  },
  logging: false,
});

export default sequelize;
