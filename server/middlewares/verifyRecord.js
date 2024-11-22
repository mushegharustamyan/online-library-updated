import { sendResStatus } from "../utils/response.js";

export default function verifyRecord(model) {
  return async function (req, res, next) {
    try {
      const id = req.params.id;

      const record = await model.findByPk(id);

      if (!record) return sendResStatus(res, 404);

      next();
    } catch (e) {
      console.log(e);
      return sendResStatus(res, 500);
    }
  };
}
