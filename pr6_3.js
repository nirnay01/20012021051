var express = require("express");
var app     = express();
var path    = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_test"
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/pr6_3.html'));
});
app.post('/submit',function(req,res){

  var id=req.body.id;
  var name=req.body.name;
  var brand=req.body.brand;
  var quantity=req.body.quantity;
  var price=req.body.price;

  res.write('You sent the id "' + req.body.id+'".\n');
  res.write('You sent the name "' + req.body.name+'".\n');
  res.write('You sent the brand "' + req.body.brand+'".\n');
  res.write('You sent the quantity "' + req.body.quantity+'".\n');
  res.write('You sent the price "' + req.body.price+'".\n');

  con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO product(id,name,brand,quantity,price) VALUES ('"+id+"', '"+name+"','"+brand+"','"+quantity+"','"+price+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
     res.end();
  });
  });
})
app.listen(3000);
console.log("Running at Port:http://127.0.0.1:3000/");