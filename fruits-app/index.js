const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.use(express.json());

let fruits = [
  {
    id: 1,
    name: "mango",
    season: "summer",
  },
];

app.get("/fruits", (req, res) => {
  res.send({ status: "success", data: fruits }).status(200);
});

app.post("/fruits", (req, res) => {
  const name = req.body.name;
  const season = req.body.season;

  //array method push
  fruits.push({
    id: fruits.length + 1,
    name: name,
    season: season,
  });
  res.send({ status: "success", data: fruits }).status(200);
});

app.delete("/fruits/:id", (req, res) => {
  const id = req.params.id;

  const newFruits = fruits.filter((f) => {
    return f.id != id;
  });

  fruits = newFruits;
  res.send({ status: "success", data: fruits }).status(200);
});

app.patch("/fruits/:id", (req, res) => {
  const id = req.params.id;
  const season = req.body.season;

  const fruit = fruits.find((e) => {
    return e.id === parseInt(id);
  });
  fruit.season = season;

  res.send({ status: "success", data: fruits }).status(200);
});

app.put("/fruits/:id", (req, res) => {
  const id = req.params.id;
  const fruit = fruits.find((e) => {
    return e.id === parseInt(id);
  });
  put(req.body);

  function put({
    id: fruitId = fruit?.id,
    name: n = fruit?.name,
    season: s = fruit?.season,
  }) {
    fruit.id = fruitId;
    fruit.name = n;
    fruit.season = s;
  }
  res.send({ status: "patch performed!", data: fruits });
});
