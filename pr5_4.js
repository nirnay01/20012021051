// Do as directed:
// a. Remove a specific listener.
// b. Remove all listeners.
// c. How to get the maximum size of listener that will bind with a specific event
// d. How to change the maximum size of listeners to bind with specific events
// e. Find out the name of active listeners for the specified event.
// f. Find out the number of listeners listening to the specified event.
// g. How to change the execution position of listeners
const event = require('events');
const e = new event.EventEmitter();
e.addListener()