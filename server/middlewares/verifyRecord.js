import { sendResStatus } from "../utils/response.js";

export default function verifyRecord(model) {
  return async function (req, res, next) {
    const id = req.params.id

    const record = await model.findByPk(id);

    if (!record) return sendResStatus(res, 404);

    next();
  };
}
