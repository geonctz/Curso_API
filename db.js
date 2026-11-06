const mysql = require("mysql2/promise")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    password: "root",  
    database: "escola"

})

module.exports = db