const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "focyl",
  password: "focyl",
  database: "tiendaonline",
  debug: false,
});

// timeout just to avoid firing query before connection happens

setTimeout(() => {
  callSP("getAllTodo");
}, 5000);

function callSP(spName) {
  let spQuery = "CALL ??";
  let query = mysql.format(spQuery, [spName]);
  pool.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    // rows from SP
    console.log(result);
  });
}
