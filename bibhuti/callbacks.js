// function first() {
//   console.log("1");
// }
// function second() {
//   setTimeout(() => {
//     console.log("2");
//   }, 2000);
// }
// function third() {
//   console.log("3");
// }

// first();
// second();
// third();

//instead of using async functions to print & get disoriented output: 1 3 2
//use callbacks so that it prints serially and still in a async function

function first() {
  console.log(1);
}

function second(callback) {
  setTimeout(() => {
    console.log(2);

    callback();
  }, 2000);
}

function third() {
  console.log(3);
}

first();
second(third);
