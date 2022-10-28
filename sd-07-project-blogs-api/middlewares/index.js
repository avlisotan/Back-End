const errorMidleware = require('./Error');
const validatesUser = require('./ValidatesUser');
const validateToken = require('./ValidateToken');
const validateCategory = require('./ValidateCategory');
const validateBlogPost = require('./ValidateBlogPost');

module.exports = {
  errorMidleware,
  validatesUser,
  validateToken,
  validateCategory,
  validateBlogPost,
};