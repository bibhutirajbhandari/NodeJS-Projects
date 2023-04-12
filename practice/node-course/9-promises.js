const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2, 3]);
    reject("things went wrong");
  }, 2000);
});

doWorkPromise
  .then((res) => {
    console.log("success", res);
  })
  .catch((error) => {
    console.log("Error! ", error);
  });

//Note: promise prevents bugs by either calling reject or resolve function
//      we cannot send a call  to more than one function in promise
//      either resolve / reject is called, depending on which func is called first
//      other func from the called func shows no effect when program is run

//                                  fullfilled (resolve)
//                                 /
//   PROMISE       --> pending -->
//                                 \
//                                  rejected (reject)
