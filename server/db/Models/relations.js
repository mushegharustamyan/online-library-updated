const User = require("./user")
const Author = require("./author")
const Role = require("./role")
const Book = require("./book")

User.belongsTo(Role , {foreignKey: "roleId"})
Book.belongsTo(Author , {foreignKey: "authorId"})

module.exports = [User , Author , Role , Book]