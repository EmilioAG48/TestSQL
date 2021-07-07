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
    "SELECT * FROM customers WHERE address = 'Park Lane 38'",
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  );
});
