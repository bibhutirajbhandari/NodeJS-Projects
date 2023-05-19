const p = new Promise((resolve, reject) => {});

//pending promise: before calling resolve/reject
console.log(p); //Promise { <pending> }

//first step to fulfill a promise
const p1 = new Promise((resolve, reject) => {
  resolve("resolved");
});
console.log(p1); //Promise { 'resolved' }

//first step to reject a promise
// const p2 = new Promise((resolve, reject) => {
//   reject("rejected");
// });
// console.log(p2);

//consume promises
p1.then((res) => {
  console.log(res); //resolved
}).catch((e) => {
  console.log(e);
});

//promise chaining : chain of promises, one after another
const pro = new Promise((resolve, reject) => {
  resolve("fish");
})
  .then((res) => {
    return res + " and chips";
  })
  .then((res) => {
    console.log(res);
  });

//Web APIs that returns a promise is the Fetch API,async resource request over internet

const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=27.7167&lon=85.3167&appid=24586a321a4110eb8e15a1f249b602cb&units=metric";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
