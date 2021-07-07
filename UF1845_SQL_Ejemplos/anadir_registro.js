const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "focyl",
  password: "focyl",
  database: "tiendaonline",
  debug: false,
});

// add rows in the table

function addRow(data) {
  let insertQuery = "INSERT INTO ?? (??,??,??,?? ) VALUES (?,?,?,?)";
  let query = mysql.format(insertQuery, [
    "articulo",
    "cod",
    "nombre",
    "pvp",
    "marca",
    data.cod,
    data.nombre,
    data.pvp,
    data.marca,
  ]);
  pool.query(query, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    // rows added
    console.log(response.insertId);
  });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
  // call the function
  addRow({
    cod: "B0002",
    nombre: "EOS 12D",
    marca: "Canon",
    pvp: "588",
  });
}, 5000);
