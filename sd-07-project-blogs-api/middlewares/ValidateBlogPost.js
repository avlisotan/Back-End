const joi = require('joi');
const { Mistakes } = require('../helpers');

const validateBlogPost = (req, _res, next) => {
  const post = req.body;
  const blogPostSchema = joi.object({
    title: joi.string().required().messages({
      'any.required': Mistakes.BLOGPOST_UNTITLED_MESSSAGE }),
    content: joi.string().required().messages({
      'any.required': Mistakes.BLOGPOST_UNCONTENT_MESSSAGE }),
    categoryIds: joi.array().required().messages({
      'any.required': Mistakes.BLOGPOST_UNCATEGORYIDS_MESSSAGE }),
  });
  const { error } = blogPostSchema.validate(post);
  console.log('error ===>', error);
  
  if (error) {
    return next(Mistakes.Fail[error.details.pop().message]);
  }
   next();
};

module.exports = validateBlogPost;