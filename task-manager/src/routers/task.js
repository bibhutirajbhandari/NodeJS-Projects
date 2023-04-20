const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

//POST method for tasks
router.post("/tasks", async (req, res) => {
  const taskData = new Task(req.body);
  try {
    const result = await taskData.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(409).send(err);
  }
});

//GET tasks
router.get("/tasks", async (req, res) => {
  try {
    const result = await Task.find({});
    res.send(result);
  } catch (e) {
    res.status(500).send();
  }
});

//GET tasks by desc
router.get("/tasks/desc/:id", async (req, res) => {
  const queryParam = req.params.id.replaceAll("+", " ");

  try {
    const result = Task.find({ desc: queryParam });
    if (!result) {
      return res.status(404).send();
    }
    res.send(result);
  } catch (e) {
    res.status(500).send();
  }
});

//GET tasks by id
router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

//PATCH for tasks
router.patch("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  const updates = Object.keys(req.body);
  // console.log(updateKeys);

  const allowedUpdates = ["desc", "status"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  try {
    // const result = await Task.findByIdAndUpdate(_id, req.body);
    // console.log(result)

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).send();
    }

    updates.forEach((update) => {
      task[update] = req.body[update];
    });
    try {
      await task.save();
    } catch (err) {
      console.log(err);
      return res.status(400).send({
        message: "invalid format",
      });
    }

    const updatedResult = await Task.findById(_id);
    res.send(updatedResult);
  } catch (e) {
    res.status(500).send();
  }
});

//DELETE for tasks
router.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const result = await Task.findByIdAndDelete(_id);
    if (!result) {
      return res.status(404).send();
    }
    const updatedResult = await Task.find({});
    res.send(updatedResult);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
