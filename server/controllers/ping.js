import { sendResStatus } from "../utils/response.js";

const pingController = (req, res) => {
  return sendResStatus(res, 200, "pong");
};

export default pingController;
