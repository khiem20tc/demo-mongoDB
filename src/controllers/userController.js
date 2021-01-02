const userService = require("../services").userService;

exports.addUser = async (req, res) => {
  const { Name, Age, Address } = req.body;

  await userService.createUser(Name, Age, Address);

  res.json({ message: "Create new User successully" });
};

exports.getUser = async (req, res) => {
  const users = await userService.readUsers();
  res.json(users);
};

exports.editUser = async (req, res) => {
  const { id, Name, Age, Address } = req.body;
  await userService.updateUser(id, Name, Age, Address);

  res.json({ message: `Edit ${req.body.id} User successully` });
};

exports.deleteUser = async (req, res) => {
  await userService.deleteUser(req.body.id);

  res.json({ message: `Delete ${req.body.id} User successully` });
};
