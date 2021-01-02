require("dotenv").config();

//Application
const PORT = process.env.PORT || 5000;

//Jsonwebtoken
const PRIVATE_KEY = process.env.PRIVATE_KEY || "huukhiem";

//bycrypt
const SALT = process.env.SALT || 10;

//Database
const DATABASE_NAME = process.env.DATABASE_NAME || "MongoDBdemo";
const MONGO_URL = process.env.MONGO_URL || ``;

module.exports = {
  PORT,
  DATABASE_NAME,
  MONGO_URL,
  PRIVATE_KEY,
  SALT,
};
