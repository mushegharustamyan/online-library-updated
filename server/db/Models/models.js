import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Models = sequelize.define("Models", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

export default Models;
