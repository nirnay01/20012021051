//Write a node.js program to update the price of a specific item in the product table from mysql database.
//connect to mysql database
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
    var sql = "UPDATE product SET price = 100 WHERE id = 1";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
})