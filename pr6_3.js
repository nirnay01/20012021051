var mysql = require('mysql');
var express=require('express')
var app=express()
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_test"
});
// var sql = "INSERT INTO prodct(id,name,brand,quantity,price) VALUES ()";
var a='<html><body><form ><table border="1"><tr><td>id</td><td><input type="number" name="id" placeholder="enter product id"></td></tr><tr><td>name</td><td><input type="text" name="name" id="name" placeholder="enter product name"></td></tr><tr><td>brand</td><td><input type="text" name="brand" id="brand" placeholder="enter product brand"></td></tr><tr><td>quantity</td><td><input type="number" name="quantity" id="quantity" placeholder="enter the quantity"></td></tr><tr><td>price</td><td><input type="number" name="price" id="price" placeholder="enter price of product"></td></tr></table></form></body></html>'
app.use("/",a)