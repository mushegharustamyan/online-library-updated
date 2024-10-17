import User from "./user.js";
import Author from "./author.js";
import Role from "./role.js";
import Book from "./book.js";
import Rating from "./rating.js";
import { BelongsTo, HasMany } from "sequelize";

Role.belongsTo(Role, { foreignKey: "roleId" });
Author.belongsTo(Author, { foreignKey: "authorId" });
Rating.hasMany(Rating, { foreignKey: "bookId" });

export default [User, Author, Role, Book];
