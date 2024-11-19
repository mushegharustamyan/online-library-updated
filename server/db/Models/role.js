import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Role = sequelize.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  access_level: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Role;
