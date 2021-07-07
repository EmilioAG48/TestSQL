var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "focyl2",
  password: "focyl",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
