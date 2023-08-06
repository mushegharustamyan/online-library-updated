const { Sequelize, DataTypes, STRING } = require("sequelize");

const sequelize = new Sequelize("iera", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize