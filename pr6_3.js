var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_test"
});
// var sql = "INSERT INTO prodct(id,name,brand,quantity,price) VALUES ()";
