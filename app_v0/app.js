// Inicializar el proyecto y Crear el fichero package.json
// npm init --y
// Instalar modulos necesarios
// npm install express mysql body-parser --save
//------------------------ http://localhost:3000/articulos/A0003

const express = require("express");
const app = express();
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "focyl",
  password: "focyl",
  database: "tiendaonline",
  debug: false,
});

let sql = "SELECT * FROM usuario LIMIT 5";

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

app.get("/articulos/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query(
      "SELECT * FROM articulo WHERE cod = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
