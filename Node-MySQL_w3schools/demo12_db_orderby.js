var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "focyl2",
  password: "focyl",
  database: "mydb", // cuando ya hemos creado la base datos.
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
