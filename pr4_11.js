//https://www.google.com/search?sxsrf=ALeKk00zkMmOlhl2IKbhPhHy_gY57KJN_g%3A1598340885542&source=hp
var http = require('http'); 
 const { URL } = require('url'); 
 
 http.createServer(function (req, res) { 
const queryString = new URL('https://www.google.com/search?sxsrf=ALeKk00zkMmOlhl2IKbhPhHy_gY57KJN_g%3A1598340885542&source=hp'); 

 console.log("Search terms are :-"+queryString.search);  
 }).listen(4200); 