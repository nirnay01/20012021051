var fs=require('fs')
//fs.writeFile('pr4_8.txt',"",function(){console.log('created file')})
fs.appendFile('pr4_8.txt',"\n\n\n",function(){
    console.log('file appened')
})