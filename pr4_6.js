var fs=require('fs')
fs.rename('pr4_6.txt','pr4_6.html',function(err) {
    if (err)
    console.log(err);
    else
    console.log('Rename complete!');
})