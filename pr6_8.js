//Write a node.js program to delete specific products from the product table from mysql database.
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
    var sql = "DELETE FROM product WHERE name = 'soap'";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
})