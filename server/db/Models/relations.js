const User = require("./user")
const Author = require("./author")
const Role = require("./role")
const Book = require("./book")
const BooksAndAuthors = require("./books_and_authors")

User.belongsTo(Role , {foreignKey: "roleId"})
Book.belongsToMany(Author, {through: BooksAndAuthors})

module.exports = [User , Author , Role , Book , BooksAndAuthors]