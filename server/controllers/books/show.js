import Book from "../../db/Models/book";
import { sendResBody, sendResStatus } from "../../utils/response";

export const show = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) return sendResStatus(res, 404);

    return sendResBody(res, 200, book);
  } catch (e) {
    console.log(e);
  }
};
