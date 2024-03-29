const express = require("express");
const router = express.Router();
var path = require("path");
const pool = require(path.join(__dirname, "../db.js"));

//Artículos
router.get("/articulos/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query(
      "SELECT * FROM articulo WHERE cod = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err)
          res.render("articulos", {
            rows,
          });
        else console.log(err);
      }
    );
  });
});

router.delete("/articulos/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query(
      "DELETE FROM articulo WHERE cod = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send("Registro borrado satisfactoriamente");
        else console.log(err);
      }
    );
  });
});

module.exports = router;
