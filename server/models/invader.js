const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// plan the document shapes
const invaderSchema = new Schema({
  idName:String,
  address:String,
  photo: String,
  point: Number,
  supplementary:String,
  arrondissement:Number
});

// buiold an object embeding CRUD methods and  attached to the cat collection id db
const InvaderModel = mongoose.model("invaders", invaderSchema);

// export it for later reuse
module.exports = InvaderModel;
