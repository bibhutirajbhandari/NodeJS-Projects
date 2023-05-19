const arr = [
  {
    name: "bibhuti",
    age: 22,
  },
  {
    name: "riya",
    age: 13,
  },
  {
    name: "max",
    age: 7,
  },
  {
    name: "meena",
    age: 16,
  },
  {
    name: "sita",
    age: 15,
  },
];

sort();
console.log(arr);

function sort() {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].age > arr[j + 1].age) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return;
  // console.log(index + 1);
}
