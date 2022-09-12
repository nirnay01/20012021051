var fs = require("fs");
// Asynchronous read
fs.readFile('input.txt', function (err, data) {
 if (err) {
 return console.error(err);
 }
 console.log("Asynchronous read: " + data.toString());
});

//synchronous read
const data=fs.readFileSync('input1.txt')
console.log("synchronous read: " + data.toString());
console.log("------------------")