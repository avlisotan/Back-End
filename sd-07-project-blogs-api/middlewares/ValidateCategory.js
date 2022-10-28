const joi = require('joi');
const { Mistakes } = require('../helpers');

const validateCategory = (req, _res, next) => {
  const { name } = req.body;
  const categorySchema = joi.string().required().messages({
    'any.required': Mistakes.CATEGORY_UNNAMED_MESSAGE,
    'string.empty': Mistakes.CATEGORY_UNNAMED_MESSAGE,
  });
  const { error } = categorySchema.validate(name);
  
  if (error) {
    return next(Mistakes.Fail[error.details.pop().message]);
  }
   next();
};

module.exports = validateCategory;