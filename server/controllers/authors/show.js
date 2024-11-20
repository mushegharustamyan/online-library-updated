import Author from "../../db/Models/author.js";
import { sendResBody, sendResStatus } from "../../utils/response.js";

export const show = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await Author.findByPk(id);

    if (!author) return sendResStatus(res, 404);

    return sendResBody(res, 200, author);
  } catch (e) {
    console.log(e);
  }
};
