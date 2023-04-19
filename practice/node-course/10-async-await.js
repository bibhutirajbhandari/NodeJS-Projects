// const doWork = async () => {
//   return "Andrew";
// };
// console.log(doWork()); //returns a promise

// console.log('----');

// doWork()
//   .then((result) => {
//     console.log("result", result);
//   })
//   .catch((e) => {
//     console.log("e", e);
//   });

console.log("----");

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  throw new Error("something went wrong");
};

doWork()
  .then((result) => {
    console.log("result", result);
  })
  .catch((e) => {
    console.log("e", e);
  });
