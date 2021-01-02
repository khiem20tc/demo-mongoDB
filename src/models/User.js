const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  Age: {
    type: Number,
  },
  Address: {
    type: String,
  },
  JoinAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = { UserEntity: mongoose.model("User", UserSchema) };
