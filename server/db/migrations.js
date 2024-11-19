import Role from "./Models/role.js";

const migrateRoles = async () => {
  try {
    const newRoles = [
      {
        name: "Admin",
        access_level: 1,
      },
      {
        name: "Manager",
        access_level: 2,
      },
      {
        name: "User",
        access_level: 3,
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

export default { migrateRoles };
