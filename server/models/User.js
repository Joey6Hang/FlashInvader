const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "editor", "user"],
    default: "user"
  },
  username: {
    type: String,
    default: "anonym"
  },
  avatar: {
    type: String,
    default: "/images/Avatar.jpeg"
  } 
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
