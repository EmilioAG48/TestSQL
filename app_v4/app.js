// Inicializar el proyecto y Crear el fichero package.json
// npm init --y
// Instalar modulos necesarios
// npm install express mysql ejs body-parser --save

//---------------------------- En el navegador: localhost:3000/articulos/A0003

// Importaciones
http: var path = require("path");
const express = require("express");
const app = express();

// Configurar Pool de conexiones MySQL
const pool = require(path.join(__dirname, "db.js"));

//Configuramos el Puerto - Variable de Entorno o si no valor por defecto
const port = process.env.PORT || 3000;
// Motor de plantilla
app.set("view engine", "ejs"); // ejs permite html, muy parecido.
// Directorio de Plantillas / Vistas
app.set("views", __dirname + "/views");
// Directorio de ficheros estáticos
app.use(express.static(__dirname + "/public"));

// Express > 4.16
// parsear solicitudes de tipo de contenido: application/json
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

//Rutas
// Rutas Web
app.use("/", require("./router/articulos"));

// let sql = "SELECT * FROM usuario LIMIT 5";

// app.get("/", (req, res) => {
//   pool.getConnection((err, connection) => {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
//     connection.query(sql, (err, rows) => {
//       connection.release(); // return the connection to pool
//       if (err) throw err;
//       console.log("The data from users table are: \n", rows);
//     });
//   });
// });

app.get("/", function (req, res, next) {
  res.json({
    data: [
      {
        cita: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo",
        autor: "Winston Churchill",
      },
    ],
    meta: {
      page: 1,
      curso: "Curso Web Focyl",
    },
  });
});

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Título del sitio web",
  });
});

//Inicializar el servidor
app.listen(port, () => {
  console.log(`El Servidor se está ejecutando en el puerto ${port}`);
});
