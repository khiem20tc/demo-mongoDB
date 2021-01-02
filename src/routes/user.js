const express = require("express");
const router = express.Router();
const { UserEntity } = require("../models");
const userController = require("../controllers").userController;

router.all("/", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

router.post("/add", userController.addUser);

router.get("/get", userController.getUser);

router.put("/edit", userController.editUser);

router.delete("/delete", userController.deleteUser);

module.exports = router;
