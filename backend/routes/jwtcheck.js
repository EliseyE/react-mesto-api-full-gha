const jwtcheckRouter = require('express').Router();

const {
  jwtCheckInCookies,
} = require('../controllers/jwtcheck');

jwtcheckRouter.post('/', jwtCheckInCookies);

module.exports = jwtcheckRouter;
