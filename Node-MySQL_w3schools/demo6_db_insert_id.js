var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "focyl2",
  password: "focyl",
  database: "mydb", // cuando ya hemos creado la base datos.
});

con.connect(function (err) {
  if (err) throw err;
  var sql =
    "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});
