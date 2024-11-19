import { sendResStatus } from "../../utils/response.js";

const checkRequiredFields = (req, res, next) => {
  const { title, description, authorId } = req.body;

  if (!title || !description || !authorId) return sendResStatus(res, 400);

  next();
};

export default { checkRequiredFields };
