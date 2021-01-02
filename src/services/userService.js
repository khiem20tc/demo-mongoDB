const UserEntity = require("../models").UserEntity;

exports.createUser = async (Name, Age, Address) => {
  const newUser = new UserEntity({
    Name,
    Age,
    Address,
  }).save();
};

exports.readUsers = async () => {
  const users = await UserEntity.find().lean();
  return users;
};

exports.updateUser = async (id, Name, Age, Address) => {
  await UserEntity.updateOne(
    { _id: id },
    { $set: { Name: Name, Age: Age, Address: Address } }
  );
};

exports.deleteUser = async (id) => {
  await UserEntity.deleteOne(id);
};
