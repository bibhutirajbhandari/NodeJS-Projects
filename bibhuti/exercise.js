//print A B C in an order

//async await
// async function print(input) {
//   console.log(input);
// }

// async function toPrint() {
//   await print("A");
//   await print("B");
//   await print("C");
// }
// toPrint();

//by promise
// function alpha() {
//   print("A")
//     .then(() => {
//       return print("B");
//     })
//     .then(() => {
//       return print("C");
//     });
// }
// alpha();

//print array elements in order
// const arr = ["A", "B", "C"];

// async function print(arr) {
//   let i = 0;
//   let consLog = (i) => {
//     console.log(arr[i]);
//     return Promise.resolve(i);
//   };
//   consLog(i)
//     .then((item) => {
//       console.log(arr[++item]);
//       return item;
//     })
//     .then((item) => {
//       console.log(arr[++item]);
//     });
// }
// print(arr);

// function r() {
//   return 3;
// }

// function f() {
//   const value = r();
//   new Promise((resolve, reject) => {
//     if (value % 2 == 0) {
//       return resolve(value);
//     }
//     return reject(value);
//   });

//   return new Promise((resolve, reject) => {
//     resolve(value % 2 == 0);
//     reject(value % 2 !== 0);
//   });

//   return new Promise((resolve, reject) => {
//     if (value % 2 == 0) {
//       return resolve(value);
//     }
//     return reject("invalid value");
//   });
// }

// f()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const data = await f();
// console.log(data);

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise

//   .then(function () {
//     console.log("Success 1");
//   })

//   .then(function () {
//     console.log("Success 2");
//   })

//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("Success 3");
//   })

//   .then(function () {
//     console.log("Success 4");
//   });

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise

//   .then(function (data) {
//     console.log(data);

//     return job(false);
//   })

//   .catch(function (error) {
//     console.log(error);

//     return "Error caught";
//   });

//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   });

//   .catch(function (error) {
//     console.log(error);
//   });

const arr = [0, 1, 2, 3, 4, 5]; //length = 5
const sum = 4;
let boo = false;
for (let i = 0; i < arr.length - 1; i++) {
  let j = i + 1;
  while (j < arr.length) {
    if (arr[i] + arr[j] === sum) {
      console.log(`the array elements are: ${arr[i]} and ${arr[j]}`);
      boo = true;
      break;
    }
    j++;
  }
  if (boo) {
    break;
  }
}
