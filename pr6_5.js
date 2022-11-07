// node.js program to search any product by Name or Brand     
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
    con.query("select * from product where name='Nirnay Raval' or brand='abc'",function(err,result){
        if(err) throw err
        res.send(result)
    })
})
app.listen(3000)
console.log("Running at Port:http://127.0.0.1:3000/");