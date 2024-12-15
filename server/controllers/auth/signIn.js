import { sendResBody, sendResStatus, getEnv } from "../../utils/response.js";
import { signInService } from "../../services/auth/signIn.js";

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await signInService(email, password);

    return sendResBody(res, 200, token);
  } catch (e) {
    const { message, statusCode } = e;

    return sendResStatus(res, statusCode || 500, message);
  }
};
