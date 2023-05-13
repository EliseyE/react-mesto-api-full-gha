const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const signinRouter = require('./signin');
const signupRouter = require('./signup');
const { auth } = require('../middlewares/auth');

const NotFoundError = require('../errors/not-found-error');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.use('/signin', signinRouter);
router.use('/signup', signupRouter);
router.use('/users', auth, usersRouter);
router.use('/cards', auth, cardsRouter);

router.use('/*', (req, res, next) => {
  next(new NotFoundError('Path not found'));
});

module.exports = router;
