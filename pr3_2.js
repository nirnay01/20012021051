var http = require('http');
var url=require('url');

http.createServer(function (req, res) {
var data=url.parse(req.url,true).query
if(data.num1 > data.num2){
    res.write(data.num1+" is greater than "+data.num2)
}
else if(data.num2 > data.num1){
    res.write(data.num2+" is greater than "+data.num1)
}
else{
    res.write("both are same.")
}
 res.end();
}).listen(8080);
console.log("http://127.0.0.1:8080/")