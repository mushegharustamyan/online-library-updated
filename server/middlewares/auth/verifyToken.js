import jwt from "jsonwebtoken";
import { getEnv, sendResStatus } from "../../utils/response.js";
import User from "../../db/Models/user.js";

export const verifyToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const decoded = await jwt.verify(authorization, getEnv("JWT_SECRET"));

    const { id, roleId } = decoded;

    const user = await User.findByPk(id);

    if (!user) return sendResStatus(res, 403);

    req.payload = { id, roleId };

    next();
  } catch (e) {
    return sendResStatus(res, 403);
  }
};
