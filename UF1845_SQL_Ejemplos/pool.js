//Comandos NPM
// npm init - Crea el fichero package.json
// npm install mysql   - Instalamos la librería
//------------------------------------------------------------
// Inicializar el proyecto y Crear el fichero package.json
// npm init --y
// Instalar modulos necesarios
// npm install express mysql body-parser --save

const express = require("express");
const app = express();
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "focyl",
  password: "focyl",
  database: "tiendaonline",
});

// let sql = "SELECT * FROM usuario LIMIT 2";
let sql = "SELECT nombre, dni FROM usuario ORDER BY dni LIMIT 100";

app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query(sql, (err, rows) => {
      connection.release(); // return the connection to pool
      if (err) throw err;
      console.log("The data from users table are: \n", rows);
    });
  });
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
