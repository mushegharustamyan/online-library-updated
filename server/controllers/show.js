import { sendResBody, sendResStatus } from "../utils/response.js";

export default function showRecord(model) {
  return async function (req, res) {
    try {
      const id = req.params.id;

      const record = await model.findByPk(id);

      if (!record) return sendResStatus(res, 404);

      sendResBody(res, 200, record);
    } catch (e) {
      console.log(e);
      sendResStatus(res, 500);
    }
  };
}
