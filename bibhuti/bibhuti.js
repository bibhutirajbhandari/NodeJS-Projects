const bibhuti = {
  name: "Bibhuti",
  age: 22,
  updateAge: function update(ageToUpdate) {
    bibhuti.age = ageToUpdate;
  },
  readAge: () => {
    return bibhuti.age;
  },
  deleteAge: () => {
    delete bibhuti.age;
  },
};

const ageToUpdate = 12;
bibhuti.updateAge(ageToUpdate);

const age = bibhuti.readAge();

console.log(bibhuti);
console.log(age);

bibhuti.deleteAge();
console.log(bibhuti);
