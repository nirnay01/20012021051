//URL: https://www.uvpce.ac.in:11/content/syllabus-it
var http = require('http'); 
const {URL} = require('url'); 
 
http.createServer(function (req, res) { 
 
 const queryString1 = new URL('https://www.uvpce.ac.in:11/content/syllabus-it'); 
 console.log("Host is :-"+queryString1.host); 
 console.log("Host name is :-"+queryString1.hostname); 
}).listen(4200); 