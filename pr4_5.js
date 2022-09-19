var fs=require('fs')
fs.writeFile('pr4_5.txt',"",function (err) {
    if (err)
    console.log(err);
    else
    console.log('Write operation complete.');
})