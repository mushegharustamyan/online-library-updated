import { sendResStatus } from "../../utils/response.js";
import bcrypt from "bcrypt";
import User from "../../db/Models/user.js";
import Role from "../../db/Models/role.js";

export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, password, email, dateOfBirth } = req.body;

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    const userRole = await Role.findOne({where: {name :'User'}})

    const {id} = userRole

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        firstName,
        lastName,
        password: hashedPassword,
        email,
        dateOfBirth,
        roleId: id
      },
    });

    if (created) return sendResStatus(res, 201, "User Registered Successfuly");

    return sendResStatus(res, 409, "User Already exists");
  } catch (e) {
    console.log(e);
    return sendResStatus(res, 500);
  }
};
