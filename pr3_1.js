var http = require('http');
var url=require('url');

http.createServer(function (req, res) {
 if(req.url=="/"){
    res.write("this is test.")
 }
 else if(req.url=="/exam"){
    res.write('<html><body><table border="3"><tr><th>Semester</th><th>Subject</th></tr><tr><td>5Th</td><td>Software packages</td></tr><tr><td>4th</td><td>No Sql</td></tr></table></body><style>table{color: chartreuse;background-color: blue;}</style></html>')}
 else if(req.url=="/exam/regular_exam"){
    res.write("Regular exam")
 }
 else{
    res.write("Wronge choice")
 }
 res.end();
}).listen(8081);
console.log("http://127.0.0.1:8081/")