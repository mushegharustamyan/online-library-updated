import Role from "./Models/role.js";
import Models from "./Models/models.js";

import sequelize from "./sequelize.js";
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

export default { migrateRoles, syncModels };
