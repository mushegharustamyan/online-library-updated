import Role from "./Models/role.js";
import Models from "./Models/models.js";

import sequelize from "./sequelize.js";
import Permissions from "./Models/permissions.js";

import { setPermission } from "../utils/helpers.js";
const migrateRoles = async () => {
  try {
    const newRoles = [
      {
        name: "Admin",
      },
      {
        name: "Manager",
      },
      {
        name: "User",
      },
    ];

    const existingRoles = await Role.findAll();

    if (existingRoles.length > 0) return;

    await Role.bulkCreate(newRoles);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Roles are created");
  }
};

const syncModels = async () => {
  try {
    const [tables] = await sequelize.query(`
      SELECT TABLE_NAME 
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_SCHEMA = 'library'
    `);

    for (let table of tables) {
      await Models.findOrCreate({
        where: { name: table.TABLE_NAME },
        defaults: { name: table.TABLE_NAME },
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const migrateDefaultPermissions = async () => {
  const roles = await Role.findAll();
  const models = await Models.findAll();

  const permissions = await Permissions.findAll();

  if (permissions.length > 0) return;

  for (let role of roles) {
    if (role.name === "Admin") {
      const adminPermissions = models.map((model) => {
        return {
          modelId: model.id,
          roleId: role.id,
          ...setPermission("create", "read", "update", "delete"),
        };
      });

      await Permissions.bulkCreate(adminPermissions);
    }

    if (role.name === "Manager") {
      const managerPermissions = models.map((model) => {
        console.log(model.name);
        if (
          model.name === "users" ||
          model.name === "permissions" ||
          model.name === "ratings"
        ) {
          return {
            modelId: model.id,
            modelName: model.name,
            roleId: role.id,
            ...setPermission("read"),
          };
        }

        return {
          modelId: model.id,
          roleId: role.id,
          modelName: model.name,
          ...setPermission("read", "create", "update", "delete"),
        };
      });

      await Permissions.bulkCreate(managerPermissions);
    }

    if (role.name === "User") {
      const userPermissions = models.map((model) => {
        if (
          model.name === "models" ||
          model.name === "permissions" ||
          model.name === "roles"
        ) {
          return {
            modelId: model.id,
            roleId: role.id,
            ...setPermission(),
          };
        }

        if (
          model.name === "books" ||
          model.name === "authors" ||
          model.name === "users"
        ) {
          return {
            modelId: model.id,
            roleId: role.id,
            ...setPermission("read"),
          };
        }

        if (model.name === "ratings") {
          return {
            modelId: model.id,
            roleId: role.id,
            ...setPermission("read", "create", "update", "delete"),
          };
        }
      });

      await Permissions.bulkCreate(userPermissions);
    }
  }
};

export default { migrateRoles, syncModels, migrateDefaultPermissions };
