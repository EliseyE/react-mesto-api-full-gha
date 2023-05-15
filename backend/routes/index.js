const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const signinRouter = require('./signin');
const logoutRouter = require('./logout');
const signupRouter = require('./signup');
const jwtcheckRouter = require('./jwtcheck');
const { auth } = require('../middlewares/auth');
const { cors } = require('../middlewares/cors');

const NotFoundError = require('../errors/not-found-error');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.use(cors);

router.use('/jwtcheck', auth, jwtcheckRouter);
router.use('/signin', signinRouter);
router.use('/logout', logoutRouter);
router.use('/signup', signupRouter);
router.use('/users', auth, usersRouter);
router.use('/cards', auth, cardsRouter);

router.use('/*', (req, res, next) => {
  next(new NotFoundError('Path not found'));
});

module.exports = router;
