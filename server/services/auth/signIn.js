import User from "../../db/Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getEnv } from "../../utils/response.js";
import StatusError from "../../utils/helpers.js";

export const signInService = async (email, password) => {
  if (!email || !password) return sendResStatus(res, 400);

  const user = await User.findOne({ where: { email } });

  if (!user) throw new StatusError("Invalid Email or Password", 409);

  const decoded = await bcrypt.compare(password, user.password);

  if (!decoded) throw new Error("Invalid Email or Password", 409);

  const token = jwt.sign(
    {
      id: user.id,
      roleId: user.roleId,
    },
    getEnv("JWT_SECRET"),
    { expiresIn: 80000, algorithm: "HS256" }
  );

  return token;
};
