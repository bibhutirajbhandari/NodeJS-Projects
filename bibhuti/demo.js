// const EventEmitter = require("events");

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on("event", () => {
//   console.log("an event occurred!");
// });
// myEmitter.emit("event");

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("your name? \n", (name) => {
//   //interface.question is a method which displays query by writing output and waits for user input
//   console.log(`hey ${name}`);
//   rl.close();
// });

// function logA() {
//   console.log("A");
// }
// function logB() {
//   console.log("B");
// }
// function logC() {
//   console.log("C");
// }
// function logD() {
//   console.log("D");
// }
// function logE() {
//   console.log("E");
// }
// async function asynchronous() {
//   console.log("ASYNC FUNC");
// }
// function logF() {
//   console.log("F");
// }
// function logG() {
//   console.log("G");
// }

// logA();
// setTimeout(logB, 0);

// Promise.resolve().then(logC);
// Promise.resolve().then(logE);
// Promise.resolve().then(logF);
// Promise.resolve().then(logG);

// logD();
// asynchronous();


// const promise = new Promise((resolve, reject) => {
//   console.log('1')
//   setTimeout(() => resolve("response from resolve"), 3000);
// });

// promise.then((res) => {
//   console.log(res);
// });


// async function bib() {
//   return 1;
// }

// console.log(bib());

// bib()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });


function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise

  .then(function (data) {
    console.log(data); //success

    return job(true);
  })

  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat"; //throws error goes to nearest catch block
    }

    return job(true);
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    //throw error 'Defeat' goes here
    console.log(error); //Defect

    return job(false); //reject('error') goes to nearest catch
  })

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    //catches 'error'
    console.log(error); //error

    return "Error caught"; //passes 'error caught' to next .then
  })

  .then(function (data) {
    console.log(data); //error caught

    return new Error("test"); // new Error('test') to next .then
  })

  .then(function (data) {
    console.log("Success:", data.message); //Success: test
  })

  .catch(function (data) {
    console.log("Error:", data.message);
  });
