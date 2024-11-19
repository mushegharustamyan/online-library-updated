import Book from "../../db/Models/book.js";
import Author from "../../db/Models/author.js";
import { sendResStatus } from "../../utils/response.js";

export const create = async (req, res) => {
  try {
    const { title, description, authorId } = req.body;

    const author = await Author.findByPk(authorId);

    if (!author) return sendResStatus(res, 400, "Author not found");

    await Book.create({ title, description, authorId });

    return sendResStatus(res, 201);
  } catch (e) {
    console.log(e.message);
    return sendResStatus(res, 500);
  }
};
