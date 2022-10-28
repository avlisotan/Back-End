const { User } = require('../models');
const JWT = require('../helpers/JWT');

const createUser = async (newUser) => {
  const user = await User.findOne({ where: { email: newUser.email } });
  if (user) return null; 
  const userCreated = await User.create(newUser);
  const token = await JWT.createToken({ ...userCreated.dataValues });
  return token;
};

const loginUser = async (data) => {
  const user = await User.findOne({ where: { email: data.email } });
  if (!user) return null;
  const userToken = { ...user.dataValues };
  const token = await JWT.createToken(userToken);
  return token;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const getById = async (id) => {
const user = await User.findByPk(id);
return user;
};

module.exports = {
  getAll,
  getById,
  createUser,
  loginUser,
};
