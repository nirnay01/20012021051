var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE product (id INT(5),name VARCHAR(25), brand VARCHAR(25),quantity INT(20),price INT(20))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});