const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Author = sequelize.define("authors" , {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Author