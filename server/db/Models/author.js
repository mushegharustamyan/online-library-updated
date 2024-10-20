import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Author = sequelize.define(
  "authors",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Author;
