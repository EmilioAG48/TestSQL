var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "focyl2",
  password: "focyl",
  database: "mydb", // cuando ya hemos creado la base datos.
});

con.connect(function (err) {
  if (err) throw err;
  con.query(
    "SELECT * FROM customers WHERE address LIKE 'H%'",
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  );
});

//  con ?.
//If you have multiple placeholders, the array contains multiple values, in that order:

var name = "Amy";
var adr = "Mountain 21";
var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
