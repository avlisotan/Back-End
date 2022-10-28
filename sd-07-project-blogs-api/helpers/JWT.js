const JWT = require('jsonwebtoken');
// const { StatusCodes } = require('http-status-codes');

const SECRET = process.env.SECRET || 'blogsApiT7';

const createToken = async (newUser) => {
  const userToken = newUser;
  delete userToken.password;

  const jwtConfig = {
    expiresIn: '12h',
    algorithm: 'HS256',
  };
  
  const token = JWT.sign({ ...userToken }, SECRET, jwtConfig);
  return { token };
};

const isValidToken = (token) => {
  try {
    const userToken = JWT.verify(token, SECRET);
    return (userToken);
  } catch (error) {
    return false;
  }
};

module.exports = {
  createToken,
  isValidToken,
};
