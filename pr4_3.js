var fs=require('fs')
var data =fs.readFileSync('pr4_3_text.txt')
data=data.toString().split("|")
console.log(data)
//console.log("string :"+data)