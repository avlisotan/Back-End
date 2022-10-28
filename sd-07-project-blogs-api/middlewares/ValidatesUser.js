const joi = require('joi');
const { Mistakes } = require('../helpers');

const validateDisplayName = (req, _res, next) => {
  const { displayName } = req.body;
  const displaySchema = joi.string().min(8).required().messages({
    'string.min': Mistakes.DISPLAYNAME_LENGTH_MESSAGE,
  });
  const { error } = displaySchema.validate(displayName);
  
  if (error) {
    return next(Mistakes.Fail[error.details.pop().message]);
  }
   next();
};

const validateEmail = (req, _res, next) => {
  const { email } = req.body;
  const emailSchema = joi.string().email().required().messages({
    'string.base': Mistakes.EMAIL_INVALID_MESSAGE,
    'string.email': Mistakes.EMAIL_INVALID_MESSAGE,
    'any.required': Mistakes.EMAIL_REQUIRED_MESSAGE,
    'string.empty': Mistakes.EMAIL_EMPTY_MESSAGE,
  });
    const { error } = emailSchema.validate(email);
    if (error) {
      return next(Mistakes.Fail[error.details.pop().message]);
    }
  next();
};

const validatePassword = (req, _res, next) => {
  const { password } = req.body;
  const passwordSchema = joi.string().min(6).required().messages({
    'string.min': Mistakes.PASSWORD_LENGTH_MESSAGE,
    'any.required': Mistakes.PASSWORD_REQUIRED_MESSAGE,
    'string.empty': Mistakes.PASSWORD_EMPTY_MESSAGE,
  });

  const { error } = passwordSchema.validate(password);
   if (error) {
    return next(Mistakes.Fail[error.details.pop().message]);
  }
    next();
 };

module.exports = [
  validateDisplayName,
  validateEmail, 
  validatePassword,
];
