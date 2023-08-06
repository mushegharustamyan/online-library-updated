const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Book = sequelize.define("books" , {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Book