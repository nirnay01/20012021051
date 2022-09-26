// Create event which performs following tasks synchronously:
// a. Read file content
// b. Display content of file
// c. Find out number of words
// d. Display numbers of words and finishing message

const event = require('events');
const fs = require('fs');
const e = new event.EventEmitter();

e.on('event-read',(fname)=>{
    fs.readFile(fname,function(err,data){
        if(err)
        {
            console.log(err.message);
        }
        else{
            console.log(data.toString());
            e.emit('event-word-cal',data);
        }
    });
});
e.on('event-word-cal',(data)=>{
    var str = data.toString().split(' ');
    console.log("No of word in file is: "+(str.length));
    console.log("Finish");
});
e.emit('event-read','./pr5_3.txt');