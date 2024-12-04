import User from "../../db/Models/user.js";
import { sendResBody, sendResStatus, getEnv } from "../../utils/response.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return sendResStatus(res, 400);

    const user = await User.findOne({ where: { email } });

    if (!user) return sendResStatus(res, 409, "Invalid Email or Password");

    const decoded = await bcrypt.compare(password, user.password);

    if (!decoded) return sendResStatus(res, 409, "Invalid Email or Password");

    const token = jwt.sign(
      {
        id: user.id,
        roleId: user.roleId,
      },
      getEnv("JWT_SECRET"),
      { expiresIn: 80000, algorithm: "HS256" }
    );

    return sendResBody(res, 200, token);
  } catch (e) {
    return sendResStatus(res, 500, e.message);
  }
};
