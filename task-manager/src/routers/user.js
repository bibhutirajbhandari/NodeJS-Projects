const express = require("express");
const User = require("../models/user");
const router = new express.Router();

//POST method
router.post("/users", async (req, res) => {
  //here, (a,b) are arguments of anonymous func (request,response). Arguments can be renamed but u can't change their placements
  const userInfo = new User(req.body);

  try {
    const user = await userInfo.save();
    // res.status(201).send(user);
    res.send(user);
  } catch (err) {
    // res.status(409).send( `Error Occured! ${err}`); or,
    res.status(409).send(err);
  }
});

//GET Method : Read from an endpoint

router.get("/users", async (req, res) => {
  try {
    const user = await User.find({ name: "Bibha" }); //finds and sends "bibha" ko document as a response
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

//GET users by id
router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

//PATCH method for users | PATH updates existing records
router.patch("/users/:id", async (req, res) => {
  const _id = req.params.id;

  const updates = Object.keys(req.body); //provides object keys to update
  // console.log(updateKeys);

  const allowedUpdates = ["name", "email", "password"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  try {
    // const result = await User.findByIdAndUpdate(_id, req.body);
    // console.log(user);

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    updates.forEach((update) => {
      user[update] = req.body[update];
    });
    try {
      await user.save();
    } catch (err) {
      console.log(err);
      return res.status(400).send({
        message: "invalid format",
      });
    }

    const updatedResult = await User.findById(_id);
    res.send(updatedResult);
  } catch (e) {
    res.status(500).send();
  }
});

//DELETE for users
router.delete("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const result = await User.findByIdAndDelete(_id);
    if (!result) {
      return res.status(404).send();
    }
    const updatedResult = await User.find({});
    res.send(updatedResult);
  } catch (e) {
    res.status(500).send();
  }
});

//Login
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    try {
      res.send(user);
    } catch (e) {
      console.log("unable to send user");
    }
  } catch (e) {
    res.status(400).send();
  }
});

module.exports = router;
