// eslint-disable-next-line no-useless-escape
const URL_REG_EXP = /https?:\/\/(w{3}\.)?([a-z0-9\-]+)(\.[a-z0-9\-]{2,10})+\S*#?/i;

// CORS
const ALLOWED_CORS = [
  'https://mesto.elisey.students.nomoredomains.monster',
  'http://mesto.elisey.students.nomoredomains.monster',
  'localhost:3000',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  URL_REG_EXP,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
};
