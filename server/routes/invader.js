const express = require("express");
const router = express.Router();
const InvaderModel = require("./../models/invader");
const fileUploader = require('./../configs/cloudinary');


// CREATE
router.post("/invaders", (req, res, next) => {
  InvaderModel.create(req.body)
  .then(invaders => {
     console.log('Created new movie: ', invaders);
    res.status(200).json(invaders);
  })
  .catch(err => next(err));

});

// POST '/api/upload' => Route that will receive an image, send it to Cloudinary via the fileUploader and return the image URL
router.post('/upload', fileUploader.single('photo'), (req, res, next) => {
  // console.log('file is: ', req.file)
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  // get the URL of the uploaded file and send it as a response.
  // 'secure_url' can be any name, just make sure you remember to use the same when accessing it on the frontend
  res.json({ secure_url: req.file.path });
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
router.patch("/update/:id", async (req, res, next) => {
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
