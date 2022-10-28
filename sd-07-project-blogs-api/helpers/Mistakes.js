const { StatusCodes } = require('http-status-codes');

const DISPLAYNAME_LENGTH_MESSAGE = '"displayName" length must be at least 8 characters long';

const EMAIL_INVALID_MESSAGE = '"email" must be a valid email';
const EMAIL_REQUIRED_MESSAGE = '"email" is required';
const EMAIL_EMPTY_MESSAGE = '"email" is not allowed to be empty';

const USER_EXISTING_MESSAGE = 'User already registered';
const USER_NOTFOUND_MESSAGE = 'Invalid fields';
const USER_NONEXISTENT_MESSAGE = 'User does not exist';

const PASSWORD_REQUIRED_MESSAGE = '"password" is required';
const PASSWORD_LENGTH_MESSAGE = '"password" length must be 6 characters long';
const PASSWORD_EMPTY_MESSAGE = '"password" is not allowed to be empty';

const TOKEN_NOTFOUND_MESSAGE = 'Token not found';
const TOKEN_INVALID_MESSAGE = 'Expired or invalid token';

const CATEGORY_UNNAMED_MESSAGE = '"name" is required';

const BLOGPOST_UNTITLED_MESSSAGE = '"title" is required';
const BLOGPOST_UNCONTENT_MESSSAGE = '"content" is required';
const BLOGPOST_UNCATEGORYIDS_MESSSAGE = '"categoryIds" is required';
const BLOGPOST_UNCATEGORY_MESSSAGE = '"categoryIds" not found';

const Fail = { 
  [DISPLAYNAME_LENGTH_MESSAGE]: { 
    status: StatusCodes.BAD_REQUEST,
    message: DISPLAYNAME_LENGTH_MESSAGE,
  },
  
  [EMAIL_INVALID_MESSAGE]: { 
    status: StatusCodes.BAD_REQUEST, 
    message: EMAIL_INVALID_MESSAGE,
  },
  [EMAIL_REQUIRED_MESSAGE]: { 
    status: StatusCodes.BAD_REQUEST,
    message: EMAIL_REQUIRED_MESSAGE,
  },
  [EMAIL_EMPTY_MESSAGE]: { 
    status: StatusCodes.BAD_REQUEST,
    message: EMAIL_EMPTY_MESSAGE,
  },
  
  [USER_EXISTING_MESSAGE]: {
    status: StatusCodes.CONFLICT,
    message: USER_EXISTING_MESSAGE,
  },
  [USER_NONEXISTENT_MESSAGE]: {
    status: StatusCodes.NOT_FOUND,
    message: USER_NONEXISTENT_MESSAGE,
  },

  [PASSWORD_LENGTH_MESSAGE]: {
    status: StatusCodes.BAD_REQUEST,
    message: PASSWORD_LENGTH_MESSAGE,
  }, 
  [PASSWORD_REQUIRED_MESSAGE]: {
    status: StatusCodes.BAD_REQUEST,
    message: PASSWORD_REQUIRED_MESSAGE,
  },
  [PASSWORD_EMPTY_MESSAGE]: {
    status: StatusCodes.BAD_REQUEST,
    message: PASSWORD_EMPTY_MESSAGE,
  },

  [TOKEN_NOTFOUND_MESSAGE]: {
    status: StatusCodes.UNAUTHORIZED,
    message: TOKEN_NOTFOUND_MESSAGE,
  },
  [TOKEN_INVALID_MESSAGE]: {
    status: StatusCodes.UNAUTHORIZED,
    message: TOKEN_INVALID_MESSAGE,
  },
  
  [CATEGORY_UNNAMED_MESSAGE]: {
    status: StatusCodes.BAD_REQUEST,
    message: CATEGORY_UNNAMED_MESSAGE,
  },
  
  [BLOGPOST_UNTITLED_MESSSAGE]: {
    status: StatusCodes.BAD_REQUEST,
    message: BLOGPOST_UNTITLED_MESSSAGE,
  },
  [BLOGPOST_UNCONTENT_MESSSAGE]: {
    status: StatusCodes.BAD_REQUEST,
    message: BLOGPOST_UNCONTENT_MESSSAGE,
  },
  [BLOGPOST_UNCATEGORYIDS_MESSSAGE]: {
    status: StatusCodes.BAD_REQUEST,
    message: BLOGPOST_UNCATEGORYIDS_MESSSAGE,
  },
  [BLOGPOST_UNCATEGORY_MESSSAGE]: {
    status: StatusCodes.BAD_REQUEST,
    message: BLOGPOST_UNCATEGORY_MESSSAGE,
  },
};

module.exports = {
  DISPLAYNAME_LENGTH_MESSAGE,
  EMAIL_INVALID_MESSAGE,
  EMAIL_REQUIRED_MESSAGE,
  EMAIL_EMPTY_MESSAGE,
  USER_EXISTING_MESSAGE,
  USER_NOTFOUND_MESSAGE,
  USER_NONEXISTENT_MESSAGE,
  PASSWORD_REQUIRED_MESSAGE,
  PASSWORD_LENGTH_MESSAGE,
  PASSWORD_EMPTY_MESSAGE,
  TOKEN_NOTFOUND_MESSAGE,
  TOKEN_INVALID_MESSAGE,
  CATEGORY_UNNAMED_MESSAGE,
  BLOGPOST_UNTITLED_MESSSAGE,
  BLOGPOST_UNCONTENT_MESSSAGE,
  BLOGPOST_UNCATEGORYIDS_MESSSAGE,
  BLOGPOST_UNCATEGORY_MESSSAGE,
  Fail,
};