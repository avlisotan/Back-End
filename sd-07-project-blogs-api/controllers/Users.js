const { Router } = require('express');
const { StatusCodes } = require('http-status-codes');
const { UsersService } = require('../services');
const { Mistakes } = require('../helpers');
const { validateToken } = require('../middlewares');
const validatesUser = require('../middlewares/ValidatesUser');

const Users = Router();

Users.post('/user', validatesUser, async (req, res) => {
  const newUser = req.body;
  const token = await UsersService.createUser(newUser);
  if (!token) {
    return res.status(StatusCodes.CONFLICT).json({ message: Mistakes.USER_EXISTING_MESSAGE });
  }
  return res.status(StatusCodes.CREATED).json(token);
});

Users.post('/login', validatesUser, async (req, res) => {
  const data = req.body;
  const token = await UsersService.loginUser(data);
  if (!token) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: Mistakes.USER_NOTFOUND_MESSAGE });
  }
  return res.status(StatusCodes.OK).json(token);
});

Users.get('/user', validateToken, async (_req, res) => {
  const users = await UsersService.getAll();
  return res.status(StatusCodes.OK).json(users);
});

Users.get('/user/:id', validateToken, async (req, res) => {
  const { id } = req.params;
  const user = await UsersService.getById(id);
  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: Mistakes.USER_NONEXISTENT_MESSAGE });
  }
  res.status(StatusCodes.OK).json(user);
});

module.exports = Users;