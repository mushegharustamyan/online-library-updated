import { sendResStatus } from "../../utils/response.js";
import Author from "../../db/Models/author.js";

export const create = async (req, res) => {
  try {
    const { fullName } = req.body;

    await Author.create({ fullName });

    return sendResStatus(res , 201)
  } catch (e) {
    sendResStatus(res , 500)
  }
};
