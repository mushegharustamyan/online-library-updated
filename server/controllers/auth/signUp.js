import { sendResStatus } from "../../utils/response.js";
import bcrypt from "bcrypt";
import User from "../../db/Models/user.js";

export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, password, email, dateOfBirth } = req.body;

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        firstName,
        lastName,
        password: hashedPassword,
        email,
        dateOfBirth
      },
    });

    if (created) return sendResStatus(res, 201, "User Registered Successfuly");

    return sendResStatus(res, 409, "User Already exists");
  } catch (e) {
    console.log(e)
    return sendResStatus(res, 400 , `Bad Request ${e.message}`);
  }
};
