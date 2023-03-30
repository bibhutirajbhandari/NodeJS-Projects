//Asynchronous Function: functions running in parallel with other functions 
// Async supports non-blocking I/O


//Implementation of simple async method : setTimeOut
console.log("Starting")

setTimeout( () => {
    console.log("3 second timer")
}, 3000)

setTimeout( () => {
    console.log("0 second timer")
},0)

console.log("Stopping")