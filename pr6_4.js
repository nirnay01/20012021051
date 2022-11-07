//Write a node.js program to retrieve all the details of the product and display in the browser
var mysql=require('mysql')
var express=require('express')
var app=express()
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_test"
})
con.connect(function(err){
if(err) throw err
    console.log("connected")
})
app.get('/',function(req,res){
    con.query("select * from product",function(err,result){
        if(err) throw err
        res.send(result)
    })
})
app.listen(3000)
console.log("http://127.0.0.1:3000/")
