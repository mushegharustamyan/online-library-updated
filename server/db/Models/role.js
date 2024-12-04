import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Role = sequelize.define("roles", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Role;
