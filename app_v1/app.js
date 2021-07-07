// Inicializar el proyecto y Crear el fichero package.json
// npm init --y
// Instalar modulos necesarios
// npm install express mysql body-parser --save

//------ En el navegador: http://localhost:3000/articulos/A0003

// Importaciones
const mysql = require("mysql");
const express = require("express");
const app = express();

//Configuramos el Puerto - Variable de Entorno o si no valor por defecto
const port = process.env.PORT || 3000;
// Motor de plantilla
app.set("view engine", "ejs");
// Directorio de Plantillas / Vistas
app.set("views", __dirname + "/views");
// Directorio de ficheros estáticos
app.use(express.static(__dirname + "/public"));

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
        if (!err)
          //res.send(rows);
          res.render("articulos", {
            rows,
          });
        else console.log(err);
      }
    );
  });
});

app.listen(port, () => {
  console.log(`El Servidor se está ejecutando en el puerto ${port}`);
});
