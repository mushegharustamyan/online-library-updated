const { DataTypes } = require("sequelize")
const sequelize = require("../sequelize")

const BooksAndAuthors = sequelize.define("books_and_authors" , {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
} , {timestamps: false})

module.exports = BooksAndAuthors