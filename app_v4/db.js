const mysql = require("mysql");
var path = require("path");
const config = require(path.join(__dirname, "./config/dbconfig.js"));

// Create a MySQL pool. el pool permite gestionar....
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;
