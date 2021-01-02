const mongoose = require("mongoose");
// const { MONGO_URL } = require('../../environments')
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL);

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL, connectionOptions);

mongoose.set("debug", true);

module.exports = { mongoose };
