var fs=require('fs')
//fs.writeFile('pr4_7.txt',"",function(){console.log('created file')})

fs.unlink('pr4_7.txt',function(err) {
    if (err)
    console.log(err);
    else
    console.log('Deleted successfully..');
})
