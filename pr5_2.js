const event = require('events');
const e = new event.EventEmitter();
e.once('event-1',(num1,num2)=>{
    console.log("Sum of two number is: "+(num1+num2));
});
e.once('event-2',(num1, num2,num3)=>{
    console.log("Sum of three number is: "+(num1+num2+num3));
});
e.emit('event-1',40,50);
e.emit('event-2',100,200.20,300.80);