import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Rating = sequelize.define(
  "rating",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Rating;
