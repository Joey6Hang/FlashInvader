const express = require("express");
const router = new express.Router();
const InvaderModel = require("../module/invader");

//READ

router.get("/create", (req, res, next) => { //id du movie
    invaderModel.find()
    .then((invaders) => {
      // console.log(invaders);
      res.status(200).json(invaders)
    })
    .catch((error) => console.error(error))
    
  });

router.get("/create/:id", (req, res, next) => { //id du movie
  InvaderModel.find({id_film: req.params.id})
  //InvaderModel.findById(req.params.id)
  .then((invader) => {
    // console.log(invader);
    res.status(200).json(invader)
  })
  .catch((error) => console.error(error))
  
});

//CREATE
router.post("/create", (req,res,next) => {
  console.log("api:back post invader")
    InvaderModel.create({
        ...req.body,
    })
    .then((invader) => {
        res.status(201).json(invader)
      })
      .catch((error) => console.error(error))
      
    });

//EDIT

router.patch("/create/:id", (req,res) => {
    InvaderModel.findByIdAndUpdate(req.params.id ,{invader: req.body.invader}, {new: true})
    .then((invader) => {
        res.status(201).json(invader)
      })
      .catch((error) => console.log("something went wrong with the invader editing", error))
      
    });

// DELETE 

router.delete("/create/:id", async (req,res, next) => {
  try {
    const deletedInvader = await InvaderModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedInvader)
  } catch(error) {
    console.error(error);
  }
})

module.exports = router;
