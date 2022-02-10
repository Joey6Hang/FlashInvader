const express = require("express");
const router = express.Router();
const InvaderModel = require("./../models/invader");

// CREATE
router.post("/invaders", async (req, res, next) => {
  try {
    const newInvader = await InvaderModel.create(req.body);
    res.status(201).json(newInvader);
  } catch (err) {
    next(err);
  }
});

// READ

router.get("/invaders", async (req, res, next) => {
  try {
    const invaders = await InvaderModel.find();
    res.status(200).json(invaders);
  } catch (err) {
    next(err);
  }
});

router.get("/invader/:id", async (req, res, next) => {
  try {
    const invader = await InvaderModel.findById(req.params.id);
    res.status(200).json(invader);
  } catch (err) {
    next(err);
  }
});

// UPDATE
router.patch("/invader/:id", async (req, res, next) => {
  try {
    const updatedInvader = await InvaderModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedInvader);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete("/invader/:id", async (req, res, next) => {
  try {
    const deletedInvader = await InvaderModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedInvader);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
