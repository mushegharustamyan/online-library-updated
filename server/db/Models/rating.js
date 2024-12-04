import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Rating = sequelize.define(
  "rating",
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
    },
    changeReason: {
      type: DataTypes.STRING,
    },
    changed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { timestamps: false }
);

export default Rating;
