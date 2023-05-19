const express = require("express");
const app = express();

app.listen(8000, () => {
  console.log("server running on port 8000");
});

app.use(express.json());

let students = [
  {
    id: 1,
    name: "Bibhuti",
    subject: "computer science",
  },
  {
    id: 2,
    name: "riya",
    subject: "xyz science",
  },
];

app.get("/students", (req, res) => {
  res.send({ status: "success", data: students }).status(200);
});

app.post("/students", (req, res) => {
  const name = req.body.name;
  const subject = req.body.subject;

  students.push({
    id: students.length + 1, //?
    name: name,
    subject: subject,
  });
  console.log(students.id);
  res.send({ status: "success", data: students });
});

app.delete("/students/:id", (req, res) => {
  const id = req.params.id;

  const newStudents = students.filter((balak) => {
    return balak.id != id;
  });
  console.log(newStudents);
  // students = newStudents;
  res.send({ status: "success", data: newStudents });
});

app.patch("/students/:id", (req, res) => {
  const id = req.params.id;
  const subject = req.body.subject;

  const student = students.find((element) => {
    return element.id === parseInt(id);
  });
  // const i = students.findIndex((element) => {
  //   element.id === id;
  // });
  student.subject = subject;

  res.send({ status: `patched student subject of id ${id}`, data: students });
});

app.put("/students/:id", (req, res) => {
  const id = req.params.id;

  
});
