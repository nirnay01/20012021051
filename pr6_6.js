//create a node.js program to retrieve all the products whose quantity is less than 3 from mysql database.
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
    var sql = "SELECT * FROM product WHERE quantity < 3";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
})
