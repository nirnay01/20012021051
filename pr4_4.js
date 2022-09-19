var fs=require('fs')
fs.writeFile('pr4_4.html',"<html><head><title>A Simple HTML Document</title></head><body><p>This is a very simple HTML document</p><p>It only has two paragraphs</p></body></html>",function (err) {
    if (err)
    console.log(err);
    else
    console.log('Write operation complete.');
})
