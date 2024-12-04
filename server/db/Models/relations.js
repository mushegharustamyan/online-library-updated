import User from "./user.js";
import Author from "./author.js";
import Role from "./role.js";
import Book from "./book.js";
import Rating from "./rating.js";
import Permissions from "./permissions.js";
import Models from "./models.js";

User.belongsTo(Role, { foreignKey: "roleId" });
Book.belongsTo(Author, {
  foreignKey: {
    name: "authorId",
    allowNull: false,
  },
});
Author.hasMany(Book);
Rating.hasMany(Rating, { foreignKey: "bookId" });
User.hasOne(Rating, { foreignKey: { name: "userId", allowNull: false } });

Models.hasMany(Permissions, { foreignKey: "modelId" });
Role.hasMany(Permissions, { foreignKey: "rolelId" });

export default [User, Author, Role, Book];
