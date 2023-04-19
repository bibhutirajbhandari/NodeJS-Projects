// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([1, 2, 3]);
//     reject("things went wrong");
//     // console.log("----------");
//   }, 2000);
// });

// doWorkPromise
//   .then((res) => {
//     console.log("success", res);
//   })
//   .catch((error) => {
//     console.log("Error! ", error);
//   });

//Note: promise prevents bugs by either calling reject or resolve function
//      we cannot send a call  to more than one function in promise
//      either resolve / reject is called, depending on which func is called first
//      other func from the called func shows no effect when program is run

//                                  fullfilled (resolve)
//                                 /
//   PROMISE       --> pending -->
//                                 \
//                                  rejected (reject)

//Promise Defect due to large nested promises
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
      reject(a - b);
      console.log("----------");
    }, 2000);
  });
};

// add(1, 2)
//   .then((sum) => {
//     console.log(sum);

//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Promise Chaining : aid to nested promises
add(1, 1)
  .then((sum) => {
    console.log(sum); // 2
    return add(sum, 5);
  })
  .then((sum2) => {
    console.log(sum2);
    return add(sum2, 2);
  })
  .catch((err) => {
    console.log(err);
  });
