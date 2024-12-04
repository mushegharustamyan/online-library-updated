import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Author = sequelize.define(
  "authors",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { timestamps: false }
);

export default Author;
