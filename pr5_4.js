// Do as directed:
const event = require('events');
const e = new event.EventEmitter();
// a. Remove a specific listener.
// b. Remove all listeners.
e.on('event',(err,data)=>{
        if(err)
        {
            console.log(err.message);
        }
        else{
            console.log("Event is added");
        }
});
e.removeListener('event',(err,data)=>{
    if(err)
    {
        console.log(err.message);
    }
    else{
        console.log("Event is remove");
    }});
e.emit('event');
e.removeAllListeners()
e.emit('event');
// c. How to get the maximum size of listener that will bind with a specific event
// d. How to change the maximum size of listeners to bind with specific events
e.setMaxListeners(15);
e.emit('event');
for(i=0;i<5;i++)
{
e.on('event',(err,data)=>{
    if(err)
    {
        console.log(err.message);
    }
    else{
        console.log("Event is added");
    }
}
);
}
// // e. Find out the name of active listeners for the specified event.
e.emit('event');
console.log(e.eventNames());

// f. Find out the number of listeners listening to the specified event.
e.emit('event');
console.log(e.listenerCount('event'));
// g. How to change the execution position of listeners
e.emit('event');
e.prependListener('event',(err,data)=>{
    if(err)
    {
        console.log(err.message);
    }
    else{
        console.log("Event is added");
    }
}
);
e.emit('event');