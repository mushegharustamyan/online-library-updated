const mysql = require('mysql2')

const connectionInit = async () =>
    new Promise((resolove, reject) => {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            port: "3306"
        })

        connection.query('CREATE DATABASE IF NOT EXISTS library', (err , res) => {
            if(err) reject(err)

            resolove(res)
        })
    })  

require("./Models/relations")

module.exports = connectionInit