import Permissions from "../db/Models/permissions.js";

export const verifyPermission = (model) => {
  return async function (req, res, next) {
    console.log(
      `checking permissions for ${model} and role Id ${req.payload.roleId}`
    );

    next();
  };
};
