import Models from "../db/Models/models.js";
import Permissions from "../db/Models/permissions.js";
import { sendResStatus } from "../utils/response.js";

export const verifyPermission = (model, action) => {
  return async function (req, res, next) {
    const { roleId } = req.payload;

    const modelId = (await Models.findOne({ where: { name: model } })).id;

    const permissions = await Permissions.findOne({
      where: { modelId, roleId },
    });

    if (!permissions[action]) return sendResStatus(res, 403);

    next();
  };
};
