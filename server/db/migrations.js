import Role from "./Models/role.js";
import Models from "./Models/models.js";

import sequelize from "./sequelize.js";
import Permissions from "./Models/permissions.js";
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
    const [results] = await sequelize.query(`
      SELECT TABLE_NAME 
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_SCHEMA = 'library'
    `);

    results.forEach(async (value) => {
      await Models.findOrCreate({
        where: { name: value.TABLE_NAME },
        defaults: { name: value.TABLE_NAME },
      });
    });
  } catch (e) {
    console.log(e);
  }
};

const migrateDefaultPermissions = async () => {
  const roles = await Role.findAll();
  const models = await Models.findAll();

  const permissions = await Permissions.findAll();

  if (permissions.length > 0) return;

  roles.forEach(async (role) => {
    if (role.name === "Admin") {
      const adminPermissions = models.map((model) => {
        return {
          modelId: model.id,
          roleId: role.id,
          create: true,
          update: true,
          read: true,
          delete: true,
        };
      });

      await Permissions.bulkCreate(adminPermissions);
    }

    if (role.name === "Manager") {
      const managaerPermissions = models.map((model) => {
        if (
          model.name === "users" ||
          model.name === "permissions" ||
          model.name === "ratings"
        ) {
          return {
            modelId: model.id,
            roleId: role.id,
            create: false,
            update: false,
            read: true,
            delete: false,
          };
        }

        return {
          modelId: model.id,
          roleId: role.id,
          create: true,
          update: true,
          read: true,
          delete: true,
        };
      });

      await Permissions.bulkCreate(managaerPermissions);
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
            create: false,
            update: false,
            read: false,
            delete: false,
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
            create: false,
            update: false,
            read: true,
            delete: false,
          };
        }

        if (
          model.name === "ratings" 
        ) {
          return {
            modelId: model.id,
            roleId: role.id,
            create: true,
            update: true,
            read: true,
            delete: true,
          };
        }
      });

      await Permissions.bulkCreate(userPermissions);
    }
  });
};

export default { migrateRoles, syncModels, migrateDefaultPermissions };
