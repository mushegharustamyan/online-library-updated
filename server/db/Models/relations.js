import User from "./user.js";
import Author from "./author.js";
import Role from "./role.js";
import Book from "./book.js";
import Rating from "./rating.js";

Role.belongsTo(Role, { foreignKey: "roleId" });
Book.belongsTo(Author, {
  foreignKey: {
    name: "authorId",
    allowNull: false,
  },
});
Author.hasMany(Book);
Rating.hasMany(Rating, { foreignKey: "bookId" });

export default [User, Author, Role, Book];
