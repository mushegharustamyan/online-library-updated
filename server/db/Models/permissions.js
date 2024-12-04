import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Permissions = sequelize.define("Permissions", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  create: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  update: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  read: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  delete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default Permissions
