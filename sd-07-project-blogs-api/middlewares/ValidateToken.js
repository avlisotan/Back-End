const { Mistakes } = require('../helpers');
const { isValidToken } = require('../helpers/JWT');

const validateToken = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next(Mistakes.Fail[Mistakes.TOKEN_NOTFOUND_MESSAGE]);
  if (!isValidToken(authorization)) return next(Mistakes.Fail[Mistakes.TOKEN_INVALID_MESSAGE]);
  req.userId = isValidToken(authorization).id; 
  next();
};

module.exports = validateToken;