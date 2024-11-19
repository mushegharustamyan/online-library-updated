import { sendResStatus } from "../../utils/response.js";

const checkRequiredFields = (req, res, next) => {
  const { fullName } = req.body;

  if (!fullName) return sendResStatus(res, 400);

  next();
};

export default { checkRequiredFields };