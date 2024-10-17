import { createConnection } from "mysql2";

const connectionInit = async () =>
  new Promise((resolove, reject) => {
    const connection = createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      port: "3306",
    });

    connection.query("CREATE DATABASE IF NOT EXISTS library", (err, res) => {
      if (err) reject(err);

      resolove(res);
    });
  });

import relations from "./Models/relations.js"

export default connectionInit;
