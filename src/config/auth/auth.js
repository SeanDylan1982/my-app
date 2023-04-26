const express = require('express');

const { handleErrors } = require('./middlewares');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../templates/signup');
const signinTemplate = require('../templates/signin');
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExists,
  requireValidPasswordForUser
} = require('./validators');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send(signupTemplate({ req }));
});

router.post(
  '/signup',
  [requireEmail, requirePassword, requirePasswordConfirmation],
  handleErrors(signupTemplate),
  async (req, res) => {
    const { username, userEmail, password, passwordConfirm } = req.body;
    const user = await usersRepo.create({ username, userEmail, password, passwordConfirm });

    req.session.userId = user.id;

    res.redirect('/MyAccount');
  }
);

router.get('/signout', (req, res) => {
  req.session = null;
  res.send('You are logged out').redirect('/');
});

router.post(
  '/signin',
  [requireEmailExists, requireValidPasswordForUser],
  handleErrors(signinTemplate),
  async (req, res) => {
    const { email } = req.body;

    const user = await usersRepo.getOneBy({ email });

    req.session.userId = user.id;

    res.redirect('/');
  }
);

module.exports = router;
